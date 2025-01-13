import { ReactNode } from 'react'

export type CleaningCategory = 'basic' | 'character' | 'content' | 'formatting' | 'pattern'
export type SubCategory = 'space' | 'line'

export interface CleaningFeature {
  id: string
  name: string
  description: string
  category: string
  subCategory?: string
  isActive: boolean
  icon?: JSX.Element
  execute: (text: string) => string
}

export interface BasicCleaningFeature extends CleaningFeature {
  subCategory: SubCategory
}

export interface CharacterCleaningFeature extends CleaningFeature {
  preserveContent: boolean
}

export interface ContentCleaningFeature extends CleaningFeature {
  keepStructure: boolean
}

export interface FormattingCleaningFeature extends CleaningFeature {
  preserveIndentation: boolean
}

export interface PatternCleaningFeature extends CleaningFeature {
  regex: RegExp
}

export interface CleaningToolsProps {
  onCleanText: (featureId: string) => void
  text: string
} 