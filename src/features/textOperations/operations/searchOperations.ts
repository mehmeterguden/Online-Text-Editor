export interface SearchOptions {
  caseSensitive?: boolean
  wholeWord?: boolean
  regex?: boolean
}

export const searchAndReplace = (
  text: string,
  searchText: string,
  replaceText: string,
  options: SearchOptions = {}
): string => {
  if (!searchText) return text

  try {
    let flags = 'g'
    if (!options.caseSensitive) flags += 'i'

    let searchPattern = searchText
    if (!options.regex) {
      searchPattern = searchPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }
    
    if (options.wholeWord) {
      searchPattern = `\\b${searchPattern}\\b`
    }

    const regex = new RegExp(searchPattern, flags)
    return text.replace(regex, replaceText)
  } catch (error) {
    console.error('Arama/değiştirme işlemi sırasında hata:', error)
    return text
  }
} 