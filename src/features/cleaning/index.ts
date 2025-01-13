import { CleaningFeature } from '@/types/cleaning'
import { spaceCleaningFeatures } from './basic/spaceCleaners'
import { lineCleaningFeatures } from './basic/lineCleaners'
import { characterCleaningFeatures } from './character/characterCleaners'
import { contentCleaningFeatures } from './content/contentCleaners'
import { formattingCleaningFeatures } from './formatting/formattingCleaners'
import { patternCleaningFeatures } from './pattern/patternCleaners'

// Tüm temizleme özelliklerini birleştir
export const allCleaningFeatures = [
  ...spaceCleaningFeatures,
  ...lineCleaningFeatures,
  ...characterCleaningFeatures,
  ...contentCleaningFeatures,
  ...formattingCleaningFeatures,
  ...patternCleaningFeatures
]

// Kategori bazında özellikleri getir
export const getFeaturesByCategory = (category: string): CleaningFeature[] => {
  return allCleaningFeatures.filter(feature => feature.category === category)
}

// ID'ye göre özellik getir
export const getFeatureById = (id: string): CleaningFeature | undefined => {
  return allCleaningFeatures.find(feature => feature.id === id)
}

export * from './types'
export * from './basic/spaceCleaners'
export * from './basic/lineCleaners'
export * from './character/characterCleaners'
export * from './content/contentCleaners'
export * from './formatting/formattingCleaners'
export * from './pattern/patternCleaners' 