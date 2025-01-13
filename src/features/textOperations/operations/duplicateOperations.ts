export const removeDuplicates = (text: string): string => {
  const lines = text.split('\n')
  const uniqueLines = [...new Set(lines)]
  return uniqueLines.join('\n')
} 