export const addLineNumbers = (text: string): string => {
  const lines = text.split('\n')
  return lines.map((line, index) => `${index + 1}. ${line}`).join('\n')
}

export const addPrefix = (text: string, prefix: string): string => {
  const lines = text.split('\n')
  return lines.map(line => `${prefix}${line}`).join('\n')
}

export const addSuffix = (text: string, suffix: string): string => {
  const lines = text.split('\n')
  return lines.map(line => `${line}${suffix}`).join('\n')
} 