import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14 sm:h-16">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
            Metin Editörü
          </h1>
        </div>
      </div>
    </header>
  );
} 