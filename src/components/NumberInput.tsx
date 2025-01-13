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
    <div className="number-input-wrapper" data-tip={tooltip}>
      <input
        type="number"
        value={Number(value).toFixed(1)}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        className="w-full h-[38px] px-2 py-1 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
      />
      <div className="number-input-controls rounded-r-lg overflow-hidden">
        <button type="button" onClick={increment} className="number-input-up">
          <FiChevronUp className="w-4 h-4" />
        </button>
        <button type="button" onClick={decrement} className="number-input-down">
          <FiChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 