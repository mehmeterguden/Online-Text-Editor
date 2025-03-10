import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

interface NumberInputProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  tooltip?: string
}

export function NumberInput({ value, onChange, min, max, step = 1, tooltip }: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(Number(e.target.value).toFixed(1))
    if (!isNaN(newValue) && (min === undefined || newValue >= min) && (max === undefined || newValue <= max)) {
      onChange(newValue)
    }
  }

  const increment = () => {
    if (max === undefined || value + step <= max) {
      onChange(Number((value + step).toFixed(1)))
    }
  }

  const decrement = () => {
    if (min === undefined || value - step >= min) {
      onChange(Number((value - step).toFixed(1)))
    }
  }

  return (
    <div className="number-input-wrapper relative" data-tip={tooltip}>
      <input
        type="number"
        value={Number(value).toFixed(1)}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        className="w-full h-[38px] px-2 py-1 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-sm sm:text-base"
      />
      <div className="number-input-controls absolute right-0 top-0 h-full flex flex-col border-l border-gray-300 dark:border-gray-600">
        <button 
          type="button" 
          onClick={increment} 
          className="flex-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
        >
          <FiChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        <button 
          type="button" 
          onClick={decrement} 
          className="flex-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-t border-gray-300 dark:border-gray-600 flex items-center justify-center"
        >
          <FiChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  )
} 