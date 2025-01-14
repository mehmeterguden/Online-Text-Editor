import { FiX, FiRotateCcw } from 'react-icons/fi'
import { EditorSettings, defaultEditorSettings } from '../features/editor/types'
import { useCallback, useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { useTheme } from '../hooks/useTheme'
import { NumberInput } from './NumberInput'
import '../styles/tooltip.css'

interface EditorSettingsPopupProps {
  settings: EditorSettings
  onUpdate: (settings: Partial<EditorSettings>) => void
  onClose: () => void
  isOpen: boolean
  
}



const SAMPLE_TEXT = `# Metin Editörü Önizleme
Bu metin, editör ayarlarını test etmeniz için hazırlanmıştır.

## 1. Başlıklar ve Metinler
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 1.1 Farklı Uzunlukta Metinler
Kısa metin
Orta uzunlukta bir metin örneği
Çok uzun bir metin örneği, böylece kelime kaydırma özelliğini test edebilirsiniz. Bu metin özellikle uzun tutulmuştur.

## 2. Listeler ve Sıralamalar
1. Numaralı liste örneği
2. İkinci madde
   - Alt madde 1
   - Alt madde 2
3. Üçüncü madde

* Madde işaretli liste
* Başka bir madde
  * Alt madde örneği
  * Başka bir alt madde

## 3. Kod Örnekleri
\`\`\`typescript
// TypeScript kod örneği
interface User {
  id: number;
  name: string;
  email: string;
}

function formatUser(user: User): string {
  return \`\${user.name} (\${user.email})\`;
}

const user: User = {
  id: 1,
  name: "Mehmet Can",
  email: "ornek@email.com"
};

console.log(formatUser(user));
\`\`\`

## 4. Özel Karakterler ve Semboller
### 4.1 Türkçe Karakterler
İŞĞÜÇÖ işğüçö - Türkçe karakterler örneği

### 4.2 Semboller ve Sayılar
!@#$%^&*()_+-=[]{}|;:'",./<>?
12345 67890

## 5. Tablo Örneği
| Başlık 1 | Başlık 2 | Başlık 3 |
|----------|----------|----------|
| Hücre 1  | Hücre 2  | Hücre 3  |
| Örnek A  | Örnek B  | Örnek C  |

## 6. Metin Biçimlendirme
**Kalın metin** örneği
*İtalik metin* örneği
~~Üstü çizili~~ metin örneği
\`Kod\` biçimli metin

## 7. Alıntı ve Not
> Bu bir alıntı örneğidir. Alıntı içinde farklı uzunlukta metinler kullanılabilir.
> İkinci satır örneği.

Not: Bu metin editör ayarlarını test etmek için hazırlanmıştır.

## 8. Boşluk ve Girinti Örnekleri
    Bu metin girintili yazılmıştır
        Bu metin daha fazla girintiye sahiptir
            En fazla girintili metin

## 9. URL ve Bağlantılar
https://www.example.com
[Örnek Bağlantı](https://www.example.com)
[Başka Bir Bağlantı](https://www.example.com/test)

---
Son satır örneği`;

const fontSizeOptions = [
  { label: 'XS', value: 12, tooltip: 'Çok küçük (12px)' },
  { label: 'S', value: 14, tooltip: 'Küçük (14px)' },
  { label: 'M', value: 16, tooltip: 'Normal (16px)' },
  { label: 'L', value: 18, tooltip: 'Büyük (18px)' },
  { label: 'XL', value: 20, tooltip: 'Çok büyük (20px)' }
]

const lineHeightOptions = [
  { label: 'XS', value: 1.2, tooltip: 'Çok sıkışık (1.2x)' },
  { label: 'S', value: 1.4, tooltip: 'Sıkışık (1.4x)' },
  { label: 'M', value: 1.6, tooltip: 'Normal (1.6x)' },
  { label: 'L', value: 1.8, tooltip: 'Geniş (1.8x)' },
  { label: 'XL', value: 2.0, tooltip: 'Çok geniş (2.0x)' }
]

const letterSpacingOptions = [
  { label: 'XS', value: 0, tooltip: 'Çok sıkışık (0px)' },
  { label: 'S', value: 0.3, tooltip: 'Sıkışık (0.3px)' },
  { label: 'M', value: 0.5, tooltip: 'Normal (0.5px)' },
  { label: 'L', value: 0.8, tooltip: 'Geniş (0.8px)' },
  { label: 'XL', value: 1, tooltip: 'Çok geniş (1px)' }
]

export function EditorSettingsPopup({ settings, onUpdate, onClose, isOpen }: EditorSettingsPopupProps) {
  const { theme } = useTheme()
  const [previewTheme, setPreviewTheme] = useState(theme)
  
  // Tema değişikliğini takip et
  useEffect(() => {
    if (isOpen) {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      setPreviewTheme(currentTheme)
    }
  }, [isOpen, theme])

  const handleReset = () => {
    onUpdate(defaultEditorSettings)
  }

  if (!isOpen) return null

  const monacoTheme = previewTheme === 'dark' ? 'vs-dark' : 'vs-light'

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-7xl mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Editör Ayarları
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 group"
                data-tip="Ayarları sıfırla"
              >
                <FiRotateCcw className="w-6 h-6 group-hover:text-blue-500" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 group no-tooltip"
              >
                <FiX className="w-6 h-6 group-hover:text-red-500" />
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sol Taraf - Ayarlar */}
            <div className="w-2/3">
              <div className="space-y-8">
                {/* Temel Ayarlar */}
                <div className="space-y-6">
                  {/* Yazı Tipi ve Boyutu */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>Yazı Tipi</span>
                      </label>
                      <select
                        value={settings.fontFamily}
                        onChange={(e) => onUpdate({ fontFamily: e.target.value })}
                        className="select w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg"
                        data-tip="Editörde kullanılacak yazı tipini seçin"
                      >
                        <option value="JetBrains Mono">JetBrains Mono</option>
                        <option value="Fira Code">Fira Code</option>
                        <option value="Source Code Pro">Source Code Pro</option>
                        <option value="Consolas">Consolas</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Menlo">Menlo</option>
                        <option value="Ubuntu Mono">Ubuntu Mono</option>
                        <option value="Roboto Mono">Roboto Mono</option>
                        <option value="IBM Plex Mono">IBM Plex Mono</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>Yazı Boyutu</span>
                      </label>
                      <div className="flex gap-2">
                        <div className="grid grid-cols-5 gap-2 flex-1">
                          {fontSizeOptions.map((option) => (
                            <button
                              key={option.label}
                              onClick={() => onUpdate({ fontSize: option.value })}
                              className={`px-3 py-2 rounded-lg transition-colors ${
                                settings.fontSize === option.value
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                              data-tip={option.tooltip}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                        <div className="w-24">
                          <NumberInput
                            value={settings.fontSize}
                            onChange={(value) => onUpdate({ fontSize: value })}
                            min={8}
                            max={72}
                            tooltip="Özel yazı boyutu girin (8-72 arası)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Satır Yüksekliği ve Harf Aralığı */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>Satır Yüksekliği</span>
                      </label>
                      <div className="flex gap-2">
                        <div className="grid grid-cols-5 gap-2 flex-1">
                          {lineHeightOptions.map((option) => (
                            <button
                              key={option.label}
                              onClick={() => onUpdate({ lineHeight: option.value })}
                              className={`px-3 py-2 rounded-lg transition-colors ${
                                settings.lineHeight === option.value
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                              data-tip={option.tooltip}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                        <div className="w-24">
                          <NumberInput
                            value={settings.lineHeight}
                            onChange={(value) => onUpdate({ lineHeight: value })}
                            min={1}
                            max={3}
                            step={0.1}
                            tooltip="Özel satır yüksekliği girin (1-3 arası)"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>Harf Aralığı</span>
                      </label>
                      <div className="flex gap-2">
                        <div className="grid grid-cols-5 gap-2 flex-1">
                          {letterSpacingOptions.map((option) => (
                            <button
                              key={option.label}
                              onClick={() => onUpdate({ letterSpacing: option.value })}
                              className={`px-3 py-2 rounded-lg transition-colors ${
                                settings.letterSpacing === option.value
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                              data-tip={option.tooltip}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                        <div className="w-24">
                          <NumberInput
                            value={settings.letterSpacing}
                            onChange={(value) => onUpdate({ letterSpacing: value })}
                            min={0}
                            max={2}
                            step={0.05}
                            tooltip="Özel harf aralığı girin (0-2 arası)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editör Özellikleri */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.wordWrap}
                        onChange={(e) => onUpdate({ wordWrap: e.target.checked })}
                        className="checkbox"
                        data-tip="Uzun satırları otomatik olarak alt satıra kaydır"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Kelime Kaydırma
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.lineNumbers}
                        onChange={(e) => onUpdate({ lineNumbers: e.target.checked })}
                        className="checkbox"
                        data-tip="Sol tarafta satır numaralarını göster"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Satır Numaraları
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.minimap}
                        onChange={(e) => onUpdate({ minimap: e.target.checked })}
                        className="checkbox"
                        data-tip="Sağ tarafta kod haritasını göster"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Mini Harita
                      </span>
                    </label>


                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.smoothScrolling}
                        onChange={(e) => onUpdate({ smoothScrolling: e.target.checked })}
                        className="checkbox"
                        data-tip="Sayfa kaydırma hareketlerini yumuşat"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Yumuşak Kaydırma
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.bracketPairColorization}
                        onChange={(e) => onUpdate({ bracketPairColorization: e.target.checked })}
                        className="checkbox"
                        data-tip="Parantez çiftlerini renklendir"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Parantez Renklendirme
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.guides}
                        onChange={(e) => onUpdate({ guides: e.target.checked })}
                        className="checkbox"
                        data-tip="Dikey girinti çizgilerini göster"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Girinti Kılavuzları
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.autoClosingBrackets}
                        onChange={(e) => onUpdate({ autoClosingBrackets: e.target.checked })}
                        className="checkbox"
                        data-tip="Parantezleri otomatik olarak kapat"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Otomatik Parantez Kapatma
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.autoClosingQuotes}
                        onChange={(e) => onUpdate({ autoClosingQuotes: e.target.checked })}
                        className="checkbox"
                        data-tip="Tırnak işaretlerini otomatik olarak kapat"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Otomatik Tırnak Kapatma
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.autoSurround}
                        onChange={(e) => onUpdate({ autoSurround: e.target.checked })}
                        className="checkbox"
                        data-tip="Seçili metni otomatik olarak parantez/tırnak içine al"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Otomatik Sarmalama
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.formatOnPaste}
                        onChange={(e) => onUpdate({ formatOnPaste: e.target.checked })}
                        className="checkbox"
                        data-tip="Yapıştırılan metni otomatik olarak düzenle"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Yapıştırırken Düzenle
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.links}
                        onChange={(e) => onUpdate({ links: e.target.checked })}
                        className="checkbox"
                        data-tip="Bağlantıları tıklanabilir yap"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Tıklanabilir Bağlantılar
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.mouseWheelZoom}
                        onChange={(e) => onUpdate({ mouseWheelZoom: e.target.checked })}
                        className="checkbox"
                        data-tip="Ctrl + Fare tekerleği ile yakınlaştırma/uzaklaştırma"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Fare ile Yakınlaştırma
                      </span>
                    </label>

                    {/* Unicode Vurgu Ayarları */}
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.unicodeHighlight?.ambiguousCharacters}
                        onChange={(e) => onUpdate({ 
                          unicodeHighlight: {
                            ...settings.unicodeHighlight,
                            ambiguousCharacters: e.target.checked 
                          }
                        })}
                        className="checkbox"
                        data-tip="Belirsiz Unicode karakterlerini vurgula"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Belirsiz Karakterleri Vurgula
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.unicodeHighlight?.invisibleCharacters}
                        onChange={(e) => onUpdate({ 
                          unicodeHighlight: {
                            ...settings.unicodeHighlight,
                            invisibleCharacters: e.target.checked 
                          }
                        })}
                        className="checkbox"
                        data-tip="Görünmez Unicode karakterlerini vurgula"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Görünmez Karakterleri Vurgula
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.unicodeHighlight?.nonBasicASCII}
                        onChange={(e) => onUpdate({ 
                          unicodeHighlight: {
                            ...settings.unicodeHighlight,
                            nonBasicASCII: e.target.checked 
                          }
                        })}
                        className="checkbox"
                        data-tip="Temel ASCII dışındaki karakterleri vurgula"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        ASCII Dışı Karakterleri Vurgula
                      </span>
                    </label>
                  </div>

                  {/* Gelişmiş Ayarlar */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>Görünmez Karakterler</span>
                      </label>
                      <select
                        value={settings.renderWhitespace}
                        onChange={(e) => onUpdate({ renderWhitespace: e.target.value as 'none' | 'boundary' | 'all' })}
                        className="select w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg"
                        data-tip="Boşluk ve sekme karakterlerinin görünürlüğünü ayarla"
                      >
                        <option value="none">Gösterme</option>
                        <option value="boundary">Sınırlarda Göster</option>
                        <option value="all">Hepsini Göster</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>Tab Boyutu</span>
                      </label>
                      <NumberInput
                        value={settings.tabSize}
                        onChange={(value) => onUpdate({ tabSize: value })}
                        min={1}
                        max={8}
                        tooltip="Tab karakterinin kaç boşluk genişliğinde olacağını belirle"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>İmleç Stili</span>
                      </label>
                      <select
                        value={settings.cursorStyle}
                        onChange={(e) => onUpdate({ cursorStyle: e.target.value as 'line' | 'block' | 'underline' })}
                        className="select w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg"
                        data-tip="İmleç görünümünü ayarla"
                      >
                        <option value="line">Çizgi</option>
                        <option value="block">Blok</option>
                        <option value="underline">Alt Çizgi</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span>İmleç Genişliği</span>
                      </label>
                      <NumberInput
                        value={settings.cursorWidth}
                        onChange={(value) => onUpdate({ cursorWidth: value })}
                        min={1}
                        max={5}
                        tooltip="İmleç kalınlığını ayarla (1-5 arası)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Önizleme */}
            <div className="w-1/3 space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Önizleme
              </h3>
              <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                <Editor
                  height="600px"
                  defaultLanguage="markdown"
                  defaultValue={SAMPLE_TEXT}
                  theme={monacoTheme}
                  beforeMount={(monaco) => {
                    monaco.editor.defineTheme('vs-dark', {
                      base: 'vs-dark',
                      inherit: true,
                      rules: [
                        { token: 'comment', foreground: '6b7280' },
                        { token: 'keyword', foreground: '93c5fd' },
                        { token: 'string', foreground: '86efac' },
                        { token: 'number', foreground: 'fca5a5' }
                      ],
                      colors: {
                        'editor.background': '#28293e',
                        'editor.foreground': '#e5e7eb',
                        'editor.lineHighlightBackground': '#313244',
                        'editorCursor.foreground': '#89b4fa',
                        'editor.selectionBackground': '#45475a80',
                        'editor.inactiveSelectionBackground': '#45475a40',
                        'editorSuggestWidget.background': '#181825',
                        'editorSuggestWidget.border': '#313244',
                        'editorSuggestWidget.foreground': '#cdd6f4',
                        'editorSuggestWidget.selectedBackground': '#45475a80',
                        'editorSuggestWidget.highlightForeground': '#89b4fa',
                        'editorSuggestWidget.focusHighlightForeground': '#89dceb',
                        'list.hoverBackground': '#313244',
                        'list.focusBackground': '#45475a80',
                        'list.activeSelectionBackground': '#45475aa0',
                        'list.highlightForeground': '#89b4fa',
                        'editorLineNumber.foreground': '#6c7086',
                        'editorLineNumber.activeForeground': '#89b4fa',
                        'editorIndentGuide.background': '#313244',
                        'editorIndentGuide.activeBackground': '#45475a',
                        'editor.lineHighlightBorder': '#00000000',
                        'editor.selectionHighlightBackground': '#45475a40',
                        'editor.wordHighlightBackground': '#45475a40',
                        'editor.wordHighlightStrongBackground': '#45475a40',
                        'editorBracketMatch.background': '#45475a40',
                        'editorBracketMatch.border': '#89b4fa'
                      }
                    })
                    monaco.editor.defineTheme('vs-light', {
                      base: 'vs',
                      inherit: true,
                      rules: [
                        { token: 'comment', foreground: '6b7280' },
                        { token: 'keyword', foreground: '2563eb' },
                        { token: 'string', foreground: '059669' },
                        { token: 'number', foreground: 'dc2626' }
                      ],
                      colors: {
                        'editor.background': '#ffffff',
                        'editor.foreground': '#28293e',
                        'editor.lineHighlightBackground': '#f3f4f6',
                        'editorCursor.foreground': '#2563eb',
                        'editor.selectionBackground': '#bfdbfe80',
                        'editor.inactiveSelectionBackground': '#bfdbfe40',
                        'editorSuggestWidget.background': '#ffffff',
                        'editorSuggestWidget.border': '#e5e7eb',
                        'editorSuggestWidget.foreground': '#28293e',
                        'editorSuggestWidget.selectedBackground': '#bfdbfe80',
                        'editorSuggestWidget.highlightForeground': '#2563eb',
                        'editorSuggestWidget.focusHighlightForeground': '#1d4ed8',
                        'list.hoverBackground': '#f3f4f6',
                        'list.focusBackground': '#bfdbfe80',
                        'list.activeSelectionBackground': '#bfdbfea0',
                        'list.highlightForeground': '#2563eb',
                        'editorLineNumber.foreground': '#9ca3af',
                        'editorLineNumber.activeForeground': '#2563eb',
                        'editorIndentGuide.background': '#f3f4f6',
                        'editorIndentGuide.activeBackground': '#e5e7eb',
                        'editor.lineHighlightBorder': '#00000000',
                        'editor.selectionHighlightBackground': '#bfdbfe40',
                        'editor.wordHighlightBackground': '#bfdbfe40',
                        'editor.wordHighlightStrongBackground': '#bfdbfe40',
                        'editorBracketMatch.background': '#bfdbfe40',
                        'editorBracketMatch.border': '#2563eb'
                      }
                    })
                  }}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: settings.fontSize,
                    fontFamily: settings.fontFamily,
                    lineHeight: settings.lineHeight,
                    letterSpacing: settings.letterSpacing,
                    wordWrap: settings.wordWrap ? 'on' : 'off',
                    lineNumbers: settings.lineNumbers ? 'on' : 'off',
                    renderWhitespace: settings.renderWhitespace,
                    scrollBeyondLastLine: false,
                    unicodeHighlight: settings.unicodeHighlight,
                    ariaLabel: 'Önizleme - salt okunur',
                    readOnlyMessage: {
                      value: 'Bu bir önizleme editörüdür, düzenlenemez.'
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 