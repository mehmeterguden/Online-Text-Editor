export interface CleaningFeature {
  id: string
  name: string
  description: string
  category: CleaningCategory
  isActive: boolean
  icon: string
  action: (text: string) => string
}

export type CleaningCategory = 
  | 'basic'
  | 'character'
  | 'content' 
  | 'formatting'
  | 'pattern'

export interface BasicCleaningFeature extends CleaningFeature {
  category: 'basic'
  subCategory: 'space' | 'line'
}

export interface CharacterCleaningFeature extends CleaningFeature {
  category: 'character'
  preserveContent?: boolean
}

export interface ContentCleaningFeature extends CleaningFeature {
  category: 'content'
  keepStructure?: boolean
}

export interface FormattingCleaningFeature extends CleaningFeature {
  category: 'formatting'
  preserveIndentation?: boolean
}

export interface PatternCleaningFeature extends CleaningFeature {
  category: 'pattern'
  regex: RegExp
}

export interface CleaningState {
  features: CleaningFeature[]
  activeFeatures: string[]
} 