const turkishToEnglishMap: { [key: string]: string } = {
  'ç': 'c', 'Ç': 'C',
  'ğ': 'g', 'Ğ': 'G',
  'ı': 'i', 'İ': 'I',
  'ö': 'o', 'Ö': 'O',
  'ş': 's', 'Ş': 'S',
  'ü': 'u', 'Ü': 'U'
}

const englishToTurkishMap: { [key: string]: string } = {
  'c': 'ç', 'C': 'Ç',
  'g': 'ğ', 'G': 'Ğ',
  'i': 'ı', 'I': 'İ',
  'o': 'ö', 'O': 'Ö',
  's': 'ş', 'S': 'Ş',
  'u': 'ü', 'U': 'Ü'
}

export const convertCharacters = (text: string, type: 'turkishToEnglish' | 'englishToTurkish'): string => {
  const map = type === 'turkishToEnglish' ? turkishToEnglishMap : englishToTurkishMap
  return text.split('').map(char => map[char] || char).join('')
} 