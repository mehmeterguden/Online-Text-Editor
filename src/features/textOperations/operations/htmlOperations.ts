export const removeHtmlTags = (text: string): string => {
  return text
    .replace(/<[^>]*>/g, '')  // HTML etiketlerini temizler
    .replace(/&nbsp;/g, ' ')  // &nbsp; karakterlerini boşluğa çevirir
    .replace(/&amp;/g, '&')   // &amp; karakterlerini & işaretine çevirir
    .replace(/&lt;/g, '<')    // &lt; karakterlerini < işaretine çevirir
    .replace(/&gt;/g, '>')    // &gt; karakterlerini > işaretine çevirir
} 