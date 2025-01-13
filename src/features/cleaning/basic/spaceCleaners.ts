import { FiDelete } from 'react-icons/fi'
import { BasicCleaningFeature } from '../types'

export const spaceCleaningFeatures: BasicCleaningFeature[] = [
  {
    id: 'empty-lines',
    name: 'Boş satırları sil',
    description: 'Metindeki tüm boş satırları siler. Sadece boş satırlar silinir, içeriği olan satırlar korunur.',
    category: 'basic',
    subCategory: 'space',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      if (!text) return text;
      
      // Split text into lines and remove empty ones
      const lines = text.split('\n');
      const nonEmptyLines = lines.filter(line => line.trim() !== '');
      
      // If there are no non-empty lines, return empty string
      if (nonEmptyLines.length === 0) return '';
      
      // Join non-empty lines with newline
      return nonEmptyLines.join('\n');
    }
  },
  {
    id: 'extra-spaces',
    name: 'Fazla boşlukları sil',
    description: 'Ardışık boşlukları tek boşluğa dönüştürür.',
    category: 'basic',
    subCategory: 'space',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      console.log('Removing extra spaces from:', text)
      const result = text.replace(/\s+/g, ' ')
      console.log('Result:', result)
      return result
    }
  },
  {
    id: 'trim-lines',
    name: 'Satır başı/sonu boşlukları sil',
    description: 'Her satırın başındaki ve sonundaki boşlukları temizler.',
    category: 'basic',
    subCategory: 'space',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      console.log('Trimming lines from:', text)
      const lines = text.split('\n')
      const trimmedLines = lines.map(line => line.trim())
      const result = trimmedLines.join('\n')
      console.log('Result:', result)
      return result
    }
  },
  {
    id: 'tabs',
    name: 'Tab karakterlerini sil',
    description: 'Metindeki tüm tab karakterlerini siler.',
    category: 'basic',
    subCategory: 'space',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      console.log('Removing tabs from:', text)
      const result = text.replace(/\t/g, '')
      console.log('Result:', result)
      return result
    }
  },
  {
    id: 'all-spaces',
    name: 'Tüm boşlukları sil',
    description: 'Metindeki tüm boşlukları siler.',
    category: 'basic',
    subCategory: 'space',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      console.log('Removing all spaces from:', text)
      const result = text.replace(/\s/g, '')
      console.log('Result:', result)
      return result
    }
  }
] 