import { FiDelete } from 'react-icons/fi'
import { FormattingCleaningFeature } from '../types'

export const formattingCleaningFeatures: FormattingCleaningFeature[] = [
  {
    id: 'line-numbers',
    name: 'Satır numaralarını sil',
    description: 'Satır başındaki numaraları temizler.',
    category: 'formatting',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove line numbers at the start of lines (both with and without dots)
      return text
        .split('\n')
        .map(line => line.replace(/^\s*\d+[.:)]\s*|\s*\d+\s*$/, ''))
        .join('\n');
    }
  },
  {
    id: 'quoted-text',
    name: 'Tırnak içindeki metinleri sil',
    description: 'Tırnak içindeki metinleri temizler.',
    category: 'formatting',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove text within quotes (single, double, and smart quotes)
      return text
        .replace(/"[^"]*"|'[^']*'|"[^"]*"|'[^']*'/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'parentheses-text',
    name: 'Parantez içindeki metinleri sil',
    description: 'Parantez içindeki metinleri temizler.',
    category: 'formatting',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove text within parentheses, brackets, and braces
      return text
        .replace(/\([^)]*\)|\[[^\]]*\]|\{[^}]*\}/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'code-blocks',
    name: 'Kod bloklarını sil',
    description: 'Kod bloklarını temizler.',
    category: 'formatting',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove code blocks with various syntaxes
      return text
        .replace(/```[\s\S]*?```/g, '') // Markdown code blocks
        .replace(/`[^`]+`/g, '') // Inline code
        .replace(/<code[^>]*>[\s\S]*?<\/code>/gi, '') // HTML code tags
        .replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, '') // HTML pre tags
        .trim();
    }
  },
  {
    id: 'indentation',
    name: 'Girinti düzeylerini sil',
    description: 'Satır başındaki girintileri temizler.',
    category: 'formatting',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove leading whitespace while preserving line structure
      return text
        .split('\n')
        .map(line => line.trimLeft())
        .join('\n')
        .trim();
    }
  }
] 