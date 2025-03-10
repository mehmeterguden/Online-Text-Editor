import { memo } from 'react'
import { CaseTools } from './components/CaseTools'
import { CleaningTools } from './components/CleaningTools'
import { SortingTools } from './components/SortingTools'
import { CharacterTools } from './components/CharacterTools'
import { URLTools } from './components/URLTools'
import { LineTools } from './components/LineTools'

interface ToolbarProps {
  onConvertCase: (type: 'upper' | 'lower' | 'title' | 'sentence') => void
  onSortLines: (type: 'asc' | 'desc' | 'length' | 'random') => void
  onConvertCharacters: (type: 'tr-en' | 'en-tr') => void
  onUrlEncodeDecode: (type: 'encode' | 'decode') => void
  onAddPrefix: (prefix: string) => void
  onAddSuffix: (suffix: string) => void
  onCleanText: (featureId: string) => void
}

// Separator komponenti
const Separator = memo(() => (
  <div className="w-px h-8 bg-light-border dark:bg-dark-border self-center shrink-0" />
))

export const Toolbar = memo(function Toolbar(props: ToolbarProps) {
  return (
    <div className="space-y-4">
      <div className="card-base p-4">
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="select-none w-full sm:w-auto">
            <CaseTools onConvertCase={props.onConvertCase} />
          </div>
          <Separator />
          <div className="select-none w-full sm:w-auto">
            <CleaningTools onCleanText={props.onCleanText} />
          </div>
          <Separator />
          <div className="select-none w-full sm:w-auto">
            <SortingTools onSortLines={props.onSortLines} />
          </div>
          <Separator />
          <div className="select-none w-full sm:w-auto">
            <CharacterTools onConvertCharacters={props.onConvertCharacters} />
          </div>
          <Separator />
          <div className="select-none w-full sm:w-auto">
            <URLTools onUrlEncodeDecode={props.onUrlEncodeDecode} />
          </div>
        </div>
      </div>

      <div className="card-base p-4">
        <div className="select-none">
          <LineTools 
            onAddPrefix={props.onAddPrefix}
            onAddSuffix={props.onAddSuffix}
          />
        </div>
      </div>
    </div>
  )
}) 