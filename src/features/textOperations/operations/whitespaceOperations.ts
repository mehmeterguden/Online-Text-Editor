export const cleanWhitespace = (text: string): string => {
  return text
    .replace(/\s+/g, ' ')  // Birden fazla boşluğu tek boşluğa indirir
    .replace(/^\s+|\s+$/g, '')  // Baştaki ve sondaki boşlukları temizler
    .replace(/\n\s*\n\s*/g, '\n\n')  // Birden fazla boş satırı iki satıra indirir
} 