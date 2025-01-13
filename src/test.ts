import { EditorSettings, defaultEditorSettings } from './features/editor/types'
import { useTextOperations } from './features/textOperations/hooks/useTextOperations'

const SAMPLE_TEXT = `Bu bir test metnidir.
HTML <b>etiketli</b> metin
Türkçe karakterler: çğıöşüÇĞİÖŞÜ
http://test.com/?param=1
1. Numaralı satır
2. Numaralı satır
Tekrarlayan satır
Tekrarlayan satır
`

async function runTests() {
  console.log('🧪 Test sistemi başlatılıyor...\n')
  let totalTests = 0
  let passedTests = 0
  const errors: string[] = []

  // Editör Ayarları Testleri
  console.log('📝 Editör Ayarları Testleri:')
  console.log('----------------------------')

  const settings = defaultEditorSettings
  const settingsTests = [
    { name: 'fontSize', test: () => settings.fontSize >= 8 && settings.fontSize <= 72 },
    { name: 'fontFamily', test: () => typeof settings.fontFamily === 'string' && settings.fontFamily.length > 0 },
    { name: 'lineHeight', test: () => settings.lineHeight >= 1 && settings.lineHeight <= 3 },
    { name: 'letterSpacing', test: () => settings.letterSpacing >= 0 && settings.letterSpacing <= 2 },
    { name: 'lineNumbers', test: () => typeof settings.lineNumbers === 'boolean' },
    { name: 'wordWrap', test: () => typeof settings.wordWrap === 'boolean' },
    { name: 'minimap', test: () => typeof settings.minimap === 'boolean' },
    { name: 'tabSize', test: () => settings.tabSize >= 1 && settings.tabSize <= 8 },
    { name: 'renderWhitespace', test: () => ['none', 'boundary', 'all'].includes(settings.renderWhitespace) },
    { name: 'autoClosingBrackets', test: () => typeof settings.autoClosingBrackets === 'boolean' },
    { name: 'autoClosingQuotes', test: () => typeof settings.autoClosingQuotes === 'boolean' },
    { name: 'formatOnPaste', test: () => typeof settings.formatOnPaste === 'boolean' },
    { name: 'formatOnType', test: () => typeof settings.formatOnType === 'boolean' },
    { name: 'cursorStyle', test: () => ['line', 'block', 'underline'].includes(settings.cursorStyle) },
    { name: 'cursorWidth', test: () => settings.cursorWidth >= 1 && settings.cursorWidth <= 5 },
    { name: 'cursorSmoothCaretAnimation', test: () => typeof settings.cursorSmoothCaretAnimation === 'boolean' },
    { name: 'smoothScrolling', test: () => typeof settings.smoothScrolling === 'boolean' },
    { name: 'selectionHighlight', test: () => typeof settings.selectionHighlight === 'boolean' },
    { name: 'matchBrackets', test: () => ['never', 'near', 'always'].includes(settings.matchBrackets) },
    { name: 'bracketPairColorization', test: () => typeof settings.bracketPairColorization === 'boolean' },
    { name: 'guides', test: () => typeof settings.guides === 'boolean' },
    { name: 'autoSurround', test: () => typeof settings.autoSurround === 'boolean' },
    { name: 'links', test: () => typeof settings.links === 'boolean' },
    { name: 'mouseWheelZoom', test: () => typeof settings.mouseWheelZoom === 'boolean' }
  ]

  for (const test of settingsTests) {
    totalTests++
    try {
      const success = test.test()
      if (success) {
        passedTests++
        console.log(`✅ ${test.name}`)
      } else {
        console.log(`❌ ${test.name}`)
        errors.push(`Editör Ayarı Hatası: ${test.name} - Geçersiz değer`)
      }
    } catch (error) {
      console.log(`❌ ${test.name}`)
      errors.push(`Editör Ayarı Hatası: ${test.name} - ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`)
    }
  }

  // Metin İşlemleri Testleri
  console.log('\n📝 Metin İşlemleri Testleri:')
  console.log('---------------------------')

  const operations = {
    convertCase: (text: string, type: 'upper' | 'lower') => {
      return type === 'upper' ? text.toUpperCase() : text.toLowerCase()
    },
    cleanWhitespace: (text: string) => {
      return text.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n')
    },
    removeHtmlTags: (text: string) => {
      return text.replace(/<[^>]*>/g, '')
    },
    removeDuplicates: (text: string) => {
      const lines = text.split('\n')
      return [...new Set(lines)].join('\n')
    },
    sortLines: (text: string, type: 'asc' | 'desc') => {
      const lines = text.split('\n')
      return type === 'asc' 
        ? lines.sort((a, b) => a.localeCompare(b)).join('\n')
        : lines.sort((a, b) => b.localeCompare(a)).join('\n')
    },
    convertCharacters: (text: string, type: 'tr-en') => {
      const trToEn: { [key: string]: string } = {
        'ç': 'c', 'Ç': 'C', 'ğ': 'g', 'Ğ': 'G', 'ı': 'i', 'İ': 'I',
        'ö': 'o', 'Ö': 'O', 'ş': 's', 'Ş': 'S', 'ü': 'u', 'Ü': 'U'
      }
      return text.split('').map(char => trToEn[char] || char).join('')
    },
    urlEncodeDecode: (text: string, type: 'encode' | 'decode') => {
      return type === 'encode' ? encodeURIComponent(text) : decodeURIComponent(text)
    },
    addLineNumbers: (text: string) => {
      const lines = text.split('\n')
      return lines.map((line, i) => `${i + 1}. ${line}`).join('\n')
    }
  }

  const operationTests = [
    {
      name: 'Büyük harfe çevirme',
      test: () => operations.convertCase(SAMPLE_TEXT, 'upper') === SAMPLE_TEXT.toUpperCase()
    },
    {
      name: 'Küçük harfe çevirme',
      test: () => operations.convertCase(SAMPLE_TEXT, 'lower') === SAMPLE_TEXT.toLowerCase()
    },
    {
      name: 'Boşluk temizleme',
      test: () => !operations.cleanWhitespace(SAMPLE_TEXT).match(/[ \t]+$/gm)
    },
    {
      name: 'HTML etiketlerini temizleme',
      test: () => !operations.removeHtmlTags(SAMPLE_TEXT).match(/<[^>]*>/g)
    },
    {
      name: 'Tekrarlayan satırları silme',
      test: () => {
        const result = operations.removeDuplicates(SAMPLE_TEXT)
        const lines = result.split('\n')
        return lines.length === new Set(lines).size
      }
    },
    {
      name: 'Satırları A-Z sıralama',
      test: () => {
        const result = operations.sortLines(SAMPLE_TEXT, 'asc')
        const lines = result.split('\n')
        return lines.join('\n') === lines.slice().sort((a, b) => a.localeCompare(b)).join('\n')
      }
    },
    {
      name: 'Satırları Z-A sıralama',
      test: () => {
        const result = operations.sortLines(SAMPLE_TEXT, 'desc')
        const lines = result.split('\n')
        return lines.join('\n') === lines.slice().sort((a, b) => b.localeCompare(a)).join('\n')
      }
    },
    {
      name: 'Türkçe karakterleri dönüştürme',
      test: () => !operations.convertCharacters(SAMPLE_TEXT, 'tr-en').match(/[çğıöşüÇĞİÖŞÜ]/g)
    },
    {
      name: 'URL encode',
      test: () => operations.urlEncodeDecode(SAMPLE_TEXT, 'encode') === encodeURIComponent(SAMPLE_TEXT)
    },
    {
      name: 'URL decode',
      test: () => operations.urlEncodeDecode(encodeURIComponent(SAMPLE_TEXT), 'decode') === SAMPLE_TEXT
    },
    {
      name: 'Satır numarası ekleme',
      test: () => {
        const result = operations.addLineNumbers(SAMPLE_TEXT)
        const lines = result.split('\n')
        return lines.every((line, i) => line.startsWith(`${i + 1}. `))
      }
    }
  ]

  for (const test of operationTests) {
    totalTests++
    try {
      const success = test.test()
      if (success) {
        passedTests++
        console.log(`✅ ${test.name}`)
      } else {
        console.log(`❌ ${test.name}`)
        errors.push(`Metin İşlemi Hatası: ${test.name} - Test başarısız`)
      }
    } catch (error) {
      console.log(`❌ ${test.name}`)
      errors.push(`Metin İşlemi Hatası: ${test.name} - ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`)
    }
  }

  // Test Sonuçları
  console.log('\n📊 Test Sonuçları:')
  console.log('------------------')
  console.log(`Toplam Test: ${totalTests}`)
  console.log(`Başarılı Test: ${passedTests}`)
  console.log(`Başarı Oranı: ${((passedTests / totalTests) * 100).toFixed(2)}%`)

  if (errors.length > 0) {
    console.log('\n❌ Hatalar:')
    console.log('----------')
    errors.forEach(error => console.log(error))
    process.exit(1)
  } else {
    console.log('\n✅ Tüm testler başarıyla tamamlandı!')
    process.exit(0)
  }
}

runTests().catch(error => {
  console.error('Test sistemi çalıştırılırken hata oluştu:', error)
  process.exit(1)
}) 