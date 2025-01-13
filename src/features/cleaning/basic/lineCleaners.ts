import { FiDelete } from 'react-icons/fi'
import { BasicCleaningFeature } from '../types'

export const lineCleaningFeatures: BasicCleaningFeature[] = [
  {
    id: 'merge-empty-lines',
    name: 'Ardışık boş satırları birleştir',
    description: 'Ardışık boş satırları tek satıra indirir.',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Split into lines
      const lines = text.split('\n')
      const result = []
      let lastLineEmpty = false

      for (const line of lines) {
        const isEmptyLine = line.trim() === ''
        if (isEmptyLine && lastLineEmpty) {
          continue
        }
        result.push(line)
        lastLineEmpty = isEmptyLine
      }

      return result.join('\n')
    }
  },
  {
    id: 'tabs',
    name: 'Tab karakterlerini sil',
    description: 'Metindeki tab karakterlerini temizler.',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Replace all tab characters with a single space and normalize spaces
      return text.split('\n').map(line => {
        return line.replace(/\t+/g, ' ').replace(/\s+/g, ' ').trim();
      }).join('\n');
    }
  },
  {
    id: 'hidden-chars',
    name: 'Gizli karakterleri sil',
    description: 'Satır sonlarındaki gizli karakterleri temizler.',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove zero-width spaces, non-breaking spaces, and other invisible characters
      const hiddenChars = [
        '\u200B', // Zero-width space
        '\u200C', // Zero-width non-joiner
        '\u200D', // Zero-width joiner
        '\u200E', // Left-to-right mark
        '\u200F', // Right-to-left mark
        '\uFEFF', // Byte order mark
        '\u00A0', // Non-breaking space
        '\u2028', // Line separator
        '\u2029', // Paragraph separator
        '\u202A', // Left-to-right embedding
        '\u202B', // Right-to-left embedding
        '\u202C', // Pop directional formatting
        '\u202D', // Left-to-right override
        '\u202E', // Right-to-left override
        '\u0009', // Tab
        '\u000B', // Vertical tab
        '\u000C'  // Form feed
      ].join('')
      
      return text.split('\n').map(line => {
        return line.replace(new RegExp(`[${hiddenChars}]`, 'g'), ' ')
                  .replace(/\s+/g, ' ')
                  .trim();
      }).join('\n');
    }
  },
  {
    id: 'line-end-punctuation',
    name: 'Satır sonu noktalama sil',
    description: 'Satır sonlarındaki noktalama işaretlerini siler.',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        .split('\n')
        .map(line => {
          // Remove punctuation marks at the end of the line and trim
          return line.replace(/[.,!?;:]+\s*$/, '').trim()
        })
        .join('\n')
    }
  },
  {
    id: 'empty-and-whitespace',
    name: 'Boş ve boşluklu satırları sil',
    description: 'Boş satırları ve sadece boşluk içeren satırları siler.',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        .split('\n')
        .filter(line => {
          const trimmed = line.trim()
          return trimmed.length > 0 && !/^\s+$/.test(line)
        })
        .join('\n')
    }
  },
  {
    id: 'list-markers',
    name: 'Liste işaretlerini sil',
    description: 'Satır başındaki liste işaretlerini siler.',
    category: 'basic',
    subCategory: 'line',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text.split('\n').map(line => {
        // Remove all types of list markers and normalize spaces
        line = line.replace(/^\s*(?:\d+[\.\)]|[a-zA-Z][\.\)]|\-|\•|\*|\+|\-\s*\[[xX\s]\])\s*/, '')
        return line.trim();
      }).join('\n').replace(/\n{3,}/g, '\n\n'); // Normalize multiple empty lines
    }
  }
] 