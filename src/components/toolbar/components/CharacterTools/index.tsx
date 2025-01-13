import { FiRepeat } from 'react-icons/fi'

interface CharacterToolsProps {
  onConvertCharacters: (type: 'tr-en' | 'en-tr') => void
}

export function CharacterTools({ onConvertCharacters }: CharacterToolsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Karakter Dönüşümü</span>
      <div className="flex gap-2">
        <button
          onClick={() => onConvertCharacters('tr-en')}
          className="btn-toolbar"
          title="Türkçe → İngilizce"
        >
          <FiRepeat className="w-4 h-4" />
          TR→EN
        </button>
        <button
          onClick={() => onConvertCharacters('en-tr')}
          className="btn-toolbar"
          title="İngilizce → Türkçe"
        >
          <FiRepeat className="w-4 h-4" />
          EN→TR
        </button>
      </div>
    </div>
  )
} 