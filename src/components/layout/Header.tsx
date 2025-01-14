import { useEffect, useState } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes in system dark mode preference
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Metin Editörü
          </h1>
        </div>
      </div>
    </header>
  );
} 