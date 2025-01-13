import { FiDelete } from 'react-icons/fi'
import { ContentCleaningFeature } from '../types'

export const contentCleaningFeatures: ContentCleaningFeature[] = [
  {
    id: 'duplicate-lines',
    name: 'Tekrarlayan satırları sil',
    description: 'Metindeki tekrarlayan satırları temizler.',
    category: 'content',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      // Remove duplicate lines while preserving order
      const lines = text.split('\n');
      const seen = new Set<string>();
      const uniqueLines = lines.filter(line => {
        const trimmed = line.trim();
        if (!trimmed || seen.has(trimmed)) return false;
        seen.add(trimmed);
        return true;
      });
      return uniqueLines.join('\n');
    }
  },
  {
    id: 'urls',
    name: 'URL\'leri sil',
    description: 'Metindeki URL\'leri temizler.',
    category: 'content',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        // Remove URLs with protocols
        .replace(/(?:https?|ftp|file):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[-A-Za-z0-9+&@#\/%=~_|]/gi, '')
        // Remove www URLs
        .replace(/www\.[-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[-A-Za-z0-9+&@#\/%=~_|]/gi, '')
        // Remove other common URL patterns
        .replace(/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+\.[A-Za-z]{2,}(\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]*)?/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'emails',
    name: 'E-posta adreslerini sil',
    description: 'Metindeki e-posta adreslerini temizler.',
    category: 'content',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        // Remove email addresses with various TLDs
        .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, '')
        // Remove potential email addresses without TLD
        .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'markdown',
    name: 'Markdown formatını sil',
    description: 'Metindeki Markdown formatını temizler.',
    category: 'content',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        // Remove headers
        .replace(/^#{1,6}\s+/gm, '')
        // Remove emphasis markers
        .replace(/([*_~]{1,3})(\S.*?\S)\1/g, '$2')
        // Remove links
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
        // Remove images
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
        .replace(/!\[([^\]]*)\]\[[^\]]*\]/g, '')
        // Remove code blocks
        .replace(/```[\s\S]*?```/g, '')
        .replace(/~~~[\s\S]*?~~~/g, '')
        // Remove inline code
        .replace(/`([^`]+)`/g, '$1')
        // Remove blockquotes
        .replace(/^>\s+/gm, '')
        // Remove horizontal rules
        .replace(/^(?:[-*_]){3,}\s*$/gm, '')
        // Remove task lists
        .replace(/^- \[[xX ]\]\s+/gm, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'css',
    name: 'CSS stillerini sil',
    description: 'Metindeki CSS stillerini temizler.',
    category: 'content',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        // Remove style tags and their content
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        // Remove inline styles
        .replace(/\s*style\s*=\s*(['"])[^\1]*?\1/gi, '')
        // Remove CSS rules
        .replace(/[.#][A-Za-z][\w-]*\s*{[^}]*}/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  },
  {
    id: 'script',
    name: 'Script kodlarını sil',
    description: 'Metindeki script kodlarını temizler.',
    category: 'content',
    isActive: true,
    icon: FiDelete.name,
    action: (text: string) => {
      return text
        // Remove script tags and their content
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        // Remove event handlers
        .replace(/\s*on\w+\s*=\s*(['"])[^\1]*?\1/gi, '')
        // Remove javascript: URLs
        .replace(/javascript:[^'"\s>]+/gi, '')
        // Remove other script-like content
        .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
  }
] 