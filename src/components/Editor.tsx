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
    lineNumbers: settings.lineNumbers ? 'on' as const : 'off' as const,
    wordWrap: settings.wordWrap ? 'on' as const : 'off' as const,
    minimap: { enabled: settings.minimap },
    largeFileOptimizations: false, // Büyük dosya optimizasyonlarını kapat
    tabSize: settings.tabSize,
    renderWhitespace: settings.renderWhitespace,
    cursorStyle: settings.cursorStyle,
    cursorWidth: settings.cursorWidth,
    cursorSmoothCaretAnimation: settings.cursorSmoothCaretAnimation ? 'on' as const : 'off' as const,
    smoothScrolling: settings.smoothScrolling,
    bracketPairColorization: { enabled: false },
    guides: { bracketPairs: settings.guides && settings.syntaxHighlighting },
    links: settings.links && settings.syntaxHighlighting,
    mouseWheelZoom: settings.mouseWheelZoom,
    unicodeHighlight: settings.unicodeHighlight,
    occurrencesHighlight: settings.syntaxHighlighting ? 'singleFile' as const : 'off' as const,
    renderControlCharacters: settings.syntaxHighlighting,
    colorDecorators: settings.syntaxHighlighting,
    selectionHighlight: settings.syntaxHighlighting,
    matchBrackets: settings.syntaxHighlighting ? 'always' as const : 'never' as const,
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
      beforeMount={(monaco) => {
        monaco.editor.defineTheme('vs-dark', {
          base: 'vs-dark',
          inherit: true,
          rules: [],
          colors: {}
        });
      }}
      onMount={(editor) => {
        // Ensure paste functionality works by removing any event listeners that might prevent it
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
      }}
    />
  )
} 