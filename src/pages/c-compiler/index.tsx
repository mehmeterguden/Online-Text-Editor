import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../../components/layout/Layout';
import Editor from '@monaco-editor/react';
import { Helmet } from 'react-helmet';
import { FiPlay, FiTrash2, FiCopy, FiRotateCcw, FiRotateCw, FiCheck, FiAlertCircle, FiDownload, FiUpload, FiCode, FiSearch, FiZoomIn, FiZoomOut, FiSend } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import JSCPP from 'JSCPP';

declare const TinyC: {
  compile: (code: string) => {
    success: boolean;
    output: string;
    error?: string;
  };
};

const defaultCode = `#include <stdio.h>

int main() {
    printf("Merhaba Dünya!\\n");
    return 0;
}`;

const compileWithCheerp = (code: string): Promise<{ success: boolean; output: string; error?: string }> => {
  return new Promise((resolve) => {
    try {
      // Değişken tanımlamalarını topla
      const variables: { [key: string]: any } = {};
      const variableDeclarations = code.match(/\b(?:int|float|char|double)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*;/g) || [];
      
      variableDeclarations.forEach(declaration => {
        const varName = declaration.match(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*;/)?.[1];
        if (varName) {
          variables[varName] = 0; // Varsayılan değer
        }
      });

      // C kodunu JavaScript'e dönüştürme
      let jsCode = code
        // Başlık dosyalarını kaldır
        .replace(/#include\s*<[^>]*>/g, '')
        // main fonksiyonunu özel bir fonksiyona dönüştür
        .replace(/int\s+main\s*\([^)]*\)\s*{/, '(async function() {')
        // return 0; ifadesini kaldır
        .replace(/return\s+0\s*;/, '')
        // Kapanış parantezini ekle
        .replace(/}(?!\))$/, '})();');

      // printf fonksiyonunu console.log'a dönüştür (format belirteçleri ile)
      jsCode = jsCode.replace(/printf\s*\(\s*("(?:[^"\\]|\\.)*")\s*(?:,\s*([^)]*))?\s*\)/g, (match, format, args) => {
        let str = format.slice(1, -1); // Tırnak işaretlerini kaldır
        
        // Format belirteçlerini işle
        if (args) {
          const argArray = args.split(',').map(arg => arg.trim());
          str = str.replace(/%d/g, () => `\${${argArray.shift() || ''}}`);
          str = str.replace(/%f/g, () => `\${${argArray.shift() || ''}}`);
          str = str.replace(/%c/g, () => `\${String.fromCharCode(${argArray.shift() || ''})}`);
          str = str.replace(/%s/g, () => `\${${argArray.shift() || ''}}`);
        }
        
        return `output.push(\`${str}\`)`;
      });

      // scanf fonksiyonunu async/await prompt'a dönüştür
      jsCode = jsCode.replace(/scanf\s*\(\s*"([^\"]+)"\s*,\s*&([^)]+)\)/g, (match, format, vars) => {
        const varArray = vars.split(',').map(v => v.trim());
        const formatArray = format.match(/%[dfs]/g) || [];
        
        let result = 'await new Promise(resolve => {';
        result += `setIsWaitingInput(true);`;
        result += `const handleInput = (input) => {`;
        result += `  setIsWaitingInput(false);`;
        
        formatArray.forEach((fmt, idx) => {
          const varName = varArray[idx];
          result += `  window.${varName} = input;`;
          switch (fmt) {
            case '%d':
              result += `  ${varName} = parseInt(input) || 0;`;
              break;
            case '%f':
              result += `  ${varName} = parseFloat(input) || 0.0;`;
              break;
            case '%s':
              result += `  ${varName} = input;`;
              break;
          }
        });
        
        result += `  output.push(\`Girdi: \${input}\`);`;
        result += `  resolve();`;
        result += `};`;
        result += `setProgramInputs(prev => [...prev, handleInput]);`;
        result += `});`;
        
        return result;
      });

      // Çıktıyı toplamak için dizi
      const output: string[] = [];
      
      // Hata yakalama için try-catch bloğu ekle
      jsCode = `
        try {
          const output = [];
          ${jsCode}
          return { success: true, output: output.join('\\n') };
        } catch (error) {
          return { 
            success: false, 
            output: '', 
            error: error.message || 'Program çalıştırılırken bir hata oluştu'
          };
        }
      `;

      // JavaScript kodunu çalıştırma
      const result = new Function('setIsWaitingInput', 'setProgramInputs', jsCode);
      const programResult = result(setIsWaitingInput, setProgramInputs);

      if (programResult.success) {
        resolve({ 
          success: true, 
          output: programResult.output 
        });
      } else {
        resolve({ 
          success: false, 
          output: '', 
          error: programResult.error 
        });
      }
    } catch (error) {
      resolve({ 
        success: false, 
        output: '', 
        error: error.message || 'Program derlenirken bir hata oluştu' 
      });
    }
  });
};

