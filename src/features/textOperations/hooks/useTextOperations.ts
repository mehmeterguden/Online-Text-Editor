import { useState, useCallback } from 'react'

export function useTextOperations() {
  const [text, setText] = useState('')

  const convertCase = useCallback((type: 'upper' | 'lower' | 'title' | 'sentence') => {
    if (!text) return text

    let result = text
    switch (type) {
      case 'upper':
        result = text.toUpperCase()
        break
      case 'lower':
        result = text.toLowerCase()
        break
      case 'title':
        result = text.split('\n').map(line => 
          line.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join(' ')
        ).join('\n')
        break
      case 'sentence':
        result = text.split('\n').map(line => 
          line.charAt(0).toUpperCase() + line.slice(1).toLowerCase()
        ).join('\n')
        break
    }
    setText(result)
    return result
  }, [text])

  const cleanWhitespace = useCallback(() => {
    if (!text) return text
    const result = text.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n')
    setText(result)
    return result
  }, [text])

  const removeHtmlTags = useCallback(() => {
    if (!text) return text
    const result = text.replace(/<[^>]*>/g, '')
    setText(result)
    return result
  }, [text])

  const removeDuplicates = useCallback(() => {
    if (!text) return text
    const lines = text.split('\n')
    const unique = [...new Set(lines)]
    const result = unique.join('\n')
    setText(result)
    return result
  }, [text])

  const sortLines = useCallback((type: 'asc' | 'desc' | 'length-asc' | 'length-desc' | 'random') => {
    if (!text) return text

    const lines = text.split('\n')
    let result: string[]

    switch (type) {
      case 'asc':
        result = lines.sort((a, b) => a.localeCompare(b))
        break
      case 'desc':
        result = lines.sort((a, b) => b.localeCompare(a))
        break
      case 'length-asc':
        result = lines.sort((a, b) => a.length - b.length)
        break
      case 'length-desc':
        result = lines.sort((a, b) => b.length - a.length)
        break
      case 'random':
        result = lines.sort(() => Math.random() - 0.5)
        break
      default:
        result = lines
    }

    const sortedText = result.join('\n')
    setText(sortedText)
    return sortedText
  }, [text])

  const convertCharacters = useCallback((type: 'tr-en' | 'en-tr') => {
    if (!text) return text
    const trToEn: { [key: string]: string } = {
      'ç': 'c', 'Ç': 'C', 'ğ': 'g', 'Ğ': 'G', 'ı': 'i', 'İ': 'I',
      'ö': 'o', 'Ö': 'O', 'ş': 's', 'Ş': 'S', 'ü': 'u', 'Ü': 'U'
    }
    const enToTr: { [key: string]: string } = {
      'c': 'ç', 'C': 'Ç', 'g': 'ğ', 'G': 'Ğ', 'i': 'ı', 'I': 'İ',
      'o': 'ö', 'O': 'Ö', 's': 'ş', 'S': 'Ş', 'u': 'ü', 'U': 'Ü'
    }

    const result = text.split('').map(char => {
      if (type === 'tr-en') return trToEn[char] || char
      return enToTr[char] || char
    }).join('')

    setText(result)
    return result
  }, [text])

  const urlEncodeDecode = useCallback((type: 'encode' | 'decode') => {
    if (!text) return text
    try {
      const result = type === 'encode' ? encodeURIComponent(text) : decodeURIComponent(text)
      setText(result)
      return result
    } catch (error) {
      return text
    }
  }, [text])

  const addLineNumbers = useCallback(() => {
    if (!text.trim()) return text
    const lines = text.split('\n')
    const numbered = lines.map((line, i) => `${i + 1}. ${line}`)
    const result = numbered.join('\n')
    setText(result)
    return result
  }, [text])

  const addPrefix = useCallback((prefix: string) => {
    if (!prefix || !text) return text
    const lines = text.split('\n')
    const prefixed = lines.map(line => `${prefix}${line}`)
    const result = prefixed.join('\n')
    setText(result)
    return result
  }, [text])

  const addSuffix = useCallback((suffix: string) => {
    if (!suffix || !text) return text
    const lines = text.split('\n')
    const suffixed = lines.map(line => `${line}${suffix}`)
    const result = suffixed.join('\n')
    setText(result)
    return result
  }, [text])

  const formatText = useCallback(() => {
    if (!text) return text
    const result = text.trim()
    setText(result)
    return result
  }, [text])

  const showMarkdown = useCallback(() => {
    return text
  }, [text])

  return {
    text,
    setText,
    convertCase,
    cleanWhitespace,
    removeHtmlTags,
    removeDuplicates,
    sortLines,
    convertCharacters,
    urlEncodeDecode,
    addLineNumbers,
    addPrefix,
    addSuffix,
    formatText,
    showMarkdown
  }
} 