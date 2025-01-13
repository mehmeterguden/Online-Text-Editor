export type SortType = 'asc' | 'desc' | 'length-asc' | 'length-desc' | 'random'

export const sortLines = (text: string, type: SortType): string => {
  const lines = text.split('\n')
  let sortedLines: string[]

  switch (type) {
    case 'asc':
      sortedLines = lines.sort((a, b) => a.localeCompare(b, 'tr'))
      break
    case 'desc':
      sortedLines = lines.sort((a, b) => b.localeCompare(a, 'tr'))
      break
    case 'length-asc':
      sortedLines = lines.sort((a, b) => a.length - b.length)
      break
    case 'length-desc':
      sortedLines = lines.sort((a, b) => b.length - a.length)
      break
    case 'random':
      sortedLines = lines.sort(() => Math.random() - 0.5)
      break
    default:
      sortedLines = lines
  }

  return sortedLines.join('\n')
} 