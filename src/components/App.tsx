import { useState } from 'react'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'
import { Header } from './layout/Header'
import { getFeatureById, allCleaningFeatures } from '../features/cleaning'

export function App() {
  const [text, setText] = useState('')

  const handleConvertCase = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    switch (type) {
      case 'upper':
        setText(text.toUpperCase())
        break
      case 'lower':
        setText(text.toLowerCase())
        break
      case 'title':
        setText(
          text
            .split('\n')
            .map(line =>
              line
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')
            )
            .join('\n')
        )
        break
      case 'sentence':
        setText(
          text
            .split('\n')
            .map(line => line.charAt(0).toUpperCase() + line.slice(1).toLowerCase())
            .join('\n')
        )
        break
    }
  }

  const handleSortLines = (type: 'asc' | 'desc' | 'length' | 'random') => {
    const lines = text.split('\n')
    switch (type) {
      case 'asc':
        setText(lines.sort().join('\n'))
        break
      case 'desc':
        setText(lines.sort().reverse().join('\n'))
        break
      case 'length':
        setText(lines.sort((a, b) => a.length - b.length).join('\n'))
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-4 max-w-6xl mx-auto space-y-4">
        <div className="bg-white rounded-lg shadow-sm">
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
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <Editor value={text} onChange={setText} />
        </div>
      </main>
    </div>
  )
} 