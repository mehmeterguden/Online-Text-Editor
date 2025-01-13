import { EditorSettings } from '../features/editor/types'

interface TestResult {
  feature: string
  success: boolean
  error?: string
}

export class TestSystem {
  private results: TestResult[] = []
  private totalTests = 0
  private passedTests = 0

  async testEditorSettings(settings: EditorSettings) {
    // Görünüm Ayarları Testleri
    this.testSetting('fontSize', () => settings.fontSize >= 8 && settings.fontSize <= 72)
    this.testSetting('fontFamily', () => typeof settings.fontFamily === 'string' && settings.fontFamily.length > 0)
    this.testSetting('lineHeight', () => settings.lineHeight >= 1 && settings.lineHeight <= 3)
    this.testSetting('letterSpacing', () => settings.letterSpacing >= 0 && settings.letterSpacing <= 2)

    // Editör Ayarları Testleri
    this.testSetting('lineNumbers', () => typeof settings.lineNumbers === 'boolean')
    this.testSetting('wordWrap', () => typeof settings.wordWrap === 'boolean')
    this.testSetting('minimap', () => typeof settings.minimap === 'boolean')
    this.testSetting('tabSize', () => settings.tabSize >= 1 && settings.tabSize <= 8)
    this.testSetting('renderWhitespace', () => ['none', 'boundary', 'all'].includes(settings.renderWhitespace))

    // Otomatik Tamamlama Testleri
    this.testSetting('autoClosingBrackets', () => typeof settings.autoClosingBrackets === 'boolean')
    this.testSetting('autoClosingQuotes', () => typeof settings.autoClosingQuotes === 'boolean')
    this.testSetting('formatOnPaste', () => typeof settings.formatOnPaste === 'boolean')
    this.testSetting('formatOnType', () => typeof settings.formatOnType === 'boolean')

    // İmleç ve Seçim Testleri
    this.testSetting('cursorStyle', () => ['line', 'block', 'underline'].includes(settings.cursorStyle))
    this.testSetting('cursorWidth', () => settings.cursorWidth >= 1 && settings.cursorWidth <= 5)
    this.testSetting('cursorSmoothCaretAnimation', () => typeof settings.cursorSmoothCaretAnimation === 'boolean')
    this.testSetting('smoothScrolling', () => typeof settings.smoothScrolling === 'boolean')

    // Vurgulama Testleri
    this.testSetting('selectionHighlight', () => typeof settings.selectionHighlight === 'boolean')
    this.testSetting('matchBrackets', () => ['never', 'near', 'always'].includes(settings.matchBrackets))
    this.testSetting('bracketPairColorization', () => typeof settings.bracketPairColorization === 'boolean')
    this.testSetting('guides', () => typeof settings.guides === 'boolean')
    this.testSetting('autoSurround', () => typeof settings.autoSurround === 'boolean')
    this.testSetting('links', () => typeof settings.links === 'boolean')
    this.testSetting('mouseWheelZoom', () => typeof settings.mouseWheelZoom === 'boolean')
  }

  async testTextOperations(text: string, operations: any) {
    const testText = 'Sample text for testing\nWith multiple lines\nAnd some HTML <b>tags</b>\nDuplicate line\nDuplicate line'
    
    // Set the initial text for testing
    operations.setText(testText)

    // Metin İşlemleri Testleri
    this.testOperation('convertCase - upper', () => {
      const result = operations.convertCase('upper')
      return result === testText.toUpperCase()
    })

    operations.setText(testText) // Reset text for next test
    this.testOperation('convertCase - lower', () => {
      const result = operations.convertCase('lower')
      return result === testText.toLowerCase()
    })

    operations.setText(testText)
    this.testOperation('cleanWhitespace', () => {
      const result = operations.cleanWhitespace()
      return !result.match(/[ \t]+$/gm) && !result.match(/\n{3,}/g)
    })

    operations.setText(testText)
    this.testOperation('removeHtmlTags', () => {
      const result = operations.removeHtmlTags()
      return !result.match(/<[^>]*>/g)
    })

    operations.setText(testText)
    this.testOperation('removeDuplicates', () => {
      const result = operations.removeDuplicates()
      const lines = result.split('\n')
      return lines.length === new Set(lines).size
    })

    operations.setText(testText)
    this.testOperation('sortLines - asc', () => {
      const result = operations.sortLines('asc')
      const lines = result.split('\n')
      return lines.slice().sort((a: string, b: string) => a.localeCompare(b)).join('\n') === result
    })

    operations.setText(testText)
    this.testOperation('sortLines - desc', () => {
      const result = operations.sortLines('desc')
      const lines = result.split('\n')
      return lines.slice().sort((a: string, b: string) => b.localeCompare(a)).join('\n') === result
    })

    operations.setText('çğıöşüÇĞİÖŞÜ test text')
    this.testOperation('convertCharacters - tr-en', () => {
      const result = operations.convertCharacters('tr-en')
      return !result.match(/[çğıöşüÇĞİÖŞÜ]/g)
    })

    operations.setText(testText)
    this.testOperation('urlEncodeDecode - encode', () => {
      const result = operations.urlEncodeDecode('encode')
      return result === encodeURIComponent(testText)
    })

    operations.setText(encodeURIComponent(testText))
    this.testOperation('urlEncodeDecode - decode', () => {
      const result = operations.urlEncodeDecode('decode')
      return result === testText
    })

    operations.setText(testText)
    this.testOperation('addLineNumbers', () => {
      const result = operations.addLineNumbers()
      const lines = result.split('\n')
      return lines.every((line: string, i: number) => line.startsWith(`${i + 1}. `))
    })
  }

  private testSetting(name: string, test: () => boolean) {
    this.totalTests++
    try {
      const success = test()
      this.results.push({ feature: `Setting: ${name}`, success })
      if (success) this.passedTests++
    } catch (error) {
      this.results.push({ 
        feature: `Setting: ${name}`, 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }
  }

  private testOperation(name: string, test: () => boolean) {
    this.totalTests++
    try {
      const success = test()
      this.results.push({ feature: `Operation: ${name}`, success })
      if (success) this.passedTests++
    } catch (error) {
      this.results.push({ 
        feature: `Operation: ${name}`, 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }
  }

  getResults() {
    const successRate = (this.passedTests / this.totalTests) * 100
    return {
      results: this.results,
      summary: {
        totalTests: this.totalTests,
        passedTests: this.passedTests,
        successRate: successRate.toFixed(2) + '%'
      }
    }
  }

  hasErrors() {
    return this.results.some(result => !result.success)
  }

  getErrorReport() {
    return this.results
      .filter(result => !result.success)
      .map(result => `${result.feature}: ${result.error || 'Test failed'}`)
      .join('\n')
  }
} 