// Türkçe karakter dönüşüm haritaları
const TURKISH_TO_UPPER: { [key: string]: string } = {
  'a': 'A', 'b': 'B', 'c': 'C', 'ç': 'Ç', 'd': 'D', 'e': 'E',
  'f': 'F', 'g': 'G', 'ğ': 'Ğ', 'h': 'H', 'ı': 'I', 'i': 'İ',
  'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O',
  'ö': 'Ö', 'p': 'P', 'r': 'R', 's': 'S', 'ş': 'Ş', 't': 'T',
  'u': 'U', 'ü': 'Ü', 'v': 'V', 'y': 'Y', 'z': 'Z'
}

const TURKISH_TO_LOWER: { [key: string]: string } = {
  'A': 'a', 'B': 'b', 'C': 'c', 'Ç': 'ç', 'D': 'd', 'E': 'e',
  'F': 'f', 'G': 'g', 'Ğ': 'ğ', 'H': 'h', 'I': 'ı', 'İ': 'i',
  'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o',
  'Ö': 'ö', 'P': 'p', 'R': 'r', 'S': 's', 'Ş': 'ş', 'T': 't',
  'U': 'u', 'Ü': 'ü', 'V': 'v', 'Y': 'y', 'Z': 'z'
}

// Türkçe karakter dönüşüm fonksiyonları
export const toTurkishUpperCase = (text: string): string => {
  return text.split('').map(char => TURKISH_TO_UPPER[char] || char).join('')
}

export const toTurkishLowerCase = (text: string): string => {
  return text.split('').map(char => TURKISH_TO_LOWER[char] || char).join('')
}

// Başlık formatı için yardımcı fonksiyon
export const toTurkishTitleCase = (text: string): string => {
  return text.split(' ').map(word => 
    toTurkishUpperCase(word.charAt(0)) + toTurkishLowerCase(word.slice(1))
  ).join(' ')
}

// Cümle formatı için yardımcı fonksiyon
export const toTurkishSentenceCase = (text: string): string => {
  return text.split('\n').map(line => 
    toTurkishUpperCase(line.charAt(0)) + toTurkishLowerCase(line.slice(1))
  ).join('\n')
} 