import { useState, useCallback, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { Toolbar } from './components/Toolbar'
import { SearchReplace } from './components/SearchReplace'
import { EditorSettingsPopup } from './components/EditorSettings'
import { useTextOperations } from './features/textOperations/hooks/useTextOperations'
import { useEditorSettings } from './features/editor/hooks/useEditorSettings'
import { useTheme } from './hooks/useTheme'
import { FiDownload, FiPrinter, FiSearch, FiMoon, FiSun, FiTrash2, FiSettings, FiRotateCcw, FiRotateCw, FiX, FiMenu } from 'react-icons/fi'
import { TestSystem } from './utils/testSystem'
import { Loading } from './components/Loading'
import { Toast } from './components/Toast'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { SuggestionButton } from './components/SuggestionButton'

// Loglama fonksiyonu
const log = (type: 'info' | 'warning' | 'error', message: string, data?: any) => {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`
  console.log(logMessage)
  if (data) {
    console.log('Data:', data)
  }
}

interface ToastState {
  message: string
  type: 'success' | 'info' | 'warning' | 'error'
  details?: string
  operation?: 'case' | 'sort' | 'clean' | 'convert' | 'url' | 'prefix' | 'suffix' | 'format' | 'number' | 'duplicate' | 'html' | 'delete' | 'edit' | 'copy' | 'refresh' | 'align' | 'transform'
}

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
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
  const [toast, setToast] = useState<ToastState | null>(null)

  const handleEditorDidMount = (editor: any, monaco: any) => {
    setEditor(editor)
    setMonacoInstance(monaco)
    
    editor.updateOptions({
      readOnly: false,
      copyWithSyntaxHighlighting: true,
      contextmenu: true,
      quickSuggestions: false,
      renderLineHighlight: 'none',
      minimap: { enabled: editorSettings.minimap },
      lineNumbers: editorSettings.lineNumbers ? 'on' : 'off',
      wordWrap: editorSettings.wordWrap ? 'on' : 'off',
      fontSize: editorSettings.fontSize,
      fontFamily: editorSettings.fontFamily,
      lineHeight: editorSettings.lineHeight,
      largeFileOptimizations: false, // Büyük dosya optimizasyonlarını kapat
      tabSize: editorSettings.tabSize,
      renderWhitespace: editorSettings.renderWhitespace,
      autoClosingBrackets: editorSettings.autoClosingBrackets ? 'always' : 'never',
      autoClosingQuotes: editorSettings.autoClosingQuotes ? 'always' : 'never',
      formatOnPaste: editorSettings.formatOnPaste,
      formatOnType: editorSettings.formatOnType,
      preventDefaultOnPaste: false
    })

    // Ensure paste functionality works by overriding the onKeyDown method
    const originalOnKeyDown = editor.onKeyDown;
    editor.onKeyDown = function(listener) {
      return originalOnKeyDown.call(this, (e) => {
        // Make sure paste events are not prevented
        if (e.ctrlKey && e.code === "KeyV") {
          // Allow default paste behavior
          const originalPreventDefault = e.preventDefault;
          e.preventDefault = function() {
            // Do nothing, effectively disabling preventDefault for paste
          };
        }
        return listener(e);
      });
    };

    // Sağ tıklama menüsü için olay dinleyici ekliyorum
    editor.onContextMenu((event: any) => {
      event.preventDefault();
      const menu = [
        { label: 'Kes', command: 'editor.action.clipboardCutAction' },
        { label: 'Kopyala', command: 'editor.action.clipboardCopyAction' },
        { label: 'Yapıştır', command: 'editor.action.clipboardPasteAction' }
      ];

      // Menüyü gösterme kodunu ekliyorum
      const contextMenu = document.createElement('div');
      contextMenu.className = 'custom-context-menu';
      menu.forEach(item => {
        editor.addAction({
          id: item.command,
          label: item.label,
          keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_V],
          contextMenuGroupId: '9_cutcopypaste',
          run: () => editor.trigger('keyboard', item.command, null)
        });
      });

      // Menüyü kapatma
      document.addEventListener('click', () => {
        contextMenu.remove();
      }, { once: true });
    });

    // Remove any global paste event listeners that might be preventing paste
    const oldAddEventListener = window.addEventListener;
    window.addEventListener = function(type, listener, options) {
      if (type === 'paste') {
        // Don't add paste event listeners that might prevent default behavior
        return;
      }
      return oldAddEventListener.call(this, type, listener, options);
    };

    // Editöre otomatik odaklan
    editor.focus()
  }

  // Monaco editörün temasını güncelle
  useEffect(() => {
    if (editor && monacoInstance) {
      const editorTheme = document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs-light'
      
      // Karanlık tema için özel renk tanımlaması
      if (editorTheme === 'vs-dark') {
        monacoInstance.editor.defineTheme('vs-dark', {
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
      }
      
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

  // Mobil menüyü kapatmak için ESC tuşu dinleyicisini güncelle
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowSettings(false)
      setShowPrivacyPolicy(false)
      setShowMobileMenu(false)
    }
  }, [])

  // Mobil menüyü kapatmak için tıklama dinleyicisi
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  const showToast = useCallback((
    message: string, 
    type: 'success' | 'info' | 'warning' | 'error', 
    details?: string, 
    operation?: 'case' | 'sort' | 'clean' | 'convert' | 'url' | 'prefix' | 'suffix' | 'format' | 'number' | 'duplicate' | 'html' | 'delete' | 'edit' | 'copy' | 'refresh' | 'align' | 'transform'
  ) => {
    setToast({ message, type, details, operation })
  }, [])

  const handleTextOperation = useCallback((
    operation: string, 
    operationType: 'case' | 'sort' | 'clean' | 'convert' | 'url' | 'prefix' | 'suffix' | 'format' | 'number' | 'duplicate' | 'html' | 'delete' | 'edit' | 'copy' | 'refresh' | 'align' | 'transform', 
    affectedCount?: number, 
    error?: string
  ) => {
    if (error) {
      showToast(`${operation} başarısız oldu`, 'error', error, operationType)
      return
    }

    let details = affectedCount 
      ? `${affectedCount} ${getAffectedText(operationType, affectedCount)}` 
      : undefined

    showToast(`${operation} tamamlandı`, 'success', details, operationType)
  }, [showToast])

  const getAffectedText = (type: string, count: number) => {
    switch (type) {
      case 'case': return `karakter dönüştürüldü`
      case 'sort': return `satır sıralandı`
      case 'clean': return `öğe temizlendi`
      case 'convert': return `karakter dönüştürüldü`
      case 'url': return `karakter kodlandı/çözüldü`
      case 'prefix':
      case 'suffix': return `satır düzenlendi`
      case 'format': return `satır formatlandı`
      case 'number': return `satır numaralandırıldı`
      case 'duplicate': return `tekrar eden satır kaldırıldı`
      case 'html': return `HTML etiketi temizlendi`
      case 'delete': return `öğe silindi`
      case 'edit': return `öğe düzenlendi`
      case 'copy': return `öğe kopyalandı`
      case 'refresh': return `öğe yenilendi`
      case 'align': return `satır hizalandı`
      case 'transform': return `metin dönüştürüldü`
      default: return `öğe etkilendi`
    }
  }

  const handleConvertCase = useCallback((type: 'upper' | 'lower' | 'title' | 'sentence') => {
    try {
      const beforeLength = text.length
      convertCase(type)
      const operationNames = {
        upper: 'Büyük harfe dönüştürme',
        lower: 'Küçük harfe dönüştürme',
        title: 'Başlık formatına dönüştürme',
        sentence: 'Cümle formatına dönüştürme'
      }
      handleTextOperation(operationNames[type], 'case', beforeLength)
    } catch (error) {
      handleTextOperation('Harf dönüşümü', 'case', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, convertCase, handleTextOperation])

  const handleSortLines = useCallback((type: 'asc' | 'desc' | 'length-asc' | 'length-desc' | 'random') => {
    try {
      const beforeLines = text.split('\n').length
      sortLines(type)
      const operationNames = {
        'asc': 'A\'dan Z\'ye sıralama',
        'desc': 'Z\'den A\'ya sıralama',
        'length-asc': 'Kısadan uzuna sıralama',
        'length-desc': 'Uzundan kısaya sıralama',
        'random': 'Rastgele sıralama'
      }
      handleTextOperation(operationNames[type], 'sort', beforeLines)
    } catch (error) {
      handleTextOperation('Sıralama', 'sort', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, sortLines, handleTextOperation])

  const handleConvertCharacters = useCallback((type: 'tr-en' | 'en-tr') => {
    try {
      const beforeLength = text.length
      convertCharacters(type)
      const operationNames = {
        'tr-en': 'Türkçe karakterleri İngilizce karakterlere dönüştürme',
        'en-tr': 'İngilizce karakterleri Türkçe karakterlere dönüştürme'
      }
      handleTextOperation(operationNames[type], 'convert', beforeLength)
    } catch (error) {
      handleTextOperation('Karakter dönüşümü', 'convert', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, convertCharacters, handleTextOperation])

  const handleUrlEncodeDecode = useCallback((type: 'encode' | 'decode') => {
    try {
      const beforeLength = text.length
      urlEncodeDecode(type)
      const operationNames = {
        'encode': 'URL kodlama',
        'decode': 'URL çözme'
      }
      handleTextOperation(operationNames[type], 'url', beforeLength)
    } catch (error) {
      handleTextOperation('URL işlemi', 'url', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, urlEncodeDecode, handleTextOperation])

  const handleAddPrefix = useCallback((prefix: string) => {
    try {
      const beforeLines = text.split('\n').length
      addPrefix(prefix)
      handleTextOperation('Ön ek ekleme', 'prefix', beforeLines)
    } catch (error) {
      handleTextOperation('Ön ek ekleme', 'prefix', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, addPrefix, handleTextOperation])

  const handleAddSuffix = useCallback((suffix: string) => {
    try {
      const beforeLines = text.split('\n').length
      addSuffix(suffix)
      handleTextOperation('Son ek ekleme', 'suffix', beforeLines)
    } catch (error) {
      handleTextOperation('Son ek ekleme', 'suffix', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, addSuffix, handleTextOperation])

  const handleRemoveDuplicates = useCallback(() => {
    try {
      const beforeLines = text.split('\n').length
      removeDuplicates()
      handleTextOperation('Tekrar eden satırları kaldırma', 'duplicate', beforeLines)
    } catch (error) {
      handleTextOperation('Tekrar eden satırları kaldırma', 'duplicate', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, removeDuplicates, handleTextOperation])

  const handleRemoveHtmlTags = useCallback(() => {
    try {
      const beforeLength = text.length
      removeHtmlTags()
      handleTextOperation('HTML etiketlerini temizleme', 'html', beforeLength)
    } catch (error) {
      handleTextOperation('HTML temizleme', 'html', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, removeHtmlTags, handleTextOperation])

  const cleanText = useCallback((featureId: string) => {
    try {
      const beforeLength = text.length
      switch (featureId) {
        // Boşluk Temizleme
        case 'empty-lines':
          setText(text.split('\n').filter(line => line.trim() !== '').join('\n'))
          handleTextOperation('Boş satırları temizleme', 'clean', beforeLength)
          break
        case 'normalize-spaces':
          setText(text.split('\n').map(line => line.replace(/[ \t]+/g, ' ')).join('\n'))
          handleTextOperation('Boşlukları normalleştirme', 'clean', beforeLength)
          break
        case 'extra-spaces':
          setText(text.replace(/\s+/g, ' '))
          handleTextOperation('Fazla boşlukları temizleme', 'clean', beforeLength)
          break
        case 'trim-lines':
          setText(text.split('\n').map(line => line.trim()).join('\n'))
          handleTextOperation('Satır başı/sonu boşluklarını temizleme', 'clean', beforeLength)
          break
        case 'tabs':
          setText(text.replace(/\t/g, ''))
          handleTextOperation('Tab karakterlerini temizleme', 'clean', beforeLength)
          break
        case 'all-spaces':
          setText(text.replace(/\s/g, ''))
          handleTextOperation('Tüm boşlukları temizleme', 'clean', beforeLength)
          break

        // Karakter Temizleme
        case 'special-chars':
          setText(text.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/g, ''))
          handleTextOperation('Özel karakterleri temizleme', 'clean', beforeLength)
          break
        case 'punctuation':
          setText(text.replace(/[.,!?;:'"()[\]{}]/g, ''))
          handleTextOperation('Noktalama işaretlerini temizleme', 'clean', beforeLength)
          break
        case 'emoji-symbols':
          setText(text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ''))
          handleTextOperation('Emoji ve sembolleri temizleme', 'clean', beforeLength)
          break
        case 'numbers':
          setText(text.replace(/\d+/g, ''))
          handleTextOperation('Sayıları temizleme', 'clean', beforeLength)
          break
        case 'non-ascii':
          setText(text.replace(/[^\x00-\x7F]/g, ''))
          handleTextOperation('ASCII olmayan karakterleri temizleme', 'clean', beforeLength)
          break
        case 'control-chars':
          setText(text.replace(/[\x00-\x1F\x7F]/g, ''))
          handleTextOperation('Kontrol karakterlerini temizleme', 'clean', beforeLength)
          break
        case 'diacritics':
          setText(text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
          handleTextOperation('Aksan işaretlerini temizleme', 'clean', beforeLength)
          break
        case 'currency':
          setText(text.replace(/[$€£¥₺¢]/g, ''))
          handleTextOperation('Para birimi sembollerini temizleme', 'clean', beforeLength)
          break

        // İçerik Temizleme
        case 'html-tags':
          setText(text.replace(/<[^>]*>/g, ''))
          handleTextOperation('HTML etiketlerini temizleme', 'clean', beforeLength)
          break
        case 'xml-json':
          setText(text.replace(/<\/?[^>]+(>|$)/g, '').replace(/[{}\[\]",]/g, ' ').replace(/\s+/g, ' ').trim())
          handleTextOperation('XML/JSON yapılarını temizleme', 'clean', beforeLength)
          break
        case 'duplicate-lines':
          setText([...new Set(text.split('\n'))].join('\n'))
          handleTextOperation('Tekrar eden satırları temizleme', 'clean', beforeLength)
          break
        case 'urls':
          setText(text.replace(/https?:\/\/[^\s]+/g, ''))
          handleTextOperation('URL\'leri temizleme', 'clean', beforeLength)
          break
        case 'emails':
          setText(text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, ''))
          handleTextOperation('E-posta adreslerini temizleme', 'clean', beforeLength)
          break
        case 'markdown':
          let mdText = text
          mdText = mdText.replace(/^#{1,6}\s+/gm, '')
          mdText = mdText.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
          mdText = mdText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          mdText = mdText.replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
          mdText = mdText.replace(/^>\s+/gm, '')
          mdText = mdText.replace(/```[\s\S]*?```/g, '')
          mdText = mdText.replace(/`([^`]+)`/g, '$1')
          mdText = mdText.replace(/^[-*_]{3,}\s*$/gm, '')
          setText(mdText)
          handleTextOperation('Markdown biçimlendirmelerini temizleme', 'clean', beforeLength)
          break
        case 'css':
          setText(text.replace(/style="[^"]*"/g, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ''))
          handleTextOperation('CSS stillerini temizleme', 'clean', beforeLength)
          break
        case 'scripts':
          setText(text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/\son\w+="[^"]*"/g, ''))
          handleTextOperation('Script kodlarını temizleme', 'clean', beforeLength)
          break

        // Format Temizleme
        case 'comments':
          let commentText = text
          commentText = commentText.replace(/\/\/.*$/gm, '')
          commentText = commentText.replace(/\/\*[\s\S]*?\*\//g, '')
          commentText = commentText.replace(/<!--[\s\S]*?-->/g, '')
          setText(commentText)
          handleTextOperation('Yorumları temizleme', 'clean', beforeLength)
          break
        case 'line-numbers':
          setText(text.replace(/^\s*\d+[\.\)]\s*/gm, ''))
          handleTextOperation('Satır numaralarını temizleme', 'clean', beforeLength)
          break
        case 'quoted-text':
          setText(text.replace(/"[^"]*"|'[^']*'/g, ''))
          handleTextOperation('Tırnak içindeki metinleri temizleme', 'clean', beforeLength)
          break
        case 'parentheses-text':
          setText(text.replace(/\([^)]*\)/g, '').replace(/\[[^\]]*\]/g, '').replace(/\{[^}]*\}/g, ''))
          handleTextOperation('Parantez içindeki metinleri temizleme', 'clean', beforeLength)
          break
        case 'code-blocks':
          let codeText = text
          codeText = codeText.replace(/```[\s\S]*?```/g, '')
          codeText = codeText.replace(/`[^`]*`/g, '')
          codeText = codeText.replace(/<pre>[\s\S]*?<\/pre>/g, '')
          codeText = codeText.replace(/<code>[\s\S]*?<\/code>/g, '')
          setText(codeText)
          handleTextOperation('Kod bloklarını temizleme', 'clean', beforeLength)
          break
        case 'ansi-colors':
          setText(text.replace(/\u001b\[\d{1,2}m/g, ''))
          handleTextOperation('ANSI renk kodlarını temizleme', 'clean', beforeLength)
          break
        case 'indentation':
          setText(text.replace(/^[ \t]+/gm, ''))
          handleTextOperation('Girinti temizleme', 'clean', beforeLength)
          break
        case 'line-breaks':
          setText(text.replace(/\r\n|\r/g, '\n'))
          handleTextOperation('Satır sonu karakterlerini normalleştirme', 'clean', beforeLength)
          break

        // Pattern Temizleme
        case 'dates':
          setText(text.replace(/\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}|\d{4}[\/.-]\d{1,2}[\/.-]\d{1,2}/g, ''))
          handleTextOperation('Tarih formatlarını temizleme', 'clean', beforeLength)
          break
        case 'numeric-lines':
          setText(text.split('\n').filter(line => !/^\s*\d+(\.\d+)?\s*$/.test(line)).join('\n'))
          handleTextOperation('Sadece sayı içeren satırları temizleme', 'clean', beforeLength)
          break
        case 'alpha-lines':
          setText(text.split('\n').filter(line => !/^[A-Za-z\s]+$/.test(line)).join('\n'))
          handleTextOperation('Sadece harf içeren satırları temizleme', 'clean', beforeLength)
          break
        case 'uppercase-lines':
          setText(text.split('\n').filter(line => !/^[A-Z\s]+$/.test(line)).join('\n'))
          handleTextOperation('Sadece büyük harf içeren satırları temizleme', 'clean', beforeLength)
          break
        case 'lowercase-lines':
          setText(text.split('\n').filter(line => !/^[a-z\s]+$/.test(line)).join('\n'))
          handleTextOperation('Sadece küçük harf içeren satırları temizleme', 'clean', beforeLength)
          break
      }
    } catch (error) {
      handleTextOperation('Metin temizleme', 'clean', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, setText, handleTextOperation])

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    toggleTheme()
    showToast(
      `Tema ${newTheme === 'dark' ? 'koyu' : 'açık'} moda geçirildi`,
      'success',
      undefined,
      'transform'
    )
  }

  const handleReplaceText = useCallback((searchText: string, replaceText: string, replaceAll: boolean = false) => {
    try {
      const beforeLength = text.length
      if (replaceAll) {
        const regex = new RegExp(searchText, 'g')
        const matches = text.match(regex)
        const count = matches ? matches.length : 0
        
        if (count > 0) {
          setText(text.replace(regex, replaceText))
          showToast(
            `"${searchText}" metni "${replaceText}" ile ${count} yerde değiştirildi`,
            'success',
            undefined,
            'transform'
          )
        } else {
          showToast(
            `"${searchText}" metni bulunamadı`,
            'error',
            undefined,
            'transform'
          )
        }
      } else {
        const firstOccurrence = text.indexOf(searchText)
        if (firstOccurrence !== -1) {
          // Kaçıncı kelime olduğunu bul
          const beforeText = text.slice(0, firstOccurrence)
          const occurrenceCount = (beforeText.match(new RegExp(searchText, 'g')) || []).length + 1
          
          const newText = text.slice(0, firstOccurrence) + replaceText + text.slice(firstOccurrence + searchText.length)
          setText(newText)
          showToast(
            `"${searchText}" metninin ${occurrenceCount}. görünümü "${replaceText}" ile değiştirildi`,
            'success',
            undefined,
            'transform'
          )
        } else {
          showToast(
            `"${searchText}" metni bulunamadı`,
            'error',
            undefined,
            'transform'
          )
        }
      }
      handleTextOperation('Metin değiştirme', 'edit', beforeLength)
    } catch (error) {
      handleTextOperation('Metin değiştirme', 'edit', undefined, error instanceof Error ? error.message : 'Bilinmeyen hata')
    }
  }, [text, setText, handleTextOperation])

  return (
    <div className="min-h-screen bg-white dark:bg-dark overflow-x-hidden">
      <Helmet>
        <title>Metin Editörü - Ücretsiz Online Metin Düzenleyici</title>
        <meta name="description" content="Ücretsiz online metin düzenleyici. Metinlerinizi düzenleyin, dönüştürün ve biçimlendirin." />
      </Helmet>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-500">
              Metin Editörü
            </h1>
            
            {/* Mobil Menü Butonu */}
            <button
              className="lg:hidden mobile-menu-button flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <FiMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Masaüstü Menü */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/nasil-kullanilir/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all group"
                title="Nasıl Kullanılır"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Yardım</span>
              </Link>
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all group"
                title="Ayarlar"
              >
                <FiSettings className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Ayarlar</span>
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all group"
                title={theme === 'dark' ? 'Aydınlık Mod' : 'Karanlık Mod'}
              >
                {theme === 'dark' ? (
                  <>
                    <FiSun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 transition-colors">Aydınlık</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition-colors">Karanlık</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobil Menü */}
            {showMobileMenu && (
              <div className="lg:hidden mobile-menu absolute top-full right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-2 px-2">
                <Link
                  to="/nasil-kullanilir/"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Yardım</span>
                </Link>
                <button
                  onClick={() => {
                    setShowSettings(true)
                    setShowMobileMenu(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiSettings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ayarlar</span>
                </button>
                <button
                  onClick={() => {
                    toggleTheme()
                    setShowMobileMenu(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {theme === 'dark' ? (
                    <>
                      <FiSun className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Aydınlık Mod</span>
                    </>
                  ) : (
                    <>
                      <FiMoon className="h-5 w-5 text-indigo-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Karanlık Mod</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                defaultLanguage="plaintext"
                value={text}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                loading={<Loading />}
                options={{
                  ...editorSettings,
                  contextmenu: true, // Sağ tıklama menüsünü etkinleştiriyorum
                  fontFamily: `${editorSettings.fontFamily}, monospace`,
                  fontLigatures: true,
                  disableMonospaceOptimizations: true,
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
                  cursorBlinking: 'blink',
                  cursorSmoothCaretAnimation: 'off',
                  smoothScrolling: false,
                  cursorStyle: 'line',
                  cursorWidth: 2,
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
            onConvertCase={handleConvertCase}
            onSortLines={handleSortLines}
            onConvertCharacters={handleConvertCharacters}
            onUrlEncodeDecode={handleUrlEncodeDecode}
            onAddPrefix={handleAddPrefix}
            onAddSuffix={handleAddSuffix}
            onFormatText={formatText}
            onShowMarkdown={showMarkdown}
            onCleanText={cleanText}
            text={text}
          />

          {/* Arama ve Değiştirme */}
          <SearchReplace 
            text={text} 
            onTextChange={setText} 
            onHighlight={(match, shouldScroll) => {
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

                // Sadece kullanıcı özellikle istediğinde editörü kaydır
                if (shouldScroll) {
                  const position = editor.getModel().getPositionAt(match.start);
                  editor.setPosition(position);
                  editor.revealLineInCenter(position.lineNumber);
                }
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

        {/* Tavsiye Ver Butonu */}
        <SuggestionButton />

        {/* SEO Bölümü */}
        <section className="max-w-[1400px] mx-auto px-4 py-16 mt-12 border-t border-light-border dark:border-dark-border">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Metin Düzenleme Özellikleri */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-8 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Profesyonel Metin Düzenleme
              </h2>
              <div className="space-y-6">
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                  </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                        Gelişmiş Düzenleme Araçları
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Metin biçimlendirme ve düzenleme
                </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Büyük/küçük harf dönüşümleri
                </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Akıllı karakter değiştirme
                </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          HTML etiket temizleme
                </li>
              </ul>
            </div>
                    </div>
                  </div>

                <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                        Güvenli ve Hızlı İşlem
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Tarayıcı tabanlı işlemler
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Anlık sonuç alma
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Veri güvenliği
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Sunucu gecikmesi yok
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>

            {/* Kapsamlı Özellikler */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-8 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Kapsamlı Özellikler
              </h2>
              <div className="space-y-6">
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                        Akıllı Dönüşümler
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Türkçe-İngilizce karakter dönüşümü
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          URL kodlama/çözme
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Özel format düzenlemeleri
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Toplu metin işlemleri
                        </li>
                      </ul>
                </div>
              </div>
            </div>

                <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                  </span>
                  <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                        Metin Organizasyonu
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Satır sıralama ve filtreleme
                </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Alfabetik düzenleme
                </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Sayısal sıralama
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          Özel sıralama seçenekleri
                </li>
              </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nasıl Kullanılır Butonu */}
          <div className="mt-16 text-center">
            <Link
              to="/nasil-kullanilir/"
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
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Hakkımızda */}
              <div>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">
                  Metin Editörü
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
                  <li>Sıralama Araçları</li>
                  <li>URL Kodlama</li>
                  <li>HTML Temizleme</li>
                </ul>
              </div>

              {/* Yardım */}
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                  Bağlantılar
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors font-medium"
                    >
                      Editör Ayarları
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/nasil-kullanilir/"
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors font-medium"
                    >
                      Nasıl Kullanılır?
                    </Link>
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
                      Gizlilik politikamız hakkında sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz:
                    </p>
                    <ul>
                      <li>E-posta: iletisim@metineditoru.com</li>
                    </ul>
                  </section>

                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-8">
                    Son Güncelleme: 13.02.2025
                  </p>
            </div>
          </div>
            </div>
          </div>
        )}
      </main>
      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          details={toast.details}
          operation={toast.operation}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default App 