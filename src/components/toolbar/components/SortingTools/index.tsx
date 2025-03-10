import { FiArrowUp, FiArrowDown, FiHash, FiShuffle } from 'react-icons/fi'

interface SortingToolsProps {
  onSortLines: (type: 'asc' | 'desc' | 'length' | 'random') => void
}

export function SortingTools({ onSortLines }: SortingToolsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Sıralama Araçları</span>
      <div className="grid grid-cols-2 sm:flex gap-2">
        <button
          onClick={() => onSortLines('asc')}
          className="btn-toolbar w-full sm:w-auto"
          data-tip="Metni A'dan Z'ye sırala"
        >
          <FiArrowUp className="w-4 h-4" />
          A→Z
        </button>
        <button
          onClick={() => onSortLines('desc')}
          className="btn-toolbar w-full sm:w-auto"
          data-tip="Metni Z'den A'ya sırala"
        >
          <FiArrowDown className="w-4 h-4" />
          Z→A
        </button>
        <button
          onClick={() => onSortLines('length')}
          className="btn-toolbar w-full sm:w-auto"
          data-tip="Satırları uzundan kısaya sırala"
        >
          <FiArrowDown className="w-4 h-4" />
          <span className="flex items-center gap-0.5">
            <span className="text-base">▬</span>
            <span className="text-sm">▬</span>
            <span className="text-xs">▬</span>
          </span>
        </button>
        <button
          onClick={() => onSortLines('random')}
          className="btn-toolbar w-full sm:w-auto"
          data-tip="Satırları rastgele sırala"
        >
          <FiShuffle className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 