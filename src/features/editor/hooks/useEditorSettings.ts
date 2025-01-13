import { useState } from 'react'
import { EditorSettings, defaultEditorSettings } from '../types'

export function useEditorSettings() {
  const [editorSettings, setEditorSettings] = useState<EditorSettings>(() => {
    const savedSettings = localStorage.getItem('editorSettings')
    return savedSettings ? JSON.parse(savedSettings) : defaultEditorSettings
  })

  const updateEditorSettings = (newSettings: Partial<EditorSettings>) => {
    setEditorSettings(prevSettings => {
      const updatedSettings = { ...prevSettings, ...newSettings }
      localStorage.setItem('editorSettings', JSON.stringify(updatedSettings))
      return updatedSettings
    })
  }

  return { editorSettings, updateEditorSettings }
} 