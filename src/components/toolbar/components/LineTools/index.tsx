import { useState } from 'react'
import { FiPlusCircle, FiPlus } from 'react-icons/fi'

interface LineToolsProps {
  onAddPrefix: (prefix: string) => void
  onAddSuffix: (suffix: string) => void
}

export function LineTools({ onAddPrefix, onAddSuffix }: LineToolsProps) {
  const [prefix, setPrefix] = useState('')
  const [suffix, setSuffix] = useState('')

  return (
    <div className="w-1/2 pr-2 inline-block">
      <div className="card-base p-4">
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <FiPlusCircle className="inline-block w-4 h-4 mr-1" />
              Satır Başına Ekle
            </label>
            <div className="flex gap-1">
              <input
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="input flex-1 text-sm"
                placeholder="Ön ek..."
              />
              <button
                onClick={() => onAddPrefix(prefix)}
                className="btn-toolbar text-sm"
                title="Başa Ekle"
              >
                <FiPlus className="w-4 h-4" />
                Ekle
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <FiPlusCircle className="inline-block w-4 h-4 mr-1" />
              Satır Sonuna Ekle
            </label>
            <div className="flex gap-1">
              <input
                type="text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                className="input flex-1 text-sm"
                placeholder="Son ek..."
              />
              <button
                onClick={() => onAddSuffix(suffix)}
                className="btn-toolbar text-sm"
                title="Sona Ekle"
              >
                <FiPlus className="w-4 h-4" />
                Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 