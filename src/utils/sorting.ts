// Sıralama fonksiyonları
export const sortLines = (text: string, type: 'asc' | 'desc' | 'length' | 'random'): string => {
  // Boş metin kontrolü
  if (!text.trim()) return text

  const lines = text.split('\n')
  const nonEmptyLines = lines.filter(line => line.trim() !== '')
  const emptyLines = lines.filter(line => line.trim() === '')

  let sortedLines: string[]
  
  switch (type) {
    case 'asc':
      sortedLines = nonEmptyLines.sort((a, b) => a.trim().localeCompare(b.trim()))
      break
    case 'desc':
      sortedLines = nonEmptyLines.sort((a, b) => b.trim().localeCompare(a.trim()))
      break
    case 'length':
      sortedLines = nonEmptyLines.sort((a, b) => {
        const aLen = a.trim().length
        const bLen = b.trim().length
        return bLen - aLen || a.trim().localeCompare(b.trim()) // Eşit uzunlukta ise alfabetik sırala
      })
      break
    case 'random':
      // Fisher-Yates shuffle algoritması
      sortedLines = [...nonEmptyLines]
      for (let i = sortedLines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sortedLines[i], sortedLines[j]] = [sortedLines[j], sortedLines[i]]
      }
      break
    default:
      return text
  }

  // Boş satırları en sona ekle
  return [...sortedLines, ...emptyLines].join('\n')
} 