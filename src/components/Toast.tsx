import React, { useEffect } from 'react'
import { 
  FiCheck, FiInfo, FiAlertTriangle, FiX, 
  FiType, FiList, FiLink, FiTrash2, FiEdit3,
  FiCopy, FiRotateCw, FiFilter, FiHash,
  FiCode, FiDelete, FiEdit, FiClipboard,
  FiRefreshCw, FiZap, FiFileText, FiColumns,
  FiAlignLeft, FiAlignCenter, FiAlignRight,
  FiArrowUp, FiArrowDown, FiShuffle
} from 'react-icons/fi'

interface ToastProps {
  message: string
  type?: 'success' | 'info' | 'warning' | 'error'
  details?: string
  operation?: 'case' | 'sort' | 'clean' | 'convert' | 'url' | 'prefix' | 'suffix' | 'format' | 'number' | 'duplicate' | 'html' | 'delete' | 'edit' | 'copy' | 'refresh' | 'align' | 'transform'
  onClose: () => void
}

// Özel SVG ikonları için bileşenler
const CustomIcon = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`
    flex-shrink-0 w-8 h-8 rounded-lg 
    bg-blue-100 dark:bg-blue-900/30 
    flex items-center justify-center
    ${className}
  `}>
    <svg 
      className="w-5 h-5 text-blue-600 dark:text-blue-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      {children}
    </svg>
  </div>
)

const getOperationIcon = (operation?: string) => {
  switch (operation) {
    // Metin İşlemleri
    case 'case':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 15V3h2v12h-2zM3 15V3h2v12H3zM9 3v12M3 9h10M3 3h10M3 15h10" />
        </CustomIcon>
      )
    case 'sort':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </CustomIcon>
      )
    case 'clean':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </CustomIcon>
      )
    case 'convert':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </CustomIcon>
      )
    case 'url':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </CustomIcon>
      )
    case 'prefix':
    case 'suffix':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </CustomIcon>
      )
    case 'format':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </CustomIcon>
      )
    case 'number':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </CustomIcon>
      )
    case 'duplicate':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </CustomIcon>
      )
    case 'html':
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </CustomIcon>
      )
    case 'delete':
      return (
        <CustomIcon className="bg-red-100 dark:bg-red-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </CustomIcon>
      )
    case 'edit':
      return (
        <CustomIcon className="bg-yellow-100 dark:bg-yellow-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </CustomIcon>
      )
    case 'copy':
      return (
        <CustomIcon className="bg-indigo-100 dark:bg-indigo-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </CustomIcon>
      )
    case 'refresh':
      return (
        <CustomIcon className="bg-green-100 dark:bg-green-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </CustomIcon>
      )
    case 'align':
      return (
        <CustomIcon className="bg-purple-100 dark:bg-purple-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </CustomIcon>
      )
    case 'transform':
      return (
        <CustomIcon className="bg-pink-100 dark:bg-pink-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </CustomIcon>
      )
    default:
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </CustomIcon>
      )
  }
}

const getStatusIcon = (type: string) => {
  switch (type) {
    case 'success':
      return (
        <CustomIcon className="bg-green-100 dark:bg-green-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </CustomIcon>
      )
    case 'error':
      return (
        <CustomIcon className="bg-red-100 dark:bg-red-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </CustomIcon>
      )
    case 'warning':
      return (
        <CustomIcon className="bg-yellow-100 dark:bg-yellow-900/30">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </CustomIcon>
      )
    default:
      return (
        <CustomIcon>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </CustomIcon>
      )
  }
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  type = 'success', 
  details, 
  operation,
  onClose 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const bgColorClass = {
    success: 'bg-green-50 dark:bg-green-900/10 border-green-200/50 dark:border-green-700/30',
    error: 'bg-red-50 dark:bg-red-900/10 border-red-200/50 dark:border-red-700/30',
    warning: 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200/50 dark:border-yellow-700/30',
    info: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200/50 dark:border-blue-700/30'
  }[type]

  const textColorClass = {
    success: 'text-green-800 dark:text-green-200',
    error: 'text-red-800 dark:text-red-200',
    warning: 'text-yellow-800 dark:text-yellow-200',
    info: 'text-blue-800 dark:text-blue-200'
  }[type]

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto z-50 animate-slide-up">
      <div 
        className={`
          flex items-start gap-4 p-4 rounded-xl shadow-lg border ${bgColorClass}
          max-w-[calc(100vw-2rem)] md:max-w-md
          backdrop-blur-sm backdrop-saturate-150
          transform transition-all duration-300 ease-in-out
          hover:scale-102 hover:shadow-xl hover:-translate-y-1
          dark:shadow-black/20
        `}
      >
        {/* İşlem İkonu */}
        {operation && (
          <div className="flex-shrink-0">
            {getOperationIcon(operation)}
          </div>
        )}
        
        {/* Durum İkonu */}
        <div className="flex-shrink-0">
          {getStatusIcon(type)}
        </div>
        
        <div className="flex flex-col min-w-[200px] flex-grow">
          <p className={`text-sm font-medium ${textColorClass} line-clamp-2`}>
            {message}
          </p>
          {details && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
              {details}
            </p>
          )}
        </div>

        {/* Kapat Butonu */}
        <button 
          onClick={onClose}
          className={`
            flex-shrink-0 w-8 h-8 rounded-lg
            hover:bg-black/5 dark:hover:bg-white/5
            ${textColorClass}
            transform transition-all duration-300 ease-in-out
            hover:rotate-90 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current
          `}
          aria-label="Bildirimi kapat"
        >
          <svg className="w-5 h-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
} 