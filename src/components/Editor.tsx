import React from 'react';
import MonacoEditor from '@monaco-editor/react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor({ value, onChange }: EditorProps) {
  return (
    <div className="w-full h-[calc(100vh-16rem)] sm:h-[calc(100vh-18rem)]">
      <MonacoEditor
        height="100%"
        defaultLanguage="plaintext"
        value={value}
        onChange={(value) => onChange(value || '')}
        theme="light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineHeight: 24,
          padding: { top: 16, bottom: 16 },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          wrappingStrategy: 'advanced',
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            verticalScrollbarSize: 12,
            horizontalScrollbarSize: 12,
          },
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          overviewRulerBorder: false,
          automaticLayout: true,
          tabSize: 2,
          quickSuggestions: false,
          renderWhitespace: 'none',
          contextmenu: false,
          folding: false,
          dragAndDrop: false,
          links: false,
          mouseWheelZoom: true,
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
  );
} 