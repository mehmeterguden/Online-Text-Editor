import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useTheme } from '../hooks/useTheme';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor({ value, onChange }: EditorProps) {
  const { theme } = useTheme();

  return (
    <div className="w-full h-[calc(100vh-8rem)]">
      <MonacoEditor
        height="100%"
        defaultLanguage="plaintext"
        value={value}
        onChange={(value) => onChange(value || '')}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        beforeMount={(monaco) => {
          // Tema tanımlamalarını bir kere yap
          if (!monaco.editor.getTheme('vs-dark')) {
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
                'editor.background': '#1f2937',
                'editor.foreground': '#e5e7eb',
                'editor.lineHighlightBackground': '#313244',
                'editorCursor.foreground': '#89b4fa',
                'editor.selectionBackground': '#45475a80',
                'editor.inactiveSelectionBackground': '#45475a40',
                'editorSuggestWidget.background': '#181825',
                'editorSuggestWidget.border': '#313244',
                'editorSuggestWidget.foreground': '#cdd6f4',
                'editorSuggestWidget.selectedBackground': '#45475a80',
                'editorSuggestWidget.highlightForeground': '#89b4fa'
              }
            });
          }

          if (!monaco.editor.getTheme('light')) {
            monaco.editor.defineTheme('light', {
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
                'editorSuggestWidget.highlightForeground': '#2563eb'
              }
            });
          }
        }}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          lineHeight: 24,
          padding: { top: 8, bottom: 8 },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          wrappingStrategy: 'advanced',
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            verticalScrollbarSize: 16,
            horizontalScrollbarSize: 16,
          },
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          overviewRulerBorder: false,
          automaticLayout: true,
          tabSize: 2,
          quickSuggestions: false,
          renderWhitespace: 'none',
          contextmenu: true,
          folding: false,
          dragAndDrop: true,
          links: false,
          mouseWheelZoom: true,
          formatOnPaste: true,
          formatOnType: true
        }}
      />
    </div>
  );
} 