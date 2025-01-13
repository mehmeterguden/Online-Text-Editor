import { useState, useRef, useEffect } from 'react'
import { Menu } from 'antd'
import { 
  FiType, FiTrash, FiList, FiHash, FiLink, FiChevronDown, 
  FiCornerDownRight, FiMinus, FiDelete, FiX, FiCode,
  FiHash as FiNumber, FiAlignLeft, FiCalendar, FiMail,
  FiGlobe, FiFileText, FiSlash, FiFilter
} from 'react-icons/fi'

import {
  allCleaningFeatures,
  getFeaturesByCategory,
  getFeatureById,
  CleaningFeature,
  BasicCleaningFeature
} from '../features/cleaning'

const { SubMenu } = Menu

interface ToolbarProps {
  onConvertCase: (type: 'upper' | 'lower' | 'title' | 'sentence') => void
  onSortLines: (type: 'asc' | 'desc' | 'length' | 'random') => void
  onConvertCharacters: (type: 'tr-en' | 'en-tr') => void
  onUrlEncodeDecode: (type: 'encode' | 'decode') => void
  onAddPrefix: (prefix: string) => void
  onAddSuffix: (suffix: string) => void
  onFormatText: () => void
  onShowMarkdown: () => string
  onCleanText: (featureId: string) => void
  text: string
}

