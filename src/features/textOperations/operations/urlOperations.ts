export const urlEncodeDecode = (text: string, type: 'encode' | 'decode'): string => {
  try {
    if (type === 'encode') {
      return encodeURIComponent(text)
    } else {
      return decodeURIComponent(text)
    }
  } catch (error) {
    console.error('URL işlemi sırasında hata:', error)
    return text
  }
} 