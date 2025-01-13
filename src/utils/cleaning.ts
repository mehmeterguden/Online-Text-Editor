import { CleaningFeature } from '@/types/cleaning'

// Temel temizleme fonksiyonları
export const removeTabCharacters = (text: string): string => {
  return text.replace(/\t/g, ' ').replace(/[ ]{2,}/g, ' ')
}

export const mergeConsecutiveEmptyLines = (text: string): string => {
  return text.replace(/\n\s*\n\s*\n/g, '\n\n')
}

export const removeLineEndPunctuation = (text: string): string => {
  return text.replace(/[.,!?;:]\s*$/gm, '')
}

export const removeEmptyLines = (text: string): string => {
  return text.split('\n').filter(line => line.trim() !== '').join('\n')
}

export const removeBulletPoints = (text: string): string => {
  return text.replace(/^[\s]*[-•*+]\s*/gm, '')
}

export const removeCSSStyles = (text: string): string => {
  return text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
}

export const removeScriptTags = (text: string): string => {
  return text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
}

export const removeUppercaseLines = (text: string): string => {
  return text.split('\n')
    .filter(line => !/^[A-Z\s]+$/.test(line.trim()))
    .join('\n')
}

export const removeLowercaseLines = (text: string): string => {
  return text.split('\n')
    .filter(line => !/^[a-z\s]+$/.test(line.trim()))
    .join('\n')
}

// Temizleme özellikleri
export const cleaningFeatures: CleaningFeature[] = [
  {
    id: 'removeTabCharacters',
    name: 'Tab karakterlerini sil',
    description: 'Metindeki tüm tab karakterlerini siler',
    category: 'basic',
    subCategory: 'space',
    isActive: true,
    execute: removeTabCharacters
  },
  {
    id: 'mergeConsecutiveEmptyLines',
    name: 'Ardışık boş satırları birleştir',
    description: 'Ardışık boş satırları tek bir boş satıra dönüştürür',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    execute: mergeConsecutiveEmptyLines
  },
  {
    id: 'removeLineEndPunctuation',
    name: 'Satır sonu noktalama sil',
    description: 'Satır sonlarındaki noktalama işaretlerini siler',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    execute: removeLineEndPunctuation
  },
  {
    id: 'removeEmptyLines',
    name: 'Boş satırları sil',
    description: 'Tüm boş satırları ve sadece boşluk içeren satırları siler',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    execute: removeEmptyLines
  },
  {
    id: 'removeBulletPoints',
    name: 'Liste işaretlerini sil',
    description: 'Satır başındaki liste işaretlerini siler',
    category: 'content',
    isActive: true,
    execute: removeBulletPoints
  },
  {
    id: 'removeCSSStyles',
    name: 'CSS stillerini sil',
    description: 'HTML içindeki style etiketlerini ve içeriğini siler',
    category: 'content',
    isActive: true,
    execute: removeCSSStyles
  },
  {
    id: 'removeScriptTags',
    name: 'Script kodlarını sil',
    description: 'HTML içindeki script etiketlerini ve içeriğini siler',
    category: 'content',
    isActive: true,
    execute: removeScriptTags
  },
  {
    id: 'removeUppercaseLines',
    name: 'Büyük harfli satırları sil',
    description: 'Sadece büyük harf içeren satırları siler',
    category: 'content',
    isActive: true,
    execute: removeUppercaseLines
  },
  {
    id: 'removeLowercaseLines',
    name: 'Küçük harfli satırları sil',
    description: 'Sadece küçük harf içeren satırları siler',
    category: 'content',
    isActive: true,
    execute: removeLowercaseLines
  }
] 