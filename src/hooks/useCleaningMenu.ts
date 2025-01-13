import { useState, useEffect } from 'react'

interface CleaningMenuSections {
  basic: boolean
  character: boolean
  content: boolean
  formatting: boolean
  pattern: boolean
}

export function useCleaningMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [sections, setSections] = useState<CleaningMenuSections>({
    basic: true,
    character: true,
    content: true,
    formatting: true,
    pattern: true
  })

  useEffect(() => {
    if (isOpen) {
      setSections({
        basic: true,
        character: true,
        content: true,
        formatting: true,
        pattern: true
      })
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(prev => !prev)

  const toggleSection = (section: keyof CleaningMenuSections) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return {
    isOpen,
    sections,
    toggleMenu,
    toggleSection
  }
} 