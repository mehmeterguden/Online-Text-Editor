import { useRef, useCallback, memo } from 'react'
import { FiTrash, FiChevronDown, FiCornerDownRight, FiDelete, FiX, FiCode, FiFileText, FiFilter } from 'react-icons/fi'
import { useCleaningMenu } from '@/hooks/useCleaningMenu'
import { CleaningFeature } from '@/types/cleaning'
import { getFeaturesByCategory } from '@/features/cleaning'
import { CATEGORY_TITLES } from '@/constants/cleaning'

interface CleaningToolsProps {
  onCleanText: (featureId: string) => void
}

// Temizleme özelliği butonu komponenti
const CleaningFeatureButton = memo(({ 
  feature, 
  onClean 
}: { 
  feature: CleaningFeature
  onClean: (id: string) => void 
}) => (
  <button 
    key={feature.id}
    className={`w-full px-4 py-1.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm flex items-center gap-2 ${!feature.isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
    onClick={() => feature.isActive && onClean(feature.id)}
    title={feature.description}
    disabled={!feature.isActive}
  >
    <FiCornerDownRight className="w-4 h-4 text-gray-400" />
    <span>{feature.name}</span>
  </button>
))

// Kategori başlığı komponenti
const CategoryHeader = memo(({ 
  title, 
  icon, 
  isOpen, 
  onToggle 
}: { 
  title: string
  icon: JSX.Element
  isOpen: boolean
  onToggle: () => void 
}) => (
  <button 
    className="w-full px-4 py-2 text-left flex items-center justify-between bg-gray-50 dark:bg-gray-900"
    onClick={onToggle}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{title}</span>
    </div>
    <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
  </button>
))

export const CleaningTools = memo(function CleaningTools({ onCleanText }: CleaningToolsProps) {
  const { isOpen, sections, toggleMenu, toggleSection } = useCleaningMenu()
  const menuRef = useRef<HTMLDivElement>(null)

  const handleCleanText = useCallback((id: string) => {
    onCleanText(id)
  }, [onCleanText])

  const renderBasicCleaningSection = useCallback(() => {
    const spaceFeatures = getFeaturesByCategory('basic').filter((f: CleaningFeature) => f.subCategory === 'space')
    const lineFeatures = getFeaturesByCategory('basic').filter((f: CleaningFeature) => f.subCategory === 'line')

    return (
      <>
        <div className="text-center py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-2">
            <FiDelete className="w-4 h-4" />
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{CATEGORY_TITLES.basic}</span>
            <FiChevronDown 
              className={`w-4 h-4 transition-transform ${sections.basic ? 'rotate-180' : ''}`}
              onClick={() => toggleSection('basic')}
            />
          </div>
        </div>

        {sections.basic && (
          <div className="grid grid-cols-2 gap-2 p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs font-medium text-gray-500">Boşluk Temizleme</div>
              {spaceFeatures.map(feature => (
                <CleaningFeatureButton 
                  key={feature.id} 
                  feature={feature} 
                  onClean={handleCleanText} 
                />
              ))}
            </div>
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs font-medium text-gray-500">Satır Temizleme</div>
              {lineFeatures.map(feature => (
                <CleaningFeatureButton 
                  key={feature.id} 
                  feature={feature} 
                  onClean={handleCleanText} 
                />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }, [sections.basic, handleCleanText])

  const renderCategorySection = useCallback((category: string, title: string, icon: JSX.Element) => (
    <div key={category} className="space-y-1">
      <CategoryHeader
        title={title}
        icon={icon}
        isOpen={sections[category as keyof typeof sections]}
        onToggle={() => toggleSection(category as keyof typeof sections)}
      />
      {sections[category as keyof typeof sections] && (
        <>
          {getFeaturesByCategory(category).map(feature => (
            <CleaningFeatureButton 
              key={feature.id} 
              feature={feature} 
              onClean={handleCleanText} 
            />
          ))}
        </>
      )}
    </div>
  ), [sections, handleCleanText])

  return (
    <div className="flex flex-col items-center gap-2 relative" ref={menuRef}>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Temizleme Araçları</span>
      <div className="flex gap-2">
        <button
          className="btn-toolbar flex items-center gap-2"
          title="Temizleme Araçları"
          onClick={toggleMenu}
        >
          <FiTrash className="w-4 h-4" />
          <span>Temizle</span>
          <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 min-w-[800px]" ref={menuRef}>
          {renderBasicCleaningSection()}

          <div className="grid grid-cols-2 gap-2 p-2">
            <div className="grid grid-cols-2 gap-2">
              {renderCategorySection('character', CATEGORY_TITLES.character, <FiX className="w-4 h-4" />)}
              {renderCategorySection('content', CATEGORY_TITLES.content, <FiCode className="w-4 h-4" />)}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {renderCategorySection('formatting', CATEGORY_TITLES.formatting, <FiFileText className="w-4 h-4" />)}
              {renderCategorySection('pattern', CATEGORY_TITLES.pattern, <FiFilter className="w-4 h-4" />)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}) 