const CCompiler: React.FC = () => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [editor, setEditor] = useState<any>(null);
  const [monacoInstance, setMonacoInstance] = useState<any>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<'custom-light' | 'custom-dark'>(
    document.documentElement.classList.contains('dark') ? 'custom-dark' : 'custom-light'
  );
  const [editorWidth, setEditorWidth] = useState<number>(62.5); // 8/5 * 100 / 2
  const resizingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);
  const [fontSize, setFontSize] = useState(16);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userInput, setUserInput] = useState<string>('');
  const [isWaitingInput, setIsWaitingInput] = useState<boolean>(false);
  const [programInputs, setProgramInputs] = useState<Array<(input: string) => void>>([]);
  const [currentInputIndex, setCurrentInputIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    setEditor(editor);
    setMonacoInstance(monaco);

    // Özel tema renkleri tanımlama
    const defineThemes = () => {
      monaco.editor.defineTheme('custom-light', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '2563eb', fontStyle: 'bold' },        // primary-600
          { token: 'string', foreground: 'dc2626', fontStyle: 'italic' },       // red-600
          { token: 'number', foreground: '059669' },                            // emerald-600
          { token: 'comment', foreground: '6b7280', fontStyle: 'italic' },      // gray-500
          { token: 'type', foreground: '7c3aed' },                             // violet-600
          { token: 'function', foreground: 'ea580c' },                         // orange-600
          { token: 'variable', foreground: '0284c7' },                         // sky-600
          { token: 'operator', foreground: '4b5563' },                         // gray-600
          { token: 'preprocessor', foreground: 'c026d3' }                      // fuchsia-600
        ],
        colors: {
          'editor.background': '#f9fafb',                                      // gray-50
          'editor.foreground': '#111827',                                      // gray-900
          'editor.lineHighlightBackground': '#f3f4f6',                         // gray-100
          'editorLineNumber.foreground': '#9ca3af',                           // gray-400
          'editor.selectionBackground': '#bfdbfe',                            // blue-100
          'editor.inactiveSelectionBackground': '#e5e7eb',                    // gray-200
          'editorLineNumber.activeForeground': '#4b5563',                     // gray-600
          'editor.findMatchBackground': '#fef3c7',                            // amber-100
          'editor.findMatchHighlightBackground': '#fef9c3',                   // yellow-100
          'editorCursor.foreground': '#2563eb',                               // primary-600
          'editorWhitespace.foreground': '#e5e7eb',                          // gray-200
          'editorIndentGuide.background': '#e5e7eb'                          // gray-200
        }
      });

      monaco.editor.defineTheme('custom-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '60a5fa', fontStyle: 'bold' },      // blue-400
          { token: 'string', foreground: 'fca5a5' },                          // red-300
          { token: 'number', foreground: '6ee7b7' },                          // emerald-300
          { token: 'comment', foreground: '9ca3af', fontStyle: 'italic' },    // gray-400
          { token: 'type', foreground: 'a78bfa' },                           // violet-400
          { token: 'function', foreground: 'fb923c' },                       // orange-400
          { token: 'variable', foreground: '38bdf8' },                       // sky-400
          { token: 'operator', foreground: 'd1d5db' },                       // gray-300
          { token: 'preprocessor', foreground: 'e879f9' }                    // fuchsia-400
        ],
        colors: {
          'editor.background': '#1f2937',                                    // gray-800
          'editor.foreground': '#f9fafb',                                    // gray-50
          'editor.lineHighlightBackground': '#374151',                       // gray-700
          'editorLineNumber.foreground': '#9ca3af',                         // gray-400
          'editor.selectionBackground': '#3b82f6',                          // blue-500 with opacity
          'editor.inactiveSelectionBackground': '#4b5563',                  // gray-600
          'editorLineNumber.activeForeground': '#e5e7eb',                   // gray-200
          'editor.findMatchBackground': '#92400e',                          // amber-800
          'editor.findMatchHighlightBackground': '#854d0e',                 // yellow-800
          'editorCursor.foreground': '#60a5fa',                             // blue-400
          'editorWhitespace.foreground': '#4b5563',                        // gray-600
          'editorIndentGuide.background': '#4b5563'                        // gray-600
        }
      });
    };

    // Temaları tanımla
    defineThemes();

    // Temayı hemen uygula
    const isDark = document.documentElement.classList.contains('dark');
    const initialTheme = isDark ? 'custom-dark' : 'custom-light';
    setCurrentTheme(initialTheme);
    monaco.editor.setTheme(initialTheme);
    
    editor.updateOptions({
      readOnly: false,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      renderLineHighlight: 'all',
      lineNumbers: 'on',
      fontSize: 16,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',
      mouseWheelZoom: true,
      lineNumbersMinChars: 3,
      glyphMargin: false,
      folding: false,
      lineDecorationsWidth: 8,
      padding: { top: 8, bottom: 8 },
      theme: initialTheme
    });

    // CTRL + Scroll ile zoom özelliği
    editor.onMouseWheel((e: any) => {
      if (e.ctrlKey || e.metaKey) {
        const fontSize = editor.getOption(monaco.editor.EditorOption.fontSize);
        const delta = e.deltaY > 0 ? -2 : 2;
        const newSize = Math.min(Math.max(8, fontSize + delta), 30);
        editor.updateOptions({ 
          fontSize: newSize,
        });
        e.preventDefault();
        return false;
      }
    });

    editor.focus();
  };

  useEffect(() => {
    if (editor && monacoInstance) {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'custom-dark' : 'custom-light';
      
      // Temaları yeniden tanımla
      monacoInstance.editor.defineTheme('custom-light', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '2563eb', fontStyle: 'bold' },        // primary-600
          { token: 'string', foreground: 'dc2626', fontStyle: 'italic' },       // red-600
          { token: 'number', foreground: '059669' },                            // emerald-600
          { token: 'comment', foreground: '6b7280', fontStyle: 'italic' },      // gray-500
          { token: 'type', foreground: '7c3aed' },                             // violet-600
          { token: 'function', foreground: 'ea580c' },                         // orange-600
          { token: 'variable', foreground: '0284c7' },                         // sky-600
          { token: 'operator', foreground: '4b5563' },                         // gray-600
          { token: 'preprocessor', foreground: 'c026d3' }                      // fuchsia-600
        ],
        colors: {
          'editor.background': '#f9fafb',                                      // gray-50
          'editor.foreground': '#111827',                                      // gray-900
          'editor.lineHighlightBackground': '#f3f4f6',                         // gray-100
          'editorLineNumber.foreground': '#9ca3af',                           // gray-400
          'editor.selectionBackground': '#bfdbfe',                            // blue-100
          'editor.inactiveSelectionBackground': '#e5e7eb',                    // gray-200
          'editorLineNumber.activeForeground': '#4b5563',                     // gray-600
          'editor.findMatchBackground': '#fef3c7',                            // amber-100
          'editor.findMatchHighlightBackground': '#fef9c3',                   // yellow-100
          'editorCursor.foreground': '#2563eb',                               // primary-600
          'editorWhitespace.foreground': '#e5e7eb',                          // gray-200
          'editorIndentGuide.background': '#e5e7eb'                          // gray-200
        }
      });

      monacoInstance.editor.defineTheme('custom-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '60a5fa', fontStyle: 'bold' },      // blue-400
          { token: 'string', foreground: 'fca5a5' },                          // red-300
          { token: 'number', foreground: '6ee7b7' },                          // emerald-300
          { token: 'comment', foreground: '9ca3af', fontStyle: 'italic' },    // gray-400
          { token: 'type', foreground: 'a78bfa' },                           // violet-400
          { token: 'function', foreground: 'fb923c' },                       // orange-400
          { token: 'variable', foreground: '38bdf8' },                       // sky-400
          { token: 'operator', foreground: 'd1d5db' },                       // gray-300
          { token: 'preprocessor', foreground: 'e879f9' }                    // fuchsia-400
        ],
        colors: {
          'editor.background': '#1f2937',                                    // gray-800
          'editor.foreground': '#f9fafb',                                    // gray-50
          'editor.lineHighlightBackground': '#374151',                       // gray-700
          'editorLineNumber.foreground': '#9ca3af',                         // gray-400
          'editor.selectionBackground': '#3b82f6',                          // blue-500 with opacity
          'editor.inactiveSelectionBackground': '#4b5563',                  // gray-600
          'editorLineNumber.activeForeground': '#e5e7eb',                   // gray-200
          'editor.findMatchBackground': '#92400e',                          // amber-800
          'editor.findMatchHighlightBackground': '#854d0e',                 // yellow-800
          'editorCursor.foreground': '#60a5fa',                             // blue-400
          'editorWhitespace.foreground': '#4b5563',                        // gray-600
          'editorIndentGuide.background': '#4b5563'                        // gray-600
        }
      });

      // Temayı güncelle
      setCurrentTheme(newTheme);
      monacoInstance.editor.setTheme(newTheme);
      
      // Editör seçeneklerini güncelle
      editor.updateOptions({
        theme: newTheme
      });

      // Editörü yeniden oluştur
      editor.layout();
    }
  }, [theme, editor, monacoInstance]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleUserInput = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !programInputs[currentInputIndex]) return;

    const currentHandler = programInputs[currentInputIndex];
    currentHandler(userInput);
    
    setUserInput('');
    setCurrentInputIndex(prev => prev + 1);
  };

  const compileAndRun = async () => {
    setIsCompiling(true);
    setProgramInputs([]);
    setCurrentInputIndex(0);
    setIsWaitingInput(false);
    setOutput('Derleniyor...');

    try {
      const result = await compileWithCheerp(code);
      
      if (!result.success) {
        const errorMessage = result.error || 'Derleme hatası oluştu';
        setOutput(`Hata:\n${errorMessage}`);
        showNotification(errorMessage, 'error');
      } else {
        setOutput(result.output || 'Program başarıyla çalıştırıldı.');
        if (!result.output) {
          showNotification('Program başarıyla çalıştırıldı');
        }
      }
    } catch (error) {
      const errorMessage = error.message || 'Program çalıştırılırken bir hata oluştu';
      console.error('Derleme hatası:', error);
      setOutput(`Hata: ${errorMessage}`);
      showNotification(errorMessage, 'error');
    } finally {
      setIsCompiling(false);
    }
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
    showNotification('Kod ve çıktı temizlendi');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    showNotification('Kod kopyalandı');
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    showNotification('Çıktı kopyalandı');
  };

  const undo = () => {
    editor?.trigger('keyboard', 'undo');
  };

  const redo = () => {
    editor?.trigger('keyboard', 'redo');
  };

  const startResize = (e: React.MouseEvent) => {
    resizingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = editorWidth;
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResize);
  };

  const handleResize = (e: MouseEvent) => {
    if (!resizingRef.current) return;
    
    const containerWidth = document.querySelector('.c-compiler-container')?.clientWidth || 0;
    const delta = e.clientX - startXRef.current;
    const newWidth = startWidthRef.current + (delta / containerWidth * 100);
    
    // Minimum ve maximum genişlik sınırları
    const clampedWidth = Math.min(Math.max(30, newWidth), 70);
    setEditorWidth(clampedWidth);
  };

  const stopResize = () => {
    resizingRef.current = false;
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.c';
    a.click();
    window.URL.revokeObjectURL(url);
    showNotification('Kod dosyası indirildi');
  };

  const uploadCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCode(content);
        showNotification('Kod dosyası yüklendi');
      };
      reader.readAsText(file);
    }
  };

  const formatCode = () => {
    if (editor && monacoInstance) {
      editor.getAction('editor.action.formatDocument').run();
      showNotification('Kod formatlandı');
    }
  };

  const toggleSearch = () => {
    if (editor && monacoInstance) {
      editor.getAction('actions.find').run();
      setIsSearchOpen(!isSearchOpen);
    }
  };

  const increaseFont = () => {
    const newSize = Math.min(fontSize + 2, 30);
    setFontSize(newSize);
    editor?.updateOptions({ fontSize: newSize });
    showNotification('Font boyutu artırıldı');
  };

  const decreaseFont = () => {
    const newSize = Math.max(fontSize - 2, 8);
    setFontSize(newSize);
    editor?.updateOptions({ fontSize: newSize });
    showNotification('Font boyutu azaltıldı');
  };

  return (
    <Layout hideSettings>
      <Helmet>
        <title>Online C Compiler - Metin Editörü</title>
        <meta name="description" content="Ücretsiz online C derleyici. C kodlarınızı yazın ve çalıştırın." />
      </Helmet>
      
      <style>
        {`
          .c-compiler-container {
            width: 96vw;
            margin-left: calc(-48vw + 50%);
            margin-right: calc(-48vw + 50%);
          }
        `}
      </style>
      
      <div className="c-compiler-container py-4 px-4">
        <div className="max-w-[99%] mx-auto">
          <div className="mb-2">
            <h1 className="text-xl font-bold text-light-text dark:text-dark-text">Online C Compiler</h1>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mt-1">
              C kodunuzu yazın ve çalıştırın. Sonuçları anında görün.
            </p>
          </div>

          {/* Toolbar */}
          <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-t-lg p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={compileAndRun}
                disabled={isCompiling}
                className="flex items-center gap-2 px-3 py-1.5 bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover text-white dark:text-dark-bg rounded-md transition-colors duration-200 disabled:opacity-50"
              >
                <FiPlay className="w-4 h-4" />
                <span>{isCompiling ? 'Çalıştırılıyor...' : 'Çalıştır'}</span>
              </button>

              <button
                onClick={clearCode}
                className="flex items-center gap-2 px-3 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Temizle"
              >
                <FiTrash2 className="w-4 h-4" />
                <span>Temizle</span>
              </button>

              <button
                onClick={formatCode}
                className="flex items-center gap-2 px-3 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Kodu Formatla"
              >
                <FiCode className="w-4 h-4" />
                <span>Formatla</span>
              </button>

              <button
                onClick={downloadCode}
                className="flex items-center gap-2 px-3 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Kodu İndir"
              >
                <FiDownload className="w-4 h-4" />
                <span>İndir</span>
              </button>

              <div className="relative group">
                <label 
                  className="flex items-center gap-2 px-3 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200 cursor-pointer border border-dashed border-light-border dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400"
                  title="Kod Dosyası Yükle"
                >
                  <FiUpload className="w-4 h-4" />
                  <span>Dosyadan Yükle</span>
                  <input
                    type="file"
                    accept=".c,.txt"
                    onChange={uploadCode}
                    className="hidden"
                  />
                </label>
                <div className="absolute hidden group-hover:block bottom-full left-0 mb-2 px-2 py-1 text-xs text-light-text-secondary dark:text-dark-text-secondary bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded shadow-lg whitespace-nowrap">
                  .c ve .txt uzantılı dosyaları yükleyebilirsiniz
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSearch}
                className="flex items-center gap-2 px-2 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Ara (Ctrl+F)"
              >
                <FiSearch className="w-4 h-4" />
              </button>

              <button
                onClick={decreaseFont}
                className="flex items-center gap-2 px-2 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Font Boyutunu Küçült"
              >
                <FiZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={increaseFont}
                className="flex items-center gap-2 px-2 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Font Boyutunu Büyüt"
              >
                <FiZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={undo}
                className="flex items-center gap-2 px-2 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="Geri Al (Ctrl+Z)"
              >
                <FiRotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={redo}
                className="flex items-center gap-2 px-2 py-1.5 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                title="İleri Al (Ctrl+Y)"
              >
                <FiRotateCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex border border-t-0 border-light-border dark:border-dark-border rounded-b-lg overflow-hidden relative">
            {/* Editör Alanı */}
            <div style={{ width: `${editorWidth}%` }} className="border-r border-light-border dark:border-dark-border">
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border px-4 py-2 flex justify-between items-center">
                <h2 className="text-sm font-medium text-light-text dark:text-dark-text">Girdi:</h2>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 px-2 py-1 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                  title="Kodu Kopyala"
                >
                  <FiCopy className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-light-bg dark:bg-dark-bg">
                <Editor
                  height="calc(100vh - 280px)"
                  defaultLanguage="c"
                  value={code}
                  onChange={handleEditorChange}
                  onMount={handleEditorDidMount}
                  theme={currentTheme}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 8, bottom: 8 },
                    lineNumbers: 'on',
                    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',
                    mouseWheelZoom: true,
                    lineNumbersMinChars: 3,
                    glyphMargin: false,
                    folding: false,
                    lineDecorationsWidth: 8,
                    theme: currentTheme
                  }}
                />
              </div>
            </div>

            {/* Yeniden Boyutlandırma Çubuğu */}
            <div
              className="absolute h-full w-1 bg-gray-300 dark:bg-gray-600 cursor-col-resize hover:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
              style={{ left: `${editorWidth}%` }}
              onMouseDown={startResize}
            />

            {/* Çıktı Alanı */}
            <div style={{ width: `${100 - editorWidth}%` }}>
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border px-4 py-2 flex justify-between items-center">
                <h2 className="text-sm font-medium text-light-text dark:text-dark-text">Çıktı:</h2>
                <button
                  onClick={copyOutput}
                  className="flex items-center gap-1 px-2 py-1 text-light-text dark:text-dark-text hover:bg-light-accent-bg dark:hover:bg-dark-accent-bg rounded-md transition-colors duration-200"
                  title="Çıktıyı Kopyala"
                >
                  <FiCopy className="w-4 h-4" />
                </button>
              </div>
              <div className="h-[calc(100vh-280px)] p-4 overflow-auto flex flex-col bg-light-bg dark:bg-dark-bg">
                <pre className="font-mono text-base whitespace-pre-wrap text-light-text dark:text-dark-text flex-grow">
                  {output || 'Program çıktısı burada görüntülenecek...'}
                </pre>
                
                {isWaitingInput && (
                  <form onSubmit={handleUserInput} className="mt-4 flex gap-2 items-center border-t border-light-border dark:border-dark-border pt-4">
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-grow bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text px-3 py-2 rounded-md border border-light-border dark:border-dark-border focus:border-primary-500 focus:outline-none"
                      placeholder="Program girdi bekliyor..."
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors"
                      disabled={!userInput.trim()}
                    >
                      <FiSend className="w-4 h-4" />
                      <span>Gönder</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bildirim */}
      {notification && (
        <div className={`fixed bottom-4 left-4 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {notification.type === 'success' ? (
            <FiCheck className="w-5 h-5" />
          ) : (
            <FiAlertCircle className="w-5 h-5" />
          )}
          <span>{notification.message}</span>
        </div>
      )}
    </Layout>
  );
};

export default CCompiler; 