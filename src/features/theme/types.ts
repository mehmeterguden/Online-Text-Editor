export type ThemeType = 'light' | 'dark'

export interface ThemeContext {
  theme: ThemeType
  toggleTheme: () => void
} 