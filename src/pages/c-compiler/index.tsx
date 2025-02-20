import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../../components/layout/Layout';
import Editor from '@monaco-editor/react';
import { Helmet } from 'react-helmet';
import { FiPlay, FiTrash2, FiCopy, FiRotateCcw, FiRotateCw, FiCheck, FiAlertCircle, FiDownload, FiUpload, FiCode, FiSearch, FiZoomIn, FiZoomOut, FiSend } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

const defaultCode = `#include <stdio.h>

int main() {
    printf("Merhaba Dünya!\\n");
    return 0;
}`;

const CCompiler: React.FC = () => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [editor, setEditor] = useState<any>(null);
  const [monacoInstance, setMonacoInstance] = useState<any>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { theme } = useTheme();
  const [editorWidth, setEditorWidth] = useState<number>(62.5); // 8/5 * 100 / 2
  const resizingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);
  const [fontSize, setFontSize] = useState(16);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userInput, setUserInput] = useState<string>('');
  const [isWaitingInput, setIsWaitingInput] = useState<boolean>(false);
  const [programInputs, setProgramInputs] = useState<string[]>([]);
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
    monaco.editor.defineTheme('custom-light', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#28293e',
        'editor.foreground': '#E5E7EB',
        'editor.lineHighlightBackground': '#373951',
        'editorLineNumber.foreground': '#9CA3AF',
        'editor.selectionBackground': '#60a5fa40',
        'editor.inactiveSelectionBackground': '#60a5fa20',
        'editorLineNumber.activeForeground': '#E5E7EB',
      }
    });

    monaco.editor.defineTheme('custom-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#28293e',
        'editor.foreground': '#E5E7EB',
        'editor.lineHighlightBackground': '#373951',
        'editorLineNumber.foreground': '#9CA3AF',
        'editor.selectionBackground': '#3B82F640',
        'editor.inactiveSelectionBackground': '#3B82F620',
        'editorLineNumber.activeForeground': '#E5E7EB',
      }
    });

    // Temayı hemen uygula
    monaco.editor.setTheme('custom-dark');
    
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
      // Temayı uygula
      monacoInstance.editor.setTheme(document.documentElement.classList.contains('dark') ? 'custom-dark' : 'custom-light');
    }
  }, [theme, editor, monacoInstance]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const compileAndRun = async () => {
    setIsCompiling(true);
    setProgramInputs([]);
    setCurrentInputIndex(0);
    setIsWaitingInput(false);
    try {
      let simulatedOutput = '';
      const lines = code.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // scanf fonksiyonu kontrolü
        if (line.includes('scanf')) {
          setIsWaitingInput(true);
          setOutput(simulatedOutput + '\nProgram girdi bekliyor...');
          return;
        }
        
        // printf fonksiyonu kontrolü
        if (line.includes('printf')) {
          const printfRegex = /printf\s*\(\s*"([^"]*)"\s*\)/g;
          let match;
          while ((match = printfRegex.exec(line)) !== null) {
            simulatedOutput += match[1].replace('\\n', '\n');
          }
        }
      }

      setOutput(simulatedOutput || 'Program çalıştırıldı.');
      showNotification('Program başarıyla çalıştırıldı');
    } catch (error) {
      setOutput('Hata: Program çalıştırılamadı.');
      showNotification('Program çalıştırılırken bir hata oluştu', 'error');
    } finally {
      setIsCompiling(false);
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newInputs = [...programInputs, userInput];
    setProgramInputs(newInputs);
    setCurrentInputIndex(prev => prev + 1);

    let simulatedOutput = output;
    simulatedOutput += `\n${userInput}`; // Kullanıcı girdisini göster

    // scanf sonrası printf varsa onu işle
    const lines = code.split('\n');
    let foundScanf = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('scanf')) {
        foundScanf = true;
        continue;
      }
      
      if (foundScanf && line.includes('printf')) {
        const printfRegex = /printf\s*\(\s*"([^"]*)"\s*\)/g;
        let match;
        while ((match = printfRegex.exec(line)) !== null) {
          simulatedOutput += match[1].replace('\\n', '\n');
        }
        
        // Sonraki scanf'i kontrol et
        const remainingLines = lines.slice(i + 1);
        const hasMoreScanf = remainingLines.some(line => line.includes('scanf'));
        
        if (hasMoreScanf) {
          simulatedOutput += '\nProgram girdi bekliyor...';
          setOutput(simulatedOutput);
          setUserInput('');
          return;
        }
      }
    }

    setOutput(simulatedOutput);
    setIsWaitingInput(false);
    setUserInput('');
    showNotification('Girdi işlendi');
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
              <div style={{ backgroundColor: '#28293e' }} className="h-[calc(100vh-280px)] p-4 overflow-auto flex flex-col">
                <pre className="font-mono text-base whitespace-pre-wrap text-gray-100 flex-grow">
                  {output || 'Program çıktısı burada görüntülenecek...'}
                </pre>
                
                {isWaitingInput && (
                  <form onSubmit={handleUserInput} className="mt-4 flex gap-2 items-center border-t border-gray-700 pt-4">
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-grow bg-[#373951] text-gray-100 px-3 py-2 rounded-md border border-gray-600 focus:border-primary-500 focus:outline-none"
                      placeholder="Program girdi bekliyor..."
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors"
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