export function Toolbar({
  onConvertCase,
  onSortLines,
  onConvertCharacters,
  onUrlEncodeDecode,
  onAddPrefix,
  onAddSuffix,
  onFormatText,
  onShowMarkdown,
  onCleanText,
  text
}: ToolbarProps) {
  const [prefix, setPrefix] = useState('')
  const [suffix, setSuffix] = useState('')
  const [isCleaningMenuOpen, setIsCleaningMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState({
    basic: true,
    character: true,
    content: true,
    formatting: true,
    pattern: true
  })
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsCleaningMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isCleaningMenuOpen) {
      setOpenSections({
        basic: true,
        character: true,
        content: true,
        formatting: true,
        pattern: true
      })
    }
  }, [isCleaningMenuOpen])

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCleaningAction = (featureId: string) => {
    if (typeof onCleanText === 'function') {
      onCleanText(featureId)
    }
  }

  const renderCleaningFeature = (feature: CleaningFeature) => (
    <button 
      key={feature.id}
      className={`w-full px-4 py-1.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm flex items-center gap-2 ${!feature.isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={() => feature.isActive && handleCleaningAction(feature.id)}
      title={feature.description}
      disabled={!feature.isActive}
    >
      <FiCornerDownRight className="w-4 h-4 text-gray-400" />
      <span>{feature.name}</span>
    </button>
  )

  const renderBasicCleaningSection = () => {
    const spaceFeatures = getFeaturesByCategory('basic').filter((f: any) => f.subCategory === 'space')
    const lineFeatures = getFeaturesByCategory('basic').filter((f: any) => f.subCategory === 'line')

    return (
      <>
        <div className="text-center py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-2">
            <FiDelete className="w-4 h-4" />
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">TEMEL METİN TEMİZLEME</span>
            <FiChevronDown 
              className={`w-4 h-4 transition-transform ${openSections.basic ? 'rotate-180' : ''}`}
              onClick={() => toggleSection('basic')}
            />
          </div>
        </div>

        {openSections.basic && (
          <div className="grid grid-cols-2 gap-2 p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs font-medium text-gray-500">Boşluk Temizleme</div>
              {spaceFeatures.map(renderCleaningFeature)}
            </div>
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs font-medium text-gray-500">Satır Temizleme</div>
              {lineFeatures.map(renderCleaningFeature)}
            </div>
          </div>
        )}
      </>
    )
  }

  const renderCategorySection = (category: string, title: string, icon: any) => (
    <div className="space-y-1">
      <button 
        className="w-full px-4 py-2 text-left flex items-center justify-between bg-gray-50 dark:bg-gray-900"
        onClick={() => toggleSection(category as keyof typeof openSections)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{title}</span>
        </div>
        <FiChevronDown className={`w-4 h-4 transition-transform ${openSections[category as keyof typeof openSections] ? 'rotate-180' : ''}`} />
      </button>
      {openSections[category as keyof typeof openSections] && (
        <>
          {getFeaturesByCategory(category).map(renderCleaningFeature)}
        </>
      )}
    </div>
  )

  const cleaningFeatures = [
    {
      id: 'empty-lines',
      label: 'Boş Satırları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Boşluk Temizleme'
    },
    {
      id: 'extra-spaces',
      label: 'Fazla Boşlukları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Boşluk Temizleme'
    },
    {
      id: 'trim-lines',
      label: 'Satır Başı/Sonu Boşlukları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Boşluk Temizleme'
    },
    {
      id: 'tabs',
      label: 'Tab Karakterlerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Boşluk Temizleme'
    },
    {
      id: 'all-spaces',
      label: 'Tüm Boşlukları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Boşluk Temizleme'
    },
    {
      id: 'special-chars',
      label: 'Özel Karakterleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'punctuation',
      label: 'Noktalama İşaretlerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'emoji-symbols',
      label: 'Emoji ve Sembolleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'numbers',
      label: 'Sayıları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'non-ascii',
      label: 'ASCII Olmayan Karakterleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'control-chars',
      label: 'Kontrol Karakterlerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'diacritics',
      label: 'Aksanlı Karakterleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'currency',
      label: 'Para Birimlerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Karakter Temizleme'
    },
    {
      id: 'html-tags',
      label: 'HTML Etiketlerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'xml-json',
      label: 'XML/JSON Yapılarını Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'duplicate-lines',
      label: 'Tekrarlanan Satırları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'urls',
      label: 'URL\'leri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'emails',
      label: 'E-posta Adreslerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'markdown',
      label: 'Markdown Formatını Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'css',
      label: 'CSS Stillerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'scripts',
      label: 'Script Etiketlerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'İçerik Temizleme'
    },
    {
      id: 'comments',
      label: 'Yorumları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'line-numbers',
      label: 'Satır Numaralarını Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'quoted-text',
      label: 'Tırnak İçindeki Metinleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'parentheses-text',
      label: 'Parantez İçindeki Metinleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'code-blocks',
      label: 'Kod Bloklarını Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'ansi-colors',
      label: 'ANSI Renklerini Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'indentation',
      label: 'Girinti Boşluklarını Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'line-breaks',
      label: 'Satır Sonu Karakterlerini Düzenle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Format Temizleme'
    },
    {
      id: 'dates',
      label: 'Tarihleri Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Pattern Temizleme'
    },
    {
      id: 'numeric-lines',
      label: 'Sayısal Satırları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Pattern Temizleme'
    },
    {
      id: 'alpha-lines',
      label: 'Alfabetik Satırları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Pattern Temizleme'
    },
    {
      id: 'uppercase-lines',
      label: 'Büyük Harfli Satırları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Pattern Temizleme'
    },
    {
      id: 'lowercase-lines',
      label: 'Küçük Harfli Satırları Temizle',
      icon: <FiDelete className="w-4 h-4" />,
      category: 'Pattern Temizleme'
    }
  ];

  const cleaningCategories = [
    'Boşluk Temizleme',
    'Karakter Temizleme',
    'İçerik Temizleme',
    'Format Temizleme',
    'Pattern Temizleme'
  ];

  const renderCleaningFeatures = () => {
    return cleaningCategories.map(category => (
      <SubMenu key={category} title={category}>
        {cleaningFeatures
          .filter(feature => feature.category === category)
          .map(feature => (
            <Menu.Item
              key={feature.id}
              icon={feature.icon}
              onClick={() => onCleanText(feature.id)}
            >
              {feature.label}
            </Menu.Item>
          ))}
      </SubMenu>
    ));
  };

  return (
    <div className="grid gap-4">
      <div className="card-base p-4">
        <div className="flex flex-wrap gap-4">
          {/* Case Conversion */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Büyük/Küçük Harf</span>
            <div className="flex gap-2">
              <button
                onClick={() => onConvertCase('upper')}
                className="btn-toolbar"
                title="Büyük Harfe Çevir"
              >
                <FiType className="w-4 h-4" /> ABC
              </button>
              <button
                onClick={() => onConvertCase('lower')}
                className="btn-toolbar"
                title="Küçük Harfe Çevir"
              >
                <FiType className="w-4 h-4" /> abc
              </button>
              <button
                onClick={() => onConvertCase('sentence')}
                className="btn-toolbar"
                title="Cümle Başı Büyük"
              >
                <FiType className="w-4 h-4" /> Abc
              </button>
              <button
                onClick={() => onConvertCase('title')}
                className="btn-toolbar"
                title="Kelime Başları Büyük"
              >
                <FiType className="w-4 h-4" /> Abc Def
              </button>
            </div>
          </div>

          <div className="w-px h-8 bg-light-border dark:bg-dark-border self-center" />

          {/* Cleaning Tools Dropdown */}
          <div className="flex flex-col items-center gap-2 relative" ref={menuRef}>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Temizleme Araçları</span>
            <div className="flex gap-2">
              <button
                className="btn-toolbar flex items-center gap-2"
                title="Temizleme Araçları"
                onClick={() => setIsCleaningMenuOpen(!isCleaningMenuOpen)}
              >
                <FiTrash className="w-4 h-4" />
                <span>Temizle</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isCleaningMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {isCleaningMenuOpen && (
              <div className="absolute top-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 min-w-[800px]" ref={menuRef}>
                {renderBasicCleaningSection()}

                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {renderCategorySection('character', 'KARAKTER', <FiX className="w-4 h-4" />)}
                    {renderCategorySection('content', 'İÇERİK', <FiCode className="w-4 h-4" />)}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {renderCategorySection('formatting', 'FORMAT', <FiFileText className="w-4 h-4" />)}
                    {renderCategorySection('pattern', 'PATTERN', <FiFilter className="w-4 h-4" />)}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-8 bg-light-border dark:bg-dark-border self-center" />

          {/* Sorting Tools */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Sıralama Araçları</span>
            <div className="flex gap-2">
              <button
                onClick={() => onSortLines('asc')}
                className="btn-toolbar"
                data-tip="Metni A'dan Z'ye sırala"
              >
                <FiLink className="w-4 h-4" /> A→Z
              </button>
              <button
                onClick={() => onSortLines('desc')}
                className="btn-toolbar"
                data-tip="Metni Z'den A'ya sırala"
              >
                <FiLink className="w-4 h-4" /> Z→A
              </button>
              <button
                onClick={() => onSortLines('length')}
                className="btn-toolbar"
                data-tip="Satırları kısadan uzuna sırala"
              >
                <FiLink className="w-4 h-4" /> 123
              </button>
              <button
                onClick={() => onSortLines('length')}
                className="btn-toolbar"
                data-tip="Satırları uzundan kısaya sırala"
              >
                <FiLink className="w-4 h-4" /> 321
              </button>
              <button
                onClick={() => onSortLines('random')}
                className="btn-toolbar"
                data-tip="Satırları rastgele sırala"
              >
                <FiLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-px h-8 bg-light-border dark:bg-dark-border self-center" />

          {/* Character Conversion */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Karakter Dönüşümü</span>
            <div className="flex gap-2">
              <button
                onClick={() => onConvertCharacters('tr-en')}
                className="btn-toolbar"
                title="Türkçe → İngilizce"
              >
                <FiLink className="w-4 h-4" /> TR→EN
              </button>
              <button
                onClick={() => onConvertCharacters('en-tr')}
                className="btn-toolbar"
                title="İngilizce → Türkçe"
              >
                <FiLink className="w-4 h-4" /> EN→TR
              </button>
            </div>
          </div>

          <div className="w-px h-8 bg-light-border dark:bg-dark-border self-center" />

          {/* URL Tools */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">URL Araçları</span>
            <div className="flex gap-2">
              <button
                onClick={() => onUrlEncodeDecode('encode')}
                className="btn-toolbar"
                title="URL Encode"
              >
                <FiLink className="w-4 h-4" /> Encode
              </button>
              <button
                onClick={() => onUrlEncodeDecode('decode')}
                className="btn-toolbar"
                title="URL Decode"
              >
                <FiLink className="w-4 h-4" /> Decode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Tools */}
      <div className="card-base p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Satır Başına Ekle
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="input flex-1 "
                placeholder="Ön ek..."
              />
              <button
                onClick={() => onAddPrefix(prefix)}
                className="btn-toolbar"
                title="Başa Ekle"
              >
                <FiLink className="w-4 h-4" /> Ekle
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Satır Sonuna Ekle
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                className="input flex-1"
                placeholder="Son ek..."
              />
              <button
                onClick={() => onAddSuffix(suffix)}
                className="btn-toolbar"
                title="Sona Ekle"
              >
                <FiLink className="w-4 h-4" /> Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
