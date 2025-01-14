export interface EditorSettings {
  // Görünüm Ayarları
  fontSize: number
  fontFamily: string
  lineHeight: number
  letterSpacing: number
  
  // Editör Ayarları
  lineNumbers: boolean
  wordWrap: boolean
  minimap: boolean
  tabSize: number
  renderWhitespace: 'none' | 'boundary' | 'all'
  syntaxHighlighting: boolean
  
  // Otomatik Tamamlama
  autoClosingBrackets: boolean
  autoClosingQuotes: boolean
  formatOnPaste: boolean
  formatOnType: boolean
  
  // İmleç ve Seçim
  cursorStyle: 'line' | 'block' | 'underline'
  cursorWidth: number
  cursorSmoothCaretAnimation: boolean
  smoothScrolling: boolean
  
  // Vurgulama
  selectionHighlight: boolean
  matchBrackets: 'never' | 'near' | 'always'
  bracketPairColorization: boolean
  guides: boolean
  autoSurround: boolean
  links: boolean
  mouseWheelZoom: boolean
  unicodeHighlight: {
    ambiguousCharacters: boolean
    invisibleCharacters: boolean
    nonBasicASCII: boolean
  }
}

export const defaultEditorSettings: EditorSettings = {
  // Görünüm Ayarları
  fontSize: 15,
  fontFamily: 'Consolas',
  lineHeight: 1.5,
  letterSpacing: 0,
  
  // Editör Ayarları
  lineNumbers: false,
  wordWrap: true,
  minimap: false,
  tabSize: 2,
  renderWhitespace: 'none',
  syntaxHighlighting: false,
  
  // Otomatik Tamamlama
  autoClosingBrackets: true,
  autoClosingQuotes: true,
  formatOnPaste: false,
  formatOnType: false,
  
  // İmleç ve Seçim
  cursorStyle: 'line',
  cursorWidth: 2,
  cursorSmoothCaretAnimation: false,
  smoothScrolling: false,
  
  // Vurgulama
  selectionHighlight: true,
  matchBrackets: 'always',
  bracketPairColorization: true,
  guides: true,
  autoSurround: true,
  links: true,
  mouseWheelZoom: true,
  unicodeHighlight: {
    ambiguousCharacters: false,
    invisibleCharacters: false,
    nonBasicASCII: false
  }
} 