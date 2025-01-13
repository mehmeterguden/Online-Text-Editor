import { FC, useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { FiSearch, FiEdit2, FiRefreshCw, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import debounce from 'lodash/debounce'

interface SearchReplaceProps {
  text: string
  onTextChange: (text: string) => void
  onHighlight?: (match: SearchMatch | null, editor?: any) => void
}

interface SearchOptions {
  caseSensitive: boolean
  wholeWord: boolean
  regex: boolean
}

interface SearchMatch {
  start: number
  end: number
  text: string
}

export const SearchReplace: FC<SearchReplaceProps> = ({ text, onTextChange, onHighlight }) => {
  const [searchText, setSearchText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [currentMatch, setCurrentMatch] = useState<SearchMatch | null>(null)
  const [currentMatchIndex, setCurrentMatchIndex] = useState<number>(0)
  const [matches, setMatches] = useState<SearchMatch[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [options, setOptions] = useState<SearchOptions>({
    caseSensitive: false,
    wholeWord: false,
    regex: false
  })
  const [error, setError] = useState<string>('')

  // Input değerini güncelle
  useEffect(() => {
    if (matches.length > 0) {
      setInputValue((currentMatchIndex + 1).toString());
    } else {
      setInputValue('');
    }
  }, [currentMatchIndex, matches.length]);

  // Regex oluşturmayı memoize et
  const searchRegex = useMemo(() => {
    if (!searchText) return null
    try {
      let pattern = options.regex ? searchText : searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      if (options.wholeWord) {
        pattern = `\\b${pattern}\\b`
      }
      const flags = `g${options.caseSensitive ? '' : 'i'}`
      const regex = new RegExp(pattern, flags)
      setError('')
      return regex
    } catch (error) {
      setError('Geçersiz arama deseni')
      return null
    }
  }, [searchText, options])

  // Eşleşmeleri bul
  const findMatches = useCallback(() => {
    if (!searchRegex || !searchText) {
      setMatches([])
      setCurrentMatch(null)
      setCurrentMatchIndex(0)
      if (onHighlight) onHighlight(null)
      return
    }

    const newMatches: SearchMatch[] = []
    let match
    while ((match = searchRegex.exec(text)) !== null) {
      newMatches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0]
      })
    }
    
    setMatches(newMatches)
    if (newMatches.length > 0) {
      const newMatch = newMatches[currentMatchIndex] || newMatches[0]
      setCurrentMatch(newMatch)
      if (onHighlight) onHighlight(newMatch)
    } else {
      setCurrentMatch(null)
      if (onHighlight) onHighlight(null)
    }
  }, [searchRegex, searchText, text, currentMatchIndex, onHighlight])

  // Arama işlemini debounce et
  const debouncedSearch = useMemo(
    () => debounce(findMatches, 300),
    [findMatches]
  )

  // Arama işlemi
  const handleSearch = useCallback(() => {
    debouncedSearch()
  }, [debouncedSearch])

  // Sonraki eşleşmeye git
  const handleNextMatch = useCallback(() => {
    if (matches.length === 0) return
    const nextIndex = (currentMatchIndex + 1) % matches.length
    setCurrentMatchIndex(nextIndex)
    setCurrentMatch(matches[nextIndex])
    if (onHighlight) onHighlight(matches[nextIndex])
  }, [matches, currentMatchIndex, onHighlight])

  // Önceki eşleşmeye git
  const handlePrevMatch = useCallback(() => {
    if (matches.length === 0) return
    const prevIndex = (currentMatchIndex - 1 + matches.length) % matches.length
    setCurrentMatchIndex(prevIndex)
    setCurrentMatch(matches[prevIndex])
    if (onHighlight) onHighlight(matches[prevIndex])
  }, [matches, currentMatchIndex, onHighlight])

  // İlk eşleşmeyi değiştir
  const handleReplace = useCallback(() => {
    if (!currentMatch) return

    const before = text.slice(0, currentMatch.start)
    const after = text.slice(currentMatch.end)
    const newText = before + replaceText + after

    onTextChange(newText)
    
    // Değişiklikten sonra eşleşmeleri güncelle
    debouncedSearch()
  }, [currentMatch, text, replaceText, onTextChange, debouncedSearch])

  // Tüm eşleşmeleri değiştir
  const handleReplaceAll = useCallback(() => {
    if (!searchRegex || !searchText) return

    const newText = text.replace(searchRegex, replaceText)
    if (newText !== text) {
      onTextChange(newText)
      setMatches([])
      setCurrentMatch(null)
      setCurrentMatchIndex(0)
      if (onHighlight) onHighlight(null)
    }
  }, [searchRegex, searchText, text, replaceText, onTextChange, onHighlight])

  // Arama metni değiştiğinde otomatik ara
  const handleSearchTextChange = useCallback((value: string) => {
    setSearchText(value)
    setCurrentMatchIndex(0)
    debouncedSearch()
  }, [debouncedSearch])

  // Seçenekler değiştiğinde aramayı tekrarla
  useEffect(() => {
    debouncedSearch()
  }, [options, debouncedSearch])

  return (
    <div className="w-1-4 pl inline-block">
      <div className="card-base p-4">
        <div className="grid gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Arama Metni</label>
              <div className="relative">
                <textarea
                  value={searchText}
                  onChange={(e) => handleSearchTextChange(e.target.value)}
                  className="input w-full pl-10 pr-4 py-2 min-h-[80px] border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-y"
                  placeholder="Aramak istediğiniz metni girin..."
                />
                <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              </div>
              {error && (
                <div className="mt-1 text-sm text-red-500">
                  {error}
                </div>
              )}
              {matches.length > 0 && (
                <div className="mt-1 text-sm text-gray-500 flex items-center gap-2">
                  <span>{matches.length} eşleşme bulundu</span>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      min="1"
                      max={matches.length}
                      value={inputValue || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        setInputValue(value);
                        
                        if (value === '') return;
                        
                        const num = parseInt(value);
                        if (num >= 1 && num <= matches.length) {
                          const newIndex = num - 1;
                          setCurrentMatchIndex(newIndex);
                          setCurrentMatch(matches[newIndex]);
                          if (onHighlight) onHighlight(matches[newIndex]);
                        }
                      }}
                      onBlur={() => {
                        // Input'tan çıkıldığında geçerli değeri göster
                        setInputValue((currentMatchIndex + 1).toString());
                      }}
                      style={{ width: `${Math.max(3, matches.length.toString().length + 2)}ch`, textAlign: 'center' }}
                      className="h-5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 px-1"
                    />
                    <span>/</span>
                    <span>{matches.length}</span>
                  </div>
                  <button
                    onClick={handlePrevMatch}
                    disabled={matches.length === 0}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    title="Önceki eşleşme"
                  >
                    <FiChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextMatch}
                    disabled={matches.length === 0}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    title="Sonraki eşleşme"
                  >
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Değiştirme Metni</label>
              <div className="relative">
                <textarea
                  value={replaceText}
                  onChange={(e) => setReplaceText(e.target.value)}
                  className="input w-full pl-10 pr-4 py-2 min-h-[80px] border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-y"
                  placeholder="Değiştirmek istediğiniz metni girin..."
                />
                <FiEdit2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                checked={options.caseSensitive}
                onChange={(e) => setOptions({ ...options, caseSensitive: e.target.checked })}
                className="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded border-gray-300 dark:border-gray-600"
              />
              Büyük/küçük harf duyarlı
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                checked={options.wholeWord}
                onChange={(e) => setOptions({ ...options, wholeWord: e.target.checked })}
                className="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded border-gray-300 dark:border-gray-600"
              />
              Tam kelime
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                checked={options.regex}
                onChange={(e) => setOptions({ ...options, regex: e.target.checked })}
                className="form-checkbox h-4 w-4 text-blue-500 dark:text-blue-400 rounded border-gray-300 dark:border-gray-600"
              />
              Regex kullan
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={handleSearch}
              disabled={!searchText}
              className={`btn btn-primary px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 ${!searchText ? 'opacity-50 cursor-not-allowed' : ''}`}
              data-tip="Metinde ara"
            >
              <FiSearch className="w-4 h-4" />
              Bul ({matches.length})
            </button>
            <button
              onClick={handleReplace}
              disabled={!currentMatch}
              className={`btn btn-secondary px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 ${!currentMatch ? 'opacity-50 cursor-not-allowed' : ''}`}
              data-tip="Bulunan ilk eşleşmeyi değiştir"
            >
              <FiEdit2 className="w-4 h-4" />
              Değiştir
            </button>
            <button
              onClick={handleReplaceAll}
              disabled={matches.length === 0}
              className={`btn btn-ghost px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 border border-light-border dark:border-dark-border hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary flex items-center gap-2 ${matches.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              data-tip="Bulunan tüm eşleşmeleri değiştir"
            >
              <FiRefreshCw className="w-4 h-4" />
              Tümünü Değiştir ({matches.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 