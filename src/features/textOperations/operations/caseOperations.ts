import { CaseType } from '../types'

export const convertCase = (text: string, type: CaseType): string => {
  switch (type) {
    case 'upper':
      return text.toUpperCase()
    case 'lower':
      return text.toLowerCase()
    case 'title':
      return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    case 'sentence':
      return text.replace(/(^\w|\.\s+\w)/g, (letter) => letter.toUpperCase())
    default:
      return text
  }
} 