import { useState } from 'react'
import { Toolbar } from './Toolbar'
import { TextEditor } from './Editor'
import { Header } from './layout/Header'
import { allCleaningFeatures } from '../features/cleaning'
import { toTurkishUpperCase, toTurkishLowerCase, toTurkishTitleCase, toTurkishSentenceCase } from '../utils/turkishCase'

export function App() {
  const [text, setText] = useState('')

  const handleConvertCase = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    switch (type) {
      case 'upper':
        setText(toTurkishUpperCase(text))
        break
      case 'lower':
        setText(toTurkishLowerCase(text))
        break
      case 'title':
        setText(
          text
            .split('\n')
            .map(line => toTurkishTitleCase(line))
            .join('\n')
        )
        break
      case 'sentence':
        setText(toTurkishSentenceCase(text))
        break
    }
  }

  const handleSortLines = (type: 'asc' | 'desc' | 'random' | 'length-asc' | 'length-desc') => {
    const lines = text.split('\n')
    switch (type) {
      case 'asc':
        setText(lines.sort().join('\n'))
        break
      case 'desc':
        setText(lines.sort().reverse().join('\n'))
        break
      case 'length-asc':
        setText(lines.sort((a, b) => a.length - b.length).join('\n'))
        break
      case 'length-desc':
        setText(lines.sort((a, b) => b.length - a.length).join('\n'))
        break
      case 'random':
        setText(lines.sort(() => Math.random() - 0.5).join('\n'))
        break
    }
  }

  const handleConvertCharacters = (type: 'tr-en' | 'en-tr') => {
    const trToEn: { [key: string]: string } = {
      'ç': 'c', 'Ç': 'C', 'ğ': 'g', 'Ğ': 'G', 'ı': 'i', 'İ': 'I',
      'ö': 'o', 'Ö': 'O', 'ş': 's', 'Ş': 'S', 'ü': 'u', 'Ü': 'U'
    }
    const enToTr: { [key: string]: string } = {
      'c': 'ç', 'C': 'Ç', 'g': 'ğ', 'G': 'Ğ', 'i': 'ı', 'I': 'İ',
      'o': 'ö', 'O': 'Ö', 's': 'ş', 'S': 'Ş', 'u': 'ü', 'U': 'Ü'
    }
    const map = type === 'tr-en' ? trToEn : enToTr
    setText(text.split('').map(c => map[c] || c).join(''))
  }

  const handleUrlEncodeDecode = (type: 'encode' | 'decode') => {
    setText(type === 'encode' ? encodeURIComponent(text) : decodeURIComponent(text))
  }

  const handleAddPrefix = (prefix: string) => {
    setText(text.split('\n').map(line => prefix + line).join('\n'))
  }

  const handleAddSuffix = (suffix: string) => {
    setText(text.split('\n').map(line => line + suffix).join('\n'))
  }

  const handleFormatText = () => {
    // Add your text formatting logic here
  }

  const handleShowMarkdown = () => {
    // Add your markdown preview logic here
    return text
  }

  const handleCleanText = (featureId: string) => {
    const feature = allCleaningFeatures.find(f => f.id === featureId)
    if (feature && feature.isActive) {
      const cleanedText = feature.action(text)
      setText(cleanedText)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="p-4">
        <div className="max-w-6xl mx-auto space-y-4">
          <Toolbar
            onConvertCase={handleConvertCase}
            onSortLines={handleSortLines}
            onConvertCharacters={handleConvertCharacters}
            onUrlEncodeDecode={handleUrlEncodeDecode}
            onAddPrefix={handleAddPrefix}
            onAddSuffix={handleAddSuffix}
            onFormatText={handleFormatText}
            onShowMarkdown={handleShowMarkdown}
            onCleanText={handleCleanText}
            text={text}
          />
          <TextEditor 
            value={text} 
            onChange={setText} 
            settings={{
              fontSize: 14,
              fontFamily: 'monospace',
              lineHeight: 1.5,
              letterSpacing: 0,
              lineNumbers: true,
              wordWrap: true,
              minimap: true,
              tabSize: 2,
              renderWhitespace: 'none',
              syntaxHighlighting: true,
              autoClosingBrackets: true,
              autoClosingQuotes: true,
              formatOnPaste: true,
              formatOnType: true,
              cursorStyle: 'line',
              cursorWidth: 1,
              cursorSmoothCaretAnimation: true,
              smoothScrolling: true,
              selectionHighlight: true,
              matchBrackets: 'always',
              bracketPairColorization: true,
              guides: true,
              autoSurround: true,
              links: true,
              mouseWheelZoom: true,
              unicodeHighlight: {
                ambiguousCharacters: true,
                invisibleCharacters: true,
                nonBasicASCII: true
              }
            }}
          />
        </div>
      </div>
    </div>
  )
} 