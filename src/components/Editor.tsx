import { useTheme } from '../hooks/useTheme'
import { EditorSettings } from '../features/editor/types'
import { Editor } from '@monaco-editor/react'

interface TextEditorProps {
  value: string
  onChange: (value: string) => void
  settings: EditorSettings
}

export function TextEditor({ value, onChange, settings }: TextEditorProps) {
  const { theme } = useTheme()

  // Monaco Editor ayarlarını oluştur
  const monacoOptions = {
    fontSize: settings.fontSize,
    fontFamily: settings.fontFamily,
    lineHeight: settings.lineHeight,
    letterSpacing: settings.letterSpacing,
    lineNumbers: settings.lineNumbers ? 'on' : 'off',
    wordWrap: settings.wordWrap ? 'on' : 'off',
    minimap: { enabled: settings.minimap },
    tabSize: settings.tabSize,
    renderWhitespace: settings.renderWhitespace,
    cursorStyle: settings.cursorStyle,
    cursorWidth: settings.cursorWidth,
    cursorSmoothCaretAnimation: settings.cursorSmoothCaretAnimation,
    smoothScrolling: settings.smoothScrolling,
    bracketPairColorization: { enabled: false },
    guides: { bracketPairs: settings.guides && settings.syntaxHighlighting },
    links: settings.links && settings.syntaxHighlighting,
    mouseWheelZoom: settings.mouseWheelZoom,
    unicodeHighlight: settings.unicodeHighlight,
    occurrencesHighlight: settings.syntaxHighlighting,
    renderControlCharacters: settings.syntaxHighlighting,
    colorDecorators: settings.syntaxHighlighting,
    selectionHighlight: settings.syntaxHighlighting,
    matchBrackets: settings.syntaxHighlighting ? 'always' : 'never',
    readOnly: false,
    contextmenu: true,
    quickSuggestions: false,
    ariaLabel: 'Metin editörü',
    preventDefaultOnPaste: false
  }

  return (
    <Editor
      value={value}
      onChange={(value) => onChange(value || '')}
      language="plaintext"
      theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
      options={monacoOptions}
      className="w-full h-[calc(100vh-12rem)] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
      onPaste={(e) => {
        e?.preventDefault = () => {}
      }}
    />
  )
} 