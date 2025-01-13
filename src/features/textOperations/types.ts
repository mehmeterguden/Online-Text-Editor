export type CaseType = 'upper' | 'lower' | 'title' | 'sentence'

export interface TextOperations {
  convertCase: (type: CaseType) => void
  sortLines: (ascending: boolean) => void
  convertCharacters: (type: 'turkishToEnglish' | 'englishToTurkish') => void
  urlEncodeDecode: (type: 'encode' | 'decode') => void
  addLineNumbers: () => void
  addPrefix: (prefix: string) => void
  addSuffix: (suffix: string) => void
} 