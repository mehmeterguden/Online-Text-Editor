import { FiDelete } from 'react-icons/fi'
import { CharacterCleaningFeature } from '../types'

export const characterCleaningFeatures: CharacterCleaningFeature[] = [
  {
    id: 'emoji-symbols',
    name: 'Emoji ve sembolleri sil',
    description: 'Metindeki emoji ve özel sembolleri temizler.',
    category: 'character',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove emojis and keep only basic characters
      return text
        // Remove emojis and pictographic symbols
        .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '')
        // Keep only basic Latin letters, numbers, basic punctuation, and spaces
        .replace(/[^\x20-\x7E\u00C7\u00E7\u011E\u011F\u0130\u0131\u00D6\u00F6\u015E\u015F\u00DC\u00FC\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'non-ascii',
    name: 'ASCII olmayan karakterleri sil',
    description: 'ASCII olmayan karakterleri temizler.',
    category: 'character',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Keep ASCII characters and specific Turkish characters
      const turkishChars = '\u00C7\u00E7\u011E\u011F\u0130\u0131\u00D6\u00F6\u015E\u015F\u00DC\u00FC';
      return text
        .split('')
        .map(char => {
          const code = char.charCodeAt(0);
          return (code >= 0x20 && code <= 0x7E) || turkishChars.includes(char) ? char : '';
        })
        .join('')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'control-chars',
    name: 'Kontrol karakterlerini sil',
    description: 'Kontrol karakterlerini temizler.',
    category: 'character',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove control characters while preserving newlines and spaces
      return text
        .split('\n')
        .map(line => {
          return line
            .split('')
            .map(char => {
              const code = char.charCodeAt(0);
              return (code < 32 && code !== 9 && code !== 10) || code === 127 ? ' ' : char;
            })
            .join('')
            .replace(/\s+/g, ' ')
            .trim();
        })
        .join('\n')
        .replace(/\n{3,}/g, '\n\n');
    }
  }
] 