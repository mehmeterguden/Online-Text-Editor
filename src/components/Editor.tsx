import React from 'react';
import MonacoEditor from '@monaco-editor/react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor({ value, onChange }: EditorProps) {
  return (
    <div className="w-full h-[calc(100vh-8rem)]">
      <MonacoEditor
        height="100%"
        defaultLanguage="plaintext"
        value={value}
        onChange={(value) => onChange(value || '')}
        theme="light"
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
          formatOnType: true,
          fontSize: {
            mobile: 16,
            tablet: 14,
            desktop: 14
          }
        }}
      />
    </div>
  );
} 