import { FiGlobe, FiLock, FiUnlock } from 'react-icons/fi'

interface URLToolsProps {
  onUrlEncodeDecode: (type: 'encode' | 'decode') => void
}

export function URLTools({ onUrlEncodeDecode }: URLToolsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
        <FiGlobe className="inline-block w-4 h-4 mr-1" />
        URL Araçları
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onUrlEncodeDecode('encode')}
          className="btn-toolbar"
          title="URL Encode"
        >
          <FiLock className="w-4 h-4" />
          Encode
        </button>
        <button
          onClick={() => onUrlEncodeDecode('decode')}
          className="btn-toolbar"
          title="URL Decode"
        >
          <FiUnlock className="w-4 h-4" />
          Decode
        </button>
      </div>
    </div>
  )
} 