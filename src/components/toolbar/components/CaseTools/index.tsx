import { FiType } from 'react-icons/fi'

interface CaseToolsProps {
  onConvertCase: (type: 'upper' | 'lower' | 'title' | 'sentence') => void
}

export function CaseTools({ onConvertCase }: CaseToolsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Büyük/Küçük Harf</span>
      <div className="flex gap-2">
        <button
          onClick={() => onConvertCase('upper')}
          className="btn-toolbar"
          title="Büyük Harfe Çevir"
        >
          <FiType className="w-4 h-4" /> ABC
        </button>
        <button
          onClick={() => onConvertCase('lower')}
          className="btn-toolbar"
          title="Küçük Harfe Çevir"
        >
          <FiType className="w-4 h-4" /> abc
        </button>
        <button
          onClick={() => onConvertCase('sentence')}
          className="btn-toolbar"
          title="Cümle Başı Büyük"
        >
          <FiType className="w-4 h-4" /> Abc
        </button>
        <button
          onClick={() => onConvertCase('title')}
          className="btn-toolbar"
          title="Kelime Başları Büyük"
        >
          <FiType className="w-4 h-4" /> Abc Def
        </button>
      </div>
    </div>
  )
} 