import { FiFilter } from 'react-icons/fi'
import { PatternCleaningFeature } from '../types'

export const patternCleaningFeatures: PatternCleaningFeature[] = [
  {
    id: 'dates',
    name: 'Tarih formatındakileri sil',
    description: 'Tarih formatındaki metinleri siler.',
    category: 'pattern',
    isActive: true,
    icon: FiFilter.name,
    regex: /\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}|\d{4}[\/.-]\d{1,2}[\/.-]\d{1,2}/g,
    action: (text: string) => {
      return text.replace(/\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}|\d{4}[\/.-]\d{1,2}[\/.-]\d{1,2}/g, '')
    }
  },
  {
    id: 'numeric-lines',
    name: 'Sayısal satırları sil',
    description: 'Sayısal satırları siler.',
    category: 'pattern',
    isActive: true,
    icon: FiFilter.name,
    regex: /^\s*[\d\s,.]+\s*$/gm,
    action: (text: string) => {
      return text
        .split('\n')
        .filter(line => {
          // Remove lines that contain only numbers, spaces, commas, and dots
          return !(/^\s*[\d\s,.]+\s*$/.test(line))
        })
        .join('\n')
    }
  },
  {
    id: 'alpha-lines',
    name: 'Alfabetik satırları sil',
    description: 'Alfabetik satırları siler.',
    category: 'pattern',
    isActive: true,
    icon: FiFilter.name,
    regex: /^[A-Za-zğüşıöçĞÜŞİÖÇ\s]+$/gm,
    action: (text: string) => {
      return text
        .split('\n')
        .filter(line => {
          // Remove lines that contain only letters and spaces
          return !(/^[A-Za-zğüşıöçĞÜŞİÖÇ\s]+$/.test(line))
        })
        .join('\n')
    }
  },
  {
    id: 'uppercase-lines',
    name: 'Büyük harfli satırları sil',
    description: 'Büyük harfli satırları siler.',
    category: 'pattern',
    isActive: true,
    icon: FiFilter.name,
    regex: /^[A-ZĞÜŞİÖÇ\s]+$/gm,
    action: (text: string) => {
      return text
        .split('\n')
        .filter(line => {
          // Remove lines that contain only uppercase letters and spaces
          const trimmed = line.trim()
          if (!trimmed) return true
          return !(/^[A-ZĞÜŞİÖÇ\s]+$/.test(trimmed))
        })
        .join('\n')
    }
  },
  {
    id: 'lowercase-lines',
    name: 'Küçük harfli satırları sil',
    description: 'Küçük harfli satırları siler.',
    category: 'pattern',
    isActive: true,
    icon: FiFilter.name,
    regex: /^[a-zğüşıöç\s]+$/gm,
    action: (text: string) => {
      return text
        .split('\n')
        .filter(line => {
          // Remove lines that contain only lowercase letters and spaces
          const trimmed = line.trim()
          if (!trimmed) return true
          return !(/^[a-zğüşıöç\s]+$/.test(trimmed))
        })
        .join('\n')
    }
  }
] 