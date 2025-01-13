import { FiDelete, FiX, FiCode, FiFileText, FiFilter } from 'react-icons/fi'
import { CleaningCategory } from '@/types/cleaning'

export const CLEANING_CATEGORIES: CleaningCategory[] = [
  'basic',
  'character',
  'content',
  'formatting',
  'pattern'
]

export const CATEGORY_TITLES = {
  basic: 'TEMEL METİN TEMİZLEME',
  character: 'KARAKTER',
  content: 'İÇERİK',
  formatting: 'FORMAT',
  pattern: 'PATTERN'
}

export const CATEGORY_ICONS = {
  basic: FiDelete,
  character: FiX,
  content: FiCode,
  formatting: FiFileText,
  pattern: FiFilter
}

export const SUB_CATEGORIES = {
  basic: ['space', 'line']
}

export const SUB_CATEGORY_TITLES = {
  space: 'Boşluk Temizleme',
  line: 'Satır Temizleme'
} 