import { useState, useCallback, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { Toolbar } from './components/Toolbar'
import { SearchReplace } from './components/SearchReplace'
import { EditorSettingsPopup } from './components/EditorSettings'
import { useTextOperations } from './features/textOperations/hooks/useTextOperations'
import { useEditorSettings } from './features/editor/hooks/useEditorSettings'
import { useTheme } from './hooks/useTheme'
import { FiDownload, FiPrinter, FiSearch, FiMoon, FiSun, FiTrash2, FiSettings, FiRotateCcw, FiRotateCw, FiX } from 'react-icons/fi'
import { TestSystem } from './utils/testSystem'

// Loglama fonksiyonu
const log = (type: 'info' | 'warning' | 'error', message: string, data?: any) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`
  console.log(logMessage)
  if (data) {
    console.log('Data:', data)
  }
}

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [showHowTo, setShowHowTo] = useState(false)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [howToSearchQuery, setHowToSearchQuery] = useState('')
  const { theme, toggleTheme } = useTheme()
  const { editorSettings, updateEditorSettings } = useEditorSettings()
  const {
    text,
    setText,
    convertCase,
    cleanWhitespace,
    removeHtmlTags,
    removeDuplicates,
    sortLines,
    convertCharacters,
    urlEncodeDecode,
    addLineNumbers,
    addPrefix,
    addSuffix,
    formatText,
    showMarkdown
  } = useTextOperations()

  const [editor, setEditor] = useState<any>(null)
  const [monacoInstance, setMonacoInstance] = useState<any>(null)

  const handleEditorDidMount = (editor: any, monaco: any) => {
    setEditor(editor)
    setMonacoInstance(monaco)
    editor.focus()
    
    // Tema tanımlamaları
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
        'editor.lineHighlightBackground': '#2d2d2d',
        'editorCursor.foreground': '#89b4fa',
        'editor.selectionBackground': '#45475a80',
        'editor.inactiveSelectionBackground': '#45475a40',
        'editorSuggestWidget.background': '#28293e',
        'editorSuggestWidget.border': '#2d2d2d',
        'editorSuggestWidget.foreground': '#e5e7eb',
        'editorSuggestWidget.selectedBackground': '#2d2d2d',
        'editorSuggestWidget.highlightForeground': '#89b4fa',
        'editorSuggestWidget.focusHighlightForeground': '#89dceb',
        'list.hoverBackground': '#2d2d2d',
        'list.focusBackground': '#2d2d2d',
        'list.activeSelectionBackground': '#3d3d3d',
        'list.highlightForeground': '#89b4fa',
        'editorLineNumber.foreground': '#6c7086',
        'editorLineNumber.activeForeground': '#89b4fa',
        'editorIndentGuide.background': '#2d2d2d',
        'editorIndentGuide.activeBackground': '#3d3d3d',
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
        'editor.foreground': '#1f2937',
        'editor.lineHighlightBackground': '#f3f4f6',
        'editorCursor.foreground': '#2563eb',
        'editor.selectionBackground': '#bfdbfe80',
        'editor.inactiveSelectionBackground': '#bfdbfe40',
        'editorSuggestWidget.background': '#ffffff',
        'editorSuggestWidget.border': '#e5e7eb',
        'editorSuggestWidget.foreground': '#1f2937',
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
    
    // İlk yükleme temasını ayarla
    const initialTheme = document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs-light'
    monaco.editor.setTheme(initialTheme)
    
    // Monaco editörün tema değişikliğini dinle
    const handleThemeChange = () => {
      const newTheme = document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs-light'
      monaco.editor.setTheme(newTheme)
    }

    window.addEventListener('themeChange', handleThemeChange)
    
    // Cleanup
    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
    }
  }

  // Monaco editörün temasını güncelle
  useEffect(() => {
    if (editor && monacoInstance) {
      const editorTheme = document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs-light'
      monacoInstance.editor.setTheme(editorTheme)
    }
  }, [theme, editor, monacoInstance])

  const handleUndo = useCallback(() => {
    if (editor) {
      editor.trigger('keyboard', 'undo', null)
    }
  }, [editor])

  const handleRedo = useCallback(() => {
    if (editor) {
      editor.trigger('keyboard', 'redo', null)
    }
  }, [editor])

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value === undefined) return
    setText(value)
    log('info', 'Editor content changed', { length: value?.length })
  }, [setText])

  const handleEditorError = useCallback((error: Error) => {
    log('error', 'Editor error occurred', error)
  }, [])

  const handleEditorValidation = useCallback((markers: any[]) => {
    if (markers.length > 0) {
      log('warning', 'Editor validation issues found', markers)
    }
  }, [])

  const handleDownload = useCallback(() => {
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'metin.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [text])

  const handlePrint = useCallback(() => {
    const printWindow = window.open('', '', 'width=800,height=600')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Yazdır</title>
            <style>
              body { font-family: 'JetBrains Mono', monospace; line-height: 1.5; padding: 2rem; }
              pre { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <pre>${text}</pre>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.focus()
      printWindow.print()
      printWindow.close()
    }
  }, [text])

  const getTextStats = useCallback(() => {
    const lines = text.split('\n').length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const chars = text.length
    const sentences = text.split(/[.!?]+/).filter(Boolean).length

    return { lines, words, chars, sentences }
  }, [text])

  const stats = getTextStats()

  // Test sistemi
  useEffect(() => {
    const runTests = async () => {
      const testSystem = new TestSystem()
      
      // Editör ayarlarını test et
      await testSystem.testEditorSettings(editorSettings)
      
      // Metin işlemlerini test et
      await testSystem.testTextOperations(text, {
        convertCase,
        cleanWhitespace,
        removeHtmlTags,
        removeDuplicates,
        sortLines,
        convertCharacters,
        urlEncodeDecode,
        addLineNumbers
      })

      // Sonuçları göster
      const results = testSystem.getResults()
      console.log('Test Sonuçları:', results)

      if (testSystem.hasErrors()) {
        console.error('Test Hataları:', testSystem.getErrorReport())
      }
    }

    runTests()
  }, [])

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowHowTo(false)
    }
  }, [])

  useEffect(() => {
    if (showHowTo) {
      document.addEventListener('keydown', handleEscapeKey)
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [showHowTo, handleEscapeKey])

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-200">
      <header className="bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <h1 className="text-2xl font-bold text-light-text dark:text-dark-text bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent mb-0">
              Metin Editörü
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="btn-toolbar"
              >
                <FiSettings className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary hover:text-blue-500 dark:hover:text-blue-400" />
              </button>
              <button
                onClick={toggleTheme}
                className="btn-toolbar"
              >
                <FiSun className="w-5 h-5 hidden dark:block text-dark-text-secondary hover:text-yellow-400" />
                <FiMoon className="w-5 h-5 block dark:hidden text-light-text-secondary hover:text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="grid gap-4">
          {/* Ayarlar Popup'ı */}
          <EditorSettingsPopup
            isOpen={showSettings}
            onClose={() => setShowSettings(false)}
            settings={editorSettings}
            onUpdate={updateEditorSettings}
          />
          
          {/* Ana Editör */}
          <div className="card-base">
            <div className="editor-stats flex items-center justify-between px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-t-lg">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2" data-tip="Metindeki toplam satır sayısı">
                  <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Satır:</span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">{stats.lines}</span>
                </div>
                <div className="flex items-center space-x-2" data-tip="Metindeki toplam cümle sayısı (nokta, ünlem veya soru işareti ile biten)">
                  <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Cümle:</span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">{stats.sentences}</span>
                </div>
                <div className="flex items-center space-x-2" data-tip="Metindeki toplam kelime sayısı (boşlukla ayrılan)">
                  <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Kelime:</span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">{stats.words}</span>
                </div>
                <div className="flex items-center space-x-2" data-tip="Metindeki toplam karakter sayısı (boşluklar dahil)">
                  <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Karakter:</span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">{stats.chars}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleUndo}
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  data-tip="Geri Al (Ctrl+Z)"
                >
                  <FiRotateCcw className="w-4 h-4" />
                  <span>Geri Al</span>
                </button>
                <button
                  onClick={handleRedo}
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  data-tip="İleri Al (Ctrl+Y)"
                >
                  <FiRotateCw className="w-4 h-4" />
                  <span>İleri Al</span>
                </button>
                <button
                  onClick={() => {
                    setText('')
                    if (editor) {
                      editor.setValue('')
                    }
                  }}
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 transition-colors duration-200"
                  data-tip="Editördeki tüm metni temizler"
                >
                  <FiTrash2 className="w-4 h-4" />
                  <span>Temizle</span>
                </button>
              </div>
            </div>
            
            <div className="h-px bg-light-border dark:bg-dark-border" />
            
            <div className="editor-container">
              <Editor
                height="50vh"
                defaultLanguage="markdown"
                value={text}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                  ...editorSettings,
                  fontFamily: editorSettings.fontFamily,
                  minimap: { enabled: editorSettings.minimap },
                  padding: { top: 0, bottom: 24 },
                  lineNumbers: editorSettings.lineNumbers ? 'on' : 'off',
                  glyphMargin: false,
                  folding: false,
                  lineDecorationsWidth: editorSettings.lineNumbers ? 8 : 0,
                  lineNumbersMinChars: editorSettings.lineNumbers ? 4 : 0,
                  scrollBeyondLastLine: false,
                  overviewRulerBorder: false,
                  hideCursorInOverviewRuler: true,
                  renderLineHighlight: 'none',
                  contextmenu: false,
                  cursorBlinking: 'smooth',
                  cursorSmoothCaretAnimation: editorSettings.cursorSmoothCaretAnimation ? 'on' : 'off',
                  smoothScrolling: editorSettings.smoothScrolling,
                  mouseWheelZoom: editorSettings.mouseWheelZoom,
                  wordWrap: editorSettings.wordWrap ? 'on' : 'off',
                  wordWrapColumn: 80,
                  wrappingIndent: 'same',
                  fontSize: editorSettings.fontSize,
                  tabSize: editorSettings.tabSize,
                  renderWhitespace: editorSettings.renderWhitespace,
                  lineHeight: editorSettings.lineHeight,
                  letterSpacing: editorSettings.letterSpacing,
                  autoClosingBrackets: editorSettings.autoClosingBrackets ? 'always' : 'never',
                  autoClosingQuotes: editorSettings.autoClosingQuotes ? 'always' : 'never',
                  autoSurround: editorSettings.autoSurround ? 'brackets' : 'never',
                  links: editorSettings.links,
                  bracketPairColorization: { enabled: editorSettings.bracketPairColorization },
                  guides: {
                    bracketPairs: editorSettings.guides,
                    indentation: editorSettings.guides,
                    highlightActiveBracketPair: editorSettings.guides,
                    highlightActiveIndentation: editorSettings.guides
                  },
                  matchBrackets: editorSettings.matchBrackets,
                  selectionHighlight: editorSettings.selectionHighlight,
                  formatOnPaste: editorSettings.formatOnPaste,
                  formatOnType: editorSettings.formatOnType,
                  unicodeHighlight: {
                    ambiguousCharacters: false,
                    invisibleCharacters: false,
                    nonBasicASCII: false
                  },
                  suggest: {
                    showIcons: true,
                    showStatusBar: true,
                    preview: true,
                    snippetsPreventQuickSuggestions: false,
                    filterGraceful: true,
                    selectionMode: 'never'
                  }
                }}
                className="transition-colors duration-200"
              />
            </div>
          </div>

          {/* Araç Çubukları */}
          <Toolbar
            onConvertCase={convertCase}
            onSortLines={sortLines}
            onConvertCharacters={convertCharacters}
            onUrlEncodeDecode={urlEncodeDecode}
            onAddPrefix={addPrefix}
            onAddSuffix={addSuffix}
            onFormatText={formatText}
            onShowMarkdown={showMarkdown}
            onCleanText={(featureId) => {
              switch (featureId) {
                // Boşluk Temizleme
                case 'empty-lines':
                  setText(text.split('\n').filter(line => line.trim() !== '').join('\n'));
                  break;
                case 'extra-spaces':
                  setText(text.replace(/\s+/g, ' '));
                  break;
                case 'trim-lines':
                  setText(text.split('\n').map(line => line.trim()).join('\n'));
                  break;
                case 'tabs':
                  setText(text.replace(/\t/g, ''));
                  break;
                case 'all-spaces':
                  setText(text.replace(/\s/g, ''));
                  break;

                // Karakter Temizleme
                case 'special-chars':
                  setText(text.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/g, ''));
                  break;
                case 'punctuation':
                  setText(text.replace(/[.,!?;:'"()[\]{}]/g, ''));
                  break;
                case 'emoji-symbols':
                  setText(text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ''));
                  break;
                case 'numbers':
                  setText(text.replace(/\d+/g, ''));
                  break;
                case 'non-ascii':
                  setText(text.replace(/[^\x00-\x7F]/g, ''));
                  break;
                case 'control-chars':
                  setText(text.replace(/[\x00-\x1F\x7F]/g, ''));
                  break;
                case 'diacritics':
                  setText(text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
                  break;
                case 'currency':
                  setText(text.replace(/[$€£¥₺¢]/g, ''));
                  break;

                // İçerik Temizleme
                case 'html-tags':
                  setText(text.replace(/<[^>]*>/g, ''));
                  break;
                case 'xml-json':
                  setText(text.replace(/<\/?[^>]+(>|$)/g, '').replace(/[{}\[\]",]/g, ' ').replace(/\s+/g, ' ').trim());
                  break;
                case 'duplicate-lines':
                  setText([...new Set(text.split('\n'))].join('\n'));
                  break;
                case 'urls':
                  setText(text.replace(/https?:\/\/[^\s]+/g, ''));
                  break;
                case 'emails':
                  setText(text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, ''));
                  break;
                case 'markdown':
                  let mdText = text;
                  mdText = mdText.replace(/^#{1,6}\s+/gm, '');
                  mdText = mdText.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1');
                  mdText = mdText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
                  mdText = mdText.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
                  mdText = mdText.replace(/^>\s+/gm, '');
                  mdText = mdText.replace(/```[\s\S]*?```/g, '');
                  mdText = mdText.replace(/`([^`]+)`/g, '$1');
                  mdText = mdText.replace(/^[-*_]{3,}\s*$/gm, '');
                  setText(mdText);
                  break;
                case 'css':
                  setText(text.replace(/style="[^"]*"/g, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ''));
                  break;
                case 'scripts':
                  setText(text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/\son\w+="[^"]*"/g, ''));
                  break;

                // Format Temizleme
                case 'comments':
                  let commentText = text;
                  commentText = commentText.replace(/\/\/.*$/gm, '');
                  commentText = commentText.replace(/\/\*[\s\S]*?\*\//g, '');
                  commentText = commentText.replace(/<!--[\s\S]*?-->/g, '');
                  setText(commentText);
                  break;
                case 'line-numbers':
                  setText(text.replace(/^\s*\d+[\.\)]\s*/gm, ''));
                  break;
                case 'quoted-text':
                  setText(text.replace(/"[^"]*"|'[^']*'/g, ''));
                  break;
                case 'parentheses-text':
                  setText(text.replace(/\([^)]*\)/g, '').replace(/\[[^\]]*\]/g, '').replace(/\{[^}]*\}/g, ''));
                  break;
                case 'code-blocks':
                  let codeText = text;
                  codeText = codeText.replace(/```[\s\S]*?```/g, '');
                  codeText = codeText.replace(/`[^`]*`/g, '');
                  codeText = codeText.replace(/<pre>[\s\S]*?<\/pre>/g, '');
                  codeText = codeText.replace(/<code>[\s\S]*?<\/code>/g, '');
                  setText(codeText);
                  break;
                case 'ansi-colors':
                  setText(text.replace(/\u001b\[\d{1,2}m/g, ''));
                  break;
                case 'indentation':
                  setText(text.replace(/^[ \t]+/gm, ''));
                  break;
                case 'line-breaks':
                  setText(text.replace(/\r\n|\r/g, '\n'));
                  break;

                // Pattern Temizleme
                case 'dates':
                  setText(text.replace(/\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}|\d{4}[\/.-]\d{1,2}[\/.-]\d{1,2}/g, ''));
                  break;
                case 'numeric-lines':
                  setText(text.split('\n').filter(line => !/^\s*\d+(\.\d+)?\s*$/.test(line)).join('\n'));
                  break;
                case 'alpha-lines':
                  setText(text.split('\n').filter(line => !/^[A-Za-z\s]+$/.test(line)).join('\n'));
                  break;
                case 'uppercase-lines':
                  setText(text.split('\n').filter(line => !/^[A-Z\s]+$/.test(line)).join('\n'));
                  break;
                case 'lowercase-lines':
                  setText(text.split('\n').filter(line => !/^[a-z\s]+$/.test(line)).join('\n'));
                  break;
              }
            }}
            text={text}
          />

          {/* Arama ve Değiştirme */}
          <SearchReplace 
            text={text} 
            onTextChange={setText} 
            onHighlight={(match) => {
              if (!editor || !monacoInstance) return;
              
              // Önceki tüm dekorasyonları temizle
              const oldDecorations = editor.getModel().getAllDecorations();
              editor.getModel().deltaDecorations(
                oldDecorations.map(d => d.id),
                []
              );
              
              if (match) {
                // Sadece aktif eşleşmeyi vurgula
                editor.getModel().deltaDecorations([], [{
                  range: new monacoInstance.Range(
                    editor.getModel().getPositionAt(match.start).lineNumber,
                    editor.getModel().getPositionAt(match.start).column,
                    editor.getModel().getPositionAt(match.end).lineNumber,
                    editor.getModel().getPositionAt(match.end).column
                  ),
                  options: {
                    inlineClassName: 'highlighted-text',
                    className: 'highlighted-text',
                    stickiness: monacoInstance.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
                  }
                }]);

                // Editörü ilgili pozisyona kaydır
                const position = editor.getModel().getPositionAt(match.start);
                editor.setPosition(position);
                editor.revealLineInCenter(position.lineNumber);
              }
            }}
          />

          <div className="flex gap-2 justify-end">
            <button
              onClick={handleDownload}
              className="btn-toolbar"
              data-tip="Metni İndir"
            >
              <FiDownload className="w-4 h-4" />
              <span>İndir</span>
            </button>
            <button
              onClick={handlePrint}
              className="btn-toolbar"
              data-tip="Metni Yazdır"
            >
              <FiPrinter className="w-4 h-4" />
              <span>Yazdır</span>
            </button>
          </div>
        </div>

        {/* SEO Bölümü */}
        <section className="max-w-[1400px] mx-auto px-4 py-12 mt-12 border-t border-light-border dark:border-dark-border">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Neler Yapabilirsiniz?
              </h2>
              <ul className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                  </span>
                  <span>Profesyonel metin düzenleme araçlarıyla içeriklerinizi mükemmelleştirin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                  </span>
                  <span>HTML etiketlerini ve özel karakterleri anında temizleyerek metinlerinizi sadeleştirin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                  </span>
                  <span>Türkçe ve İngilizce karakter dönüşümlerini tek tıkla gerçekleştirin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                  </span>
                  <span>Gelişmiş arama ve değiştirme özellikleriyle metinlerinizi hızlıca düzenleyin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                  </span>
                  <span>Akıllı sıralama ve filtreleme araçlarıyla içeriğinizi organize edin</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Kapsamlı Özellikler
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-medium mb-1 text-light-text dark:text-dark-text">Akıllı Dönüşümler</h3>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Gelişmiş metin dönüştürme ve formatlama araçları</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-medium mb-1 text-light-text dark:text-dark-text">Satır Yönetimi</h3>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Profesyonel satır düzenleme ve organizasyon</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-medium mb-1 text-light-text dark:text-dark-text">Kod Temizleme</h3>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Otomatik HTML ve karakter temizleme</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-medium mb-1 text-light-text dark:text-dark-text">Metin Analizi</h3>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Kapsamlı metin istatistikleri ve raporlama</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Neden Bu Metin Editörü?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text mb-1">Modern ve Kullanıcı Dostu</h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Sezgisel arayüz tasarımı ve gelişmiş özelliklerle profesyonel metin düzenleme deneyimi</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text mb-1">Yüksek Performans</h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Anlık işlemler ve optimize edilmiş algoritmaları ile hızlı ve verimli çalışma</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text mb-1">Güvenli ve Özel</h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Tüm işlemler tarayıcınızda gerçekleşir, verileriniz tamamen sizde kalır</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Nasıl Kullanılır Butonu */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowHowTo(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200"
            >
              <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Nasıl Kullanılır?
                <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-lg">Hemen Öğren</span>
              </span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border w-full">
          <div className="w-full px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Hakkımızda */}
              <div>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">
                  Online Metin Editörü
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                  Metinlerinizi düzenlemek, biçimlendirmek ve dönüştürmek için profesyonel çözüm.
                  Kullanıcı dostu arayüzü ve gelişmiş özellikleriyle metin düzenleme işlerinizi kolaylaştırır.
                </p>
                
              </div>

              {/* Özellikler */}
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                  Özellikler
                </h3>
                <ul className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
                  <li>Metin Düzenleme</li>
                  <li>Büyük/Küçük Harf</li>
                  <li>Karakter Dönüşümü</li>
                  <li>Satır İşlemleri</li>
                  <li>URL Kodlama</li>
                  <li>HTML Temizleme</li>
                </ul>
              </div>

              {/* Yardım */}
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                  Yardım
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setShowHowTo(true)}
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors font-medium"
                    >
                      Nasıl Kullanılır?
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors font-medium"
                    >
                      Editör Ayarları
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowPrivacyPolicy(true)}
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors text-sm"
                    >
                      Gizlilik Politikası
                    </button>
                  </li>
                </ul>
              </div>

              {/* İletişim */}
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                  İletişim
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:iletisim@metineditoru.com"
                    className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 text-white rounded-lg transition-colors"
                  >
                    E-posta Gönder
                  </a>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    E-posta: iletisim@metineditoru.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Gizlilik Politikası Modal */}
        {showPrivacyPolicy && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-y-auto py-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowPrivacyPolicy(false)
              }
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl mx-4 relative">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Gizlilik Politikası
                  </h2>
                  <button
                    onClick={() => setShowPrivacyPolicy(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
              </div>
                
                <div className="prose dark:prose-invert max-w-none space-y-6">
                  <section>
                    <h3>1. Giriş ve Tanımlar</h3>
                    <p>
                      Bu gizlilik politikası, Metin Editörü ("uygulama", "biz", "bizim") tarafından sağlanan hizmetlerin kullanımı sırasında uygulanan veri işleme prensiplerini açıklamaktadır. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat kapsamında hazırlanmıştır.
                    </p>
                  </section>

                  <section>
                    <h3>2. Veri Sorumlusu</h3>
                    <p>
                      Metin Editörü, kişisel verilerin işlenmesi konusunda veri sorumlusu olarak hareket etmektedir. İletişim bilgilerimiz:
                    </p>
                    <ul>
                      <li>E-posta: iletisim@metineditoru.com</li>
                    </ul>
                  </section>

                  <section>
                    <h3>3. Toplanan Veriler ve Kullanım Amaçları</h3>
                    <h4 className="text-base font-medium mt-4 mb-2">3.1. Otomatik Olarak Toplanan Veriler</h4>
                    <ul>
                      <li>Tarayıcı teması tercihi (açık/koyu tema)</li>
                      <li>Editör ayarları (yazı tipi, boyut, vb.)</li>
                    </ul>
                    
                    <h4 className="text-base font-medium mt-4 mb-2">3.2. Kullanıcı Tarafından Sağlanan Veriler</h4>
                    <ul>
                      <li>Düzenlenen metin içeriği (yalnızca tarayıcı belleğinde geçici olarak tutulur)</li>
                      <li>Editör özelleştirme tercihleri</li>
                    </ul>

                    <h4 className="text-base font-medium mt-4 mb-2">3.3. Kullanım Amaçları</h4>
                    <ul>
                      <li>Editör hizmetinin sağlanması ve işlevselliğinin sürdürülmesi</li>
                      <li>Kullanıcı tercihlerinin hatırlanması ve kullanıcı deneyiminin iyileştirilmesi</li>
                      <li>Teknik sorunların tespit edilmesi ve çözülmesi</li>
                    </ul>
                  </section>

                  <section>
                    <h3>4. Veri İşleme Prensipleri</h3>
                    <h4 className="text-base font-medium mt-4 mb-2">4.1. Yerel İşleme</h4>
                    <ul>
                      <li>Tüm metin düzenleme işlemleri kullanıcının tarayıcısında gerçekleştirilir</li>
                      <li>Düzenlenen metinler sunucularımıza gönderilmez veya saklanmaz</li>
                      <li>Hiçbir kullanıcı verisi üçüncü taraflarla paylaşılmaz</li>
                    </ul>

                    <h4 className="text-base font-medium mt-4 mb-2">4.2. Yerel Depolama Kullanımı</h4>
                    <ul>
                      <li>Kullanıcı tercihleri tarayıcının yerel depolama alanında (localStorage) saklanır</li>
                      <li>Yerel depolama verileri yalnızca kullanıcının cihazında tutulur</li>
                      <li>Veriler şifrelenmeden saklanır ve tarayıcı geçmişi/önbellek temizlendiğinde silinir</li>
                    </ul>
                  </section>

                  <section>
                    <h3>5. Kullanıcı Hakları</h3>
                    <p>
                      KVKK'nın 11. maddesi uyarınca kullanıcılarımız aşağıdaki haklara sahiptir:
                    </p>
                    <ul>
                      <li>Kişisel verilerin işlenip işlenmediğini öğrenme</li>
                      <li>Kişisel veriler işlenmişse buna ilişkin bilgi talep etme</li>
                      <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                      <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                      <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                      <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                    </ul>
                  </section>

                  <section>
                    <h3>6. Güvenlik Önlemleri</h3>
                    <p>
                      Uygulamamız, kullanıcı verilerinin güvenliğini sağlamak için aşağıdaki önlemleri almaktadır:
                    </p>
                    <ul>
                      <li>Tüm metin işleme faaliyetleri kullanıcının tarayıcısında gerçekleştirilir</li>
                      <li>Hiçbir veri sunuculara iletilmez veya depolanmaz</li>
                      <li>Yerel depolama verileri yalnızca gerekli kullanıcı tercihlerini içerir</li>
                      <li>Uygulama, güvenli HTTPS protokolü üzerinden sunulur</li>
                      <li>Düzenli güvenlik değerlendirmeleri ve güncellemeleri yapılır</li>
                    </ul>
                  </section>

                  <section>
                    <h3>7. Çerezler ve Benzer Teknolojiler</h3>
                    <p>
                      Uygulamamız çerez kullanmamaktadır. Kullanıcı tercihleri yalnızca tarayıcının yerel depolama alanında (localStorage) saklanır. Bu veriler:
                    </p>
                    <ul>
                      <li>Tema tercihi (açık/koyu)</li>
                      <li>Editör ayarları (yazı tipi, boyut, vb.)</li>
                      <li>Arayüz tercihleri</li>
                    </ul>
                  </section>

                  <section>
                    <h3>8. Üçüncü Taraf Hizmetleri</h3>
                    <p>
                      Uygulamamız hiçbir üçüncü taraf hizmet kullanmamaktadır:
                    </p>
                    <ul>
                      <li>Analitik araçları kullanılmaz</li>
                      <li>Reklam servisleri kullanılmaz</li>
                      <li>Sosyal medya entegrasyonu bulunmaz</li>
                      <li>Kullanıcı davranış takibi yapılmaz</li>
                    </ul>
                  </section>

                  <section>
                    <h3>9. Veri Saklama ve Silme</h3>
                    <p>
                      Uygulamamızda veri saklama politikası aşağıdaki şekildedir:
                    </p>
                    <ul>
                      <li>Düzenlenen metinler yalnızca tarayıcı belleğinde geçici olarak tutulur</li>
                      <li>Tarayıcı kapatıldığında veya sekme yenilendiğinde metin içeriği silinir</li>
                      <li>Kullanıcı tercihleri tarayıcı yerel depolama alanında saklanır ve kullanıcı tarafından silinebilir</li>
                      <li>Sunucularımızda hiçbir kullanıcı verisi saklanmaz</li>
                    </ul>
                  </section>

                  <section>
                    <h3>10. Politika Güncellemeleri</h3>
                    <p>
                      Bu gizlilik politikası, yasal gereklilikler veya hizmet değişiklikleri doğrultusunda güncellenebilir. Önemli değişiklikler olması durumunda, kullanıcılarımız uygulama arayüzünde bilgilendirilecektir.
                    </p>
                  </section>

                  <section>
                    <h3>11. İletişim</h3>
                    <p>
                      Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
                    </p>
                    <ul>
                      <li>E-posta: iletisim@metineditoru.com</li>
                    </ul>
                  </section>

                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-8">
                    Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                  </p>
            </div>
          </div>
            </div>
          </div>
        )}

        {/* Nasıl Kullanılır Modal */}
        {showHowTo && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-y-auto py-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowHowTo(false)
              }
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-7xl mx-4">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Metin Editörü Kullanım Kılavuzu
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                      Tüm özellikleri detaylı örneklerle keşfedin
                    </p>
                  </div>
                  <button
                    onClick={() => setShowHowTo(false)}
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiX className="w-8 h-8" />
                  </button>
                </div>

                {/* Gelişmiş Arama */}
                <div className="mb-12">
                  <div className="relative max-w-2xl mx-auto">
                    <input
                      type="text"
                      value={howToSearchQuery}
                      onChange={(e) => setHowToSearchQuery(e.target.value)}
                      placeholder="Özellik, araç veya örnek arayın..."
                      className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-200"
                    />
                    <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    {howToSearchQuery && (
                      <button
                        onClick={() => setHowToSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <FiX className="w-5 h-5 text-gray-500" />
                      </button>
                    )}
                  </div>
                  {howToSearchQuery && (
                    <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                      "{howToSearchQuery}" için sonuçlar gösteriliyor
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-12 gap-8">
                  {/* Sol Menü */}
                  <div className="col-span-3 space-y-6">
                    <div className="sticky top-8">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 shadow-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">İçindekiler</h4>
                        <nav className="space-y-1">
                          <a href="#temel-ozellikler" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Temel Özellikler</a>
                          <a href="#metin-donusumleri" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Metin Dönüşümleri</a>
                          <a href="#temizleme-araclari" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Temizleme Araçları</a>
                          <a href="#satir-islemleri" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Satır İşlemleri</a>
                          <a href="#karakter-islemleri" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Karakter İşlemleri</a>
                          <a href="#arama-ve-degistirme" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Arama ve Değiştirme</a>
                          <a href="#editor-ayarlari" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Editör Ayarları</a>
                          <a href="#kisayollar" className="block px-4 py-2.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Klavye Kısayolları</a>
                        </nav>
                    </div>

                      <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-5 shadow-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">Hızlı İpuçları</h4>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Ctrl+Z ile son işlemi geri alın</span>
                        </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Ctrl+Y ile geri aldığınız işlemi tekrarlayın</span>
                        </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Ctrl+F ile metin içinde arama yapın</span>
                        </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Ctrl+H ile metin değiştirme penceresini açın</span>
                        </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Ctrl+S ile metni kaydedin</span>
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="col-span-9 space-y-16">
                    <section id="temel-ozellikler">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                        Temel Özellikler
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                        Modern ve güçlü metin editörümüz, profesyonel düzeyde metin düzenleme deneyimi sunar. 
                        Monaco Editor altyapısı ile gelişmiş özellikler ve yüksek performans sağlar. 
                        Kullanıcı dostu arayüzü ve kapsamlı araç seti ile metinlerinizi kolayca düzenleyebilirsiniz.
                      </p>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-semibold">Metin Düzenleme</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Gelişmiş metin düzenleme özellikleri ile metinlerinizi profesyonel bir şekilde 
                            düzenleyebilirsiniz. Çoklu imleç desteği, akıllı seçim araçları ve otomatik 
                            biçimlendirme özellikleri ile çalışmalarınızı hızlandırın. Gerçek zamanlı kaydetme 
                            ve geri yükleme özellikleri sayesinde verileriniz her zaman güvende.
                          </p>
                          <div className="grid grid-cols-1 gap-8">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                              <div className="flex items-center mb-4">
                                <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </span>
                                <h4 className="text-xl font-medium">Çoklu İmleç ve Akıllı Seçim</h4>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Birden fazla noktada aynı anda düzenleme yapabilir, benzer metinleri tek seferde 
                                değiştirebilirsiniz. Akıllı seçim özelliği ile kelime, cümle veya paragrafları 
                                hızlıca seçebilir, düzenleyebilirsiniz.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                    Örnek Kullanım:
                      </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>const değer1 = 10;</p>
                                    <p>const değer2 = 20;</p>
                                    <p>const değer3 = 30;</p>
                                    <p><span className="bg-blue-100 dark:bg-blue-900/30 px-1">Alt + Click</span> ile çoklu imleç</p>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                    Sonuç:
                                  </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>let değer1 = 10;</p>
                                    <p>let değer2 = 20;</p>
                                    <p>let değer3 = 30;</p>
                                    <p>Tüm "const" ifadeleri "let" olarak değiştirildi</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-6">
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Özellikler:</h5>
                                <ul className="grid grid-cols-2 gap-3">
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Çoklu imleç desteği
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Akıllı kelime seçimi
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Sütun seçimi
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Benzer metin seçimi
                                  </li>
                              </ul>
                            </div>
                              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                                  Pro İpucu:
                                </h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400">
                                  Alt tuşuna basılı tutarak metninizde istediğiniz noktalara tıklayabilir ve 
                                  birden fazla imleç oluşturabilirsiniz. Ctrl + D ile seçili kelimenin diğer 
                                  örneklerini hızlıca seçebilirsiniz.
                                </p>
                          </div>
                        </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                              <div className="flex items-center mb-4">
                                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                  </svg>
                                </span>
                                <h4 className="text-xl font-medium">Geri Alma ve İleri Alma</h4>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Sınırsız geri alma/ileri alma özelliği ile düzenleme geçmişinizi yönetebilirsiniz. 
                                Düzenlediğiniz metin tarayıcı belleğinde tutulur ve tarayıcıyı kapatana kadar korunur.
                              </p>
                              <div className="space-y-3">
                                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                  Kısayol Tuşları:
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                  <p>• Geri Al: Ctrl + Z</p>
                                  <p>• İleri Al: Ctrl + Y</p>
                                  <p>• Geçmişi Temizle: Ctrl + K</p>
                                </div>
                              </div>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                              <div className="flex items-center mb-4">
                                <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </span>
                                <h4 className="text-xl font-medium">Gerçek Zamanlı İstatistikler</h4>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Metniniz hakkında anlık istatistikler görüntüleyin. Kelime sayısı, karakter sayısı, 
                                satır sayısı ve daha fazlası hakkında detaylı bilgiler edinin.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                    Temel İstatistikler:
                                  </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>• Toplam karakter sayısı</p>
                                    <p>• Boşluksuz karakter sayısı</p>
                                    <p>• Kelime sayısı</p>
                                    <p>• Satır sayısı</p>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                    Gelişmiş İstatistikler:
                                  </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>• Ortalama kelime uzunluğu</p>
                                    <p>• Paragraf sayısı</p>
                                    <p>• Okuma süresi tahmini</p>
                                    <p>• Dil algılama</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-6">
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Analiz Özellikleri:</h5>
                                <ul className="grid grid-cols-2 gap-3">
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Kelime frekansı
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Metin yoğunluğu
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Okunabilirlik skoru
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Dil analizi
                                  </li>
                        </ul>
                              </div>
                              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                                  Pro İpucu:
                                </h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400">
                                  Metin seçimi yaptığınızda, seçili alan için özel istatistikler görüntülenir. 
                                  Bu özellik, belirli bölümlerin analizini yapmak için kullanışlıdır.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Metin Dönüşümleri Bölümü */}
                    <section id="metin-donusumleri">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                          </svg>
                        </span>
                        Metin Dönüşümleri
                      </h2>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </span>
                            <h3 className="text-xl font-semibold">Büyük/Küçük Harf Dönüşümleri</h3>
                          </div>
                          <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Metinlerinizi profesyonel bir şekilde düzenlemek için gelişmiş büyük/küçük harf dönüşüm araçları sunuyoruz. 
                            Bu özellik sayesinde metinlerinizi farklı yazım stillerine hızlıca dönüştürebilir, başlıklar oluşturabilir 
                            ve metin formatını standartlaştırabilirsiniz.
                          </p>
                          <div className="grid grid-cols-1 gap-8">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Tümü Büyük Harf</h4>
                              </div>
                              <p className="text-gray-500 dark:text-gray-400 mb-4">
                                Metninizin tamamını büyük harfe çevirir. Bu özellik özellikle başlıklar, 
                                sloganlar veya vurgu yapmak istediğiniz metinler için idealdir.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Merhaba Dünya!
                                    Bu bir örnek metindir.
                                    Nasılsınız?
                                    İyi günler dilerim.
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    MERHABA DÜNYA!
                                    BU BİR ÖRNEK METİNDİR.
                                    NASILSINIZ?
                                    İYİ GÜNLER DİLERİM.
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Her Kelimenin İlk Harfi Büyük</h4>
                                  </div>
                              <p className="text-gray-500 dark:text-gray-400 mb-4">
                                Her kelimenin ilk harfini büyük yapar, diğer harfleri küçük bırakır. 
                                Bu format özellikle başlıklar, kitap isimleri ve profesyonel dokümanlarda tercih edilir.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    dijital pazarlama stratejileri
                                    sosyal medya yönetimi
                                    içerik üretimi ve analizi
                                    arama motoru optimizasyonu
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Dijital Pazarlama Stratejileri
                                    Sosyal Medya Yönetimi
                                    İçerik Üretimi Ve Analizi
                                    Arama Motoru Optimizasyonu
                                  </div>
                                </div>
                              </div>
                            </div>
                              </div>
                            </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 w-8 h-8 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </span>
                            <h3 className="text-xl font-semibold">Karakter Dönüşümleri</h3>
                          </div>
                          <p className="mb-4 text-gray-600 dark:text-gray-300">
                            Türkçe ve İngilizce karakterler arasında dönüşüm yapabilir, metinlerinizi farklı karakter setlerine uygun hale getirebilirsiniz.
                          </p>
                          <div className="grid grid-cols-1 gap-6">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Türkçe → İngilizce</h4>
                              </div>
                              <p className="text-gray-500 dark:text-gray-400 mb-4">
                                Türkçe karakterleri (ç, ğ, ı, ö, ş, ü) İngilizce karakterlere dönüştürür.
                                URL'lerde, dosya isimlerinde ve uluslararası sistemlerde kullanım için idealdir.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Şişli'de çiçekçi güzel
                                    şarkı söylüyor.
                                    Öğrenciler sınıfta
                                    ders çalışıyor.
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Sisli'de cicekci guzel
                                    sarki soyluyor.
                                    Ogrenciler sinifta
                                    ders calisiyorlar.
                                </div>
                              </div>
                          </div>
                        </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">İngilizce → Türkçe</h4>
                              </div>
                              <p className="text-gray-500 dark:text-gray-400 mb-4">
                                İngilizce karakterleri Türkçe karakterlere dönüştürür.
                                Yabancı sistemlerden alınan Türkçe metinleri düzeltmek için kullanışlıdır.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Turkiye'nin guzel sehirleri
                                    Kultur ve sanatin merkezi
                                    Egitim ve ogretim yili
                                    Basarilar dilerim
                                </div>
                                  </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Türkiye'nin güzel şehirleri
                                    Kültür ve sanatın merkezi
                                    Eğitim ve öğretim yılı
                                    Başarılar dilerim
                                </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 w-5 h-5 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </span>
                              <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300">Pro İpucu:</h5>
                            </div>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Metin dönüşümlerini yaparken, özel isimler ve kısaltmalar gibi istisnaları kontrol etmeyi unutmayın. 
                              Bazı durumlarda manuel düzeltme gerekebilir. Örneğin: "iPhone" kelimesi "IPHONE" yerine "iPhone" olarak kalmalıdır.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="temizleme-araclari">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </span>
                        Temizleme Araçları
                      </h2>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <h3 className="text-xl font-semibold">Boşluk Temizleme</h3>
                          </div>
                          <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Metinlerinizdeki gereksiz boşlukları temizleyerek düzenli ve profesyonel bir görünüm elde edin.
                            Satır başı, satır sonu ve kelimeler arasındaki fazla boşlukları tek bir tıkla düzeltebilirsiniz.
                          </p>
                          <div className="grid grid-cols-1 gap-8">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Fazla Boşlukları Temizle</h4>
                                </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Merhaba     Dünya!
                                    Bu   bir    örnek   metindir.
                                    
                                    Nasılsınız?
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Merhaba Dünya!
                                    Bu bir örnek metindir.
                                    Nasılsınız?
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 w-8 h-8 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                              </svg>
                            </span>
                            <h3 className="text-xl font-semibold">Özel Karakter Temizleme</h3>
                          </div>
                          <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Metinlerinizdeki özel karakterleri ve emojileri temizleyerek sade ve düzenli bir metin elde edin.
                          </p>
                          <div className="grid grid-cols-1 gap-6">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Emojileri Temizle</h4>
                                  </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Harika bir gün! 🌞
                                    Çok mutluyum 😊
                                    Teşekkürler! ❤️
                                </div>
                              </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Harika bir gün!
                                    Çok mutluyum
                                    Teşekkürler!
                                </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </section>

                    <section id="satir-islemleri">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                          </svg>
                        </span>
                        Satır İşlemleri
                      </h2>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                              </svg>
                            </span>
                            <h3 className="text-xl font-semibold">Satır Sıralama</h3>
                          </div>
                          <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Metinlerinizdeki satırları alfabetik veya sayısal olarak sıralayabilir, benzersiz satırları filtreleyebilirsiniz.
                          </p>
                          <div className="grid grid-cols-1 gap-8">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Alfabetik Sıralama</h4>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
Elma
Armut
                                    Muz
Çilek
                                    Kiraz
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Armut
                                    Çilek
                                    Elma
                                    Kiraz
                                    Muz
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gradient-to-br from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500 w-7 h-7 rounded-lg flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </span>
                                <h4 className="text-lg font-medium">Benzersiz Satırlar</h4>
                                </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Örnek Girdi:</div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Elma
                                    Armut
                                    Elma
                                    Muz
                                    Armut
                                </div>
                              </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 w-5 h-5 rounded flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </span>
                                    <div className="text-sm font-medium">Çıktı:</div>
                                </div>
                                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                                    Elma
Armut
                                    Muz
                                </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </section>

                    <section id="karakter-islemleri">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </span>
                        Karakter İşlemleri
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                        Metin editörümüzün en güçlü özelliklerinden biri olan karakter işlemleri, metinlerinizi 
                        karakterler düzeyinde düzenlemenize olanak tanır. Türkçe karakterlerden özel sembollere, 
                        Unicode karakterlerden emojilere kadar tüm karakter dönüşümlerini ve temizleme işlemlerini 
                        kolayca gerçekleştirebilirsiniz.
                      </p>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                      </div>
                            <h3 className="text-2xl font-semibold">Karakter Temizleme</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Metninizi istenmeyen karakterlerden arındırarak daha temiz ve okunabilir hale 
                            getirebilirsiniz. Bu özellik, metin analizi, veri temizleme ve içerik 
                            düzenleme işlemlerinde kullanışlıdır. Temizleme işlemleri geri alınabilir 
                            ve orijinal metniniz korunur.
                          </p>
                          <div className="grid grid-cols-1 gap-8">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                              <div className="flex items-center mb-4">
                                <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                                </span>
                                <h4 className="text-xl font-medium">Noktalama İşaretleri Temizleme</h4>
                                  </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Metindeki tüm noktalama işaretlerini (., !, ?, :, ;, vb.) kaldırır. Bu özellik 
                                özellikle metin analizi, kelime sayımı ve doğal dil işleme çalışmalarında 
                                kullanışlıdır. Noktalama işaretleri olmadan metin daha kolay işlenebilir 
                                hale gelir.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                    Örnek Girdi:
                                </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>Merhaba, dünya! Bu bir test... Değil mi?</p>
                                    <p>Prof. Dr. Ahmet Bey; konferansta sunum yapacak.</p>
                                    <p>Web sitesi: www.example.com, e-posta: info@example.com</p>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                    Çıktı:
                              </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>Merhaba dünya Bu bir test Değil mi</p>
                                    <p>Prof Dr Ahmet Bey konferansta sunum yapacak</p>
                                    <p>Web sitesi wwwexamplecom eposta info@examplecom</p>
                            </div>
                                  </div>
                                </div>
                              <div className="mt-6">
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Kullanım Alanları:</h5>
                                <ul className="grid grid-cols-2 gap-3">
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Metin analizi
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Veri madenciliği
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    SEO çalışmaları
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    İçerik analizi
                                  </li>
                                </ul>
                                  </div>
                                </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                              <div className="flex items-center mb-4">
                                <span className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                  </svg>
                                </span>
                                <h4 className="text-xl font-medium">Sayısal Karakter Temizleme</h4>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Metindeki tüm sayısal karakterleri (0-9) kaldırır. Bu özellik, metinsel 
                                analizlerde sayısal verileri ayıklamak veya sadece metin tabanlı içeriğe 
                                odaklanmak istediğinizde kullanışlıdır.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                    Örnek Girdi:
                            </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>Ürün123 fiyatı 456.99 TL'dir.</p>
                                    <p>2024 yılında 365 gün vardır.</p>
                                    <p>Telefon: +90 555 123 45 67</p>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                    Çıktı:
                                  </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>Ürün fiyatı TL'dir.</p>
                                    <p>yılında gün vardır.</p>
                                    <p>Telefon: +</p>
                                </div>
                              </div>
                            </div>
                              <div className="mt-6">
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Kullanım Alanları:</h5>
                                <ul className="grid grid-cols-2 gap-3">
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    İçerik analizi
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Metin sınıflandırma
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Doğal dil işleme
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Veri temizleme
                                  </li>
                                </ul>
                          </div>
                        </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                              <div className="flex items-center mb-4">
                                <span className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </span>
                                <h4 className="text-xl font-medium">Emoji ve Sembol Temizleme</h4>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Metindeki emoji, sembol ve özel karakterleri temizler. Bu özellik, 
                                profesyonel dokümanlarda, teknik metinlerde veya emoji kullanımının 
                                uygun olmadığı durumlarda metni temizlemek için kullanışlıdır.
                              </p>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                    Örnek Girdi:
                                  </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>Harika bir gün! 😊 ❤️ </p>
                                    <p>Proje tamamlandı! 🎉 ⭐ 🚀</p>
                                    <p>Başarılı! ✅ 💯 👍</p>
                                </div>
                                  </div>
                                <div className="space-y-3">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                    Çıktı:
                                </div>
                                  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                    <p>Harika bir gün!</p>
                                    <p>Proje tamamlandı!</p>
                                    <p>Başarılı!</p>
                              </div>
                            </div>
                                  </div>
                              <div className="mt-6">
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Kullanım Alanları:</h5>
                                <ul className="grid grid-cols-2 gap-3">
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Resmi dokümanlar
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Akademik metinler
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Teknik raporlar
                                  </li>
                                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    İş yazışmaları
                                  </li>
                                </ul>
                                </div>
                              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                                <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                                  Pro İpucu:
                                </h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400">
                                  Emoji ve sembol temizleme işlemi yaparken, bazı özel karakterlerin 
                                  (örneğin matematiksel semboller veya para birimleri) korunması 
                                  gerekebilir. Bu durumda, önce temizleme yapıp sonra gerekli 
                                  karakterleri manuel olarak ekleyebilirsiniz.
                                </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                    </section>

                    <section id="arama-ve-degistirme">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </span>
                        Arama ve Değiştirme
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                        Güçlü arama ve değiştirme özellikleri ile metinlerinizde hızlı ve hassas değişiklikler 
                        yapabilirsiniz. Düzenli ifadeler (regex) desteği ve gelişmiş arama seçenekleri ile 
                        karmaşık arama işlemlerini kolayca gerçekleştirebilirsiniz.
                      </p>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                                  </div>
                            <h3 className="text-2xl font-semibold">Temel Arama Özellikleri</h3>
                                </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Metninizde hızlı ve etkili aramalar yapın. Büyük/küçük harf duyarlılığı, tam kelime 
                            eşleşmesi ve daha fazlası ile arama sonuçlarınızı hassas bir şekilde filtreleyebilirsiniz.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                Örnek Arama:
                                  </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>// Arama metni: "örnek"</p>
                                <p>Bu bir örnek metindir.</p>
                                <p>Başka bir ÖRNEK cümle.</p>
                                <p>örnekler çoğaltılabilir.</p>
                                </div>
                              </div>
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                Arama Seçenekleri:
                            </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>☐ Büyük/küçük harf duyarlı</p>
                                <p>☐ Tam kelime eşleşmesi</p>
                                <p>☐ Düzenli ifade kullan</p>
                                <p>☐ Seçili alanda ara</p>
                          </div>
                        </div>
                      </div>
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Kısayollar:</h5>
                            <ul className="grid grid-cols-2 gap-3">
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Ctrl + F: Arama
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                F3: Sonraki
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Shift + F3: Önceki
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Esc: Aramayı kapat
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                                  </div>
                            <h3 className="text-2xl font-semibold">Gelişmiş Değiştirme</h3>
                                </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Metninizde bulunan içerikleri hızlı ve güvenli bir şekilde değiştirin. Tek seferde 
                            birden fazla değişiklik yapabilir, değişiklikleri önizleyebilir ve seçici 
                            değiştirmeler yapabilirsiniz.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                Örnek Değiştirme:
                                  </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>// Aranan: "eski"</p>
                                <p>// Yeni: "yeni"</p>
                                <p>Bu eski bir metindir.</p>
                                <p>Eski sistem değişiyor.</p>
                                </div>
                              </div>
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                Sonuç:
                            </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>// Değişiklikler:</p>
                                <p>Bu yeni bir metindir.</p>
                                <p>Yeni sistem değişiyor.</p>
                                  </div>
                                </div>
                                  </div>
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Özellikler:</h5>
                            <ul className="grid grid-cols-2 gap-3">
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Toplu değiştirme
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Seçici değiştirme
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Değişiklik önizleme
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Geri alma desteği
                              </li>
                            </ul>
                                </div>
                          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              Pro İpucu:
                            </h5>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Ctrl + H kısayolu ile değiştirme penceresini açabilir, Tab tuşu ile arama ve 
                              değiştirme alanları arasında geçiş yapabilirsiniz. Değişiklikleri uygulamadan 
                              önce "Tümünü Bul" ile kaç yerde değişiklik yapılacağını görebilirsiniz.
                            </p>
                              </div>
                            </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-violet-100 dark:bg-violet-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                                  </div>
                            <h3 className="text-2xl font-semibold">Düzenli İfadeler (Regex)</h3>
                                </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Güçlü düzenli ifade desteği ile karmaşık arama ve değiştirme işlemlerini 
                            gerçekleştirin. Örüntü eşleştirme ve gelişmiş metin manipülasyonu için 
                            regex kullanabilirsiniz.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                Regex Örneği:
                                  </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>// Regex: \b\w+@\w+\.\w+\b</p>
                                <p>İletişim: info@ornek.com</p>
                                <p>Mail: destek@site.com.tr</p>
                                </div>
                              </div>
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                Eşleşmeler:
                            </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>✓ info@ornek.com</p>
                                <p>✓ destek@site.com.tr</p>
                          </div>
                        </div>
                          </div>
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Yaygın Regex Desenleri:</h5>
                            <ul className="grid grid-cols-2 gap-3">
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                E-posta adresleri
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Telefon numaraları
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                URL'ler
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Tarih formatları
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              Pro İpucu:
                            </h5>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Regex grupları ($1, $2, vb.) ile yakalanan değerleri değiştirme işlemlerinde 
                              kullanabilirsiniz. Örneğin, tarih formatını "DD/MM/YYYY" den "YYYY-MM-DD" ye 
                              dönüştürmek için kullanabilirsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="editor-ayarlari">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                        <span className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-400 dark:to-rose-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </span>
                        Editör Ayarları
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
                        Editör deneyiminizi kişiselleştirin ve tercihlerinize göre özelleştirin. 
                        Tema seçenekleri, yazı tipi ayarları ve görünüm seçenekleri ile size en uygun 
                        çalışma ortamını oluşturun.
                      </p>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-sky-100 dark:bg-sky-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                              </svg>
                                  </div>
                            <h3 className="text-2xl font-semibold">Tema ve Görünüm</h3>
                                </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Editörün görsel temasını ve görünümünü özelleştirerek gözleriniz için en rahat 
                            çalışma ortamını oluşturun. Aydınlık ve karanlık tema seçenekleri ile gün içinde 
                            değişen ışık koşullarına uyum sağlayın.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                Aydınlık Tema
                                  </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>• Beyaz arka plan (#FFFFFF)</p>
                                <p>• Koyu metin rengi (#1F2937)</p>
                                <p>• Mavi vurgular (#3B82F6)</p>
                                <p>• Gri kenar çizgileri (#E5E7EB)</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                Karanlık Tema
                              </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>• Koyu arka plan (#111827)</p>
                                <p>• Açık metin rengi (#F9FAFB)</p>
                                <p>• Turkuaz vurgular (#2DD4BF)</p>
                                <p>• Koyu kenar çizgileri (#374151)</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tema Özellikleri:</h5>
                            <ul className="grid grid-cols-2 gap-3">
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Otomatik tema değişimi
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Sistem teması ile senkron
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Özel renk paletleri
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Kontrast ayarları
                              </li>
                            </ul>
                              </div>
                            </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                              </svg>
                                  </div>
                            <h3 className="text-2xl font-semibold">Yazı Tipi ve Boyut</h3>
                                </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Yazı tipi ve boyut ayarlarını özelleştirerek metinlerinizi daha okunabilir 
                            hale getirin. Monospace yazı tipleri ile kod düzenleme deneyiminizi 
                            iyileştirin.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                Yazı Tipi Seçenekleri:
                                  </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p style={{ fontFamily: 'Monaco' }}>• Monaco</p>
                                <p style={{ fontFamily: 'Consolas' }}>• Consolas</p>
                                <p style={{ fontFamily: 'Menlo' }}>• Menlo</p>
                                <p style={{ fontFamily: 'Source Code Pro' }}>• Source Code Pro</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                Boyut Örnekleri:
                              </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p style={{ fontSize: '12px' }}>12px - Küçük boyut</p>
                                <p style={{ fontSize: '14px' }}>14px - Orta boyut</p>
                                <p style={{ fontSize: '16px' }}>16px - Büyük boyut</p>
                                <p style={{ fontSize: '18px' }}>18px - Çok büyük</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Yazı Özellikleri:</h5>
                            <ul className="grid grid-cols-2 gap-3">
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Ligature desteği
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Anti-aliasing
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Satır yüksekliği
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Karakter aralığı
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              Pro İpucu:
                            </h5>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Uzun süreli kod yazarken, gözlerinizi yormamak için daha büyük yazı boyutu 
                              ve yüksek kontrast kullanmanızı öneririz. Ayrıca, ligature desteği olan 
                              yazı tipleri kod okunabilirliğini artırır.
                            </p>
                              </div>
                            </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-6">
                            <div className="bg-lime-100 dark:bg-lime-900/30 rounded-lg p-3 mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-600 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                              </svg>
                                  </div>
                            <h3 className="text-2xl font-semibold">Düzen ve Görünüm</h3>
                                </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Editör düzenini ve görünümünü özelleştirerek çalışma alanınızı daha verimli 
                            hale getirin. Satır numaraları, kenar boşlukları ve diğer görsel öğeleri 
                            tercihlerinize göre ayarlayın.
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                                Görünüm Seçenekleri:
                                  </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>☐ Satır numaraları</p>
                                <p>☐ Minimap görünümü</p>
                                <p>☐ Kenar boşlukları</p>
                                <p>☐ Sözdizimi vurgulama</p>
                                </div>
                              </div>
                            <div className="space-y-3">
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 text-green-600 dark:text-green-400">2</span>
                                Düzen Ayarları:
                            </div>
                              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm">
                                <p>• Dikey/yatay bölme</p>
                                <p>• Panel konumları</p>
                                <p>• Araç çubuğu konumu</p>
                                <p>• Sekme boyutu</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Özelleştirme Seçenekleri:</h5>
                            <ul className="grid grid-cols-2 gap-3">
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Panel yerleşimi
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Araç çubukları
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Kısayol tuşları
                              </li>
                              <li className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Menü düzeni
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              Pro İpucu:
                            </h5>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Minimap özelliği, uzun dosyalarda gezinmeyi kolaylaştırır. Satır numaraları 
                              ve kenar boşlukları ise kod organizasyonunu daha iyi hale getirir. İhtiyacınıza 
                              göre bu özellikleri açıp kapatabilirsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="kisayollar">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Klavye Kısayolları</h2>
                      <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
                          <h3 className="text-xl font-semibold mb-4">Genel Kısayollar</h3>
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-medium mb-2">Dosya İşlemleri</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                  <span>Kaydet</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + S</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Yazdır</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + P</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Yeni Belge</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + N</kbd>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Düzenleme Geçmişi</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                  <span>Geri Al</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + Z</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>İleri Al</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + Y</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Geçmişi Temizle</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + K</kbd>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
                          <h3 className="text-xl font-semibold mb-4">Metin Düzenleme</h3>
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-medium mb-2">Seçim İşlemleri</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                  <span>Tümünü Seç</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + A</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Satır Seç</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + L</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Kelime Seç</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + D</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Çoklu Seçim</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Alt + Click</kbd>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Düzenleme İşlemleri</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                  <span>Satır Sil</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + Shift + K</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Satır Taşı</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Alt + ↑/↓</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Satır Kopyala</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Alt + Shift + ↑/↓</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Yorum Satırı</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + /</kbd>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                          <h3 className="text-xl font-semibold mb-4">Arama ve Değiştirme</h3>
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-medium mb-2">Arama İşlemleri</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                  <span>Metin Ara</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + F</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Sonrakini Bul</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">F3</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Öncekini Bul</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Shift + F3</kbd>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Değiştirme İşlemleri</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center justify-between">
                                  <span>Bul ve Değiştir</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Ctrl + H</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Tümünü Değiştir</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Alt + Enter</kbd>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span>Regex ile Değiştir</span>
                                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">Alt + R</kbd>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App 