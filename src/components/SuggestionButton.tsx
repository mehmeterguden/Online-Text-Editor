import { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { SuggestionForm } from './SuggestionForm';

export const SuggestionButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="group fixed bottom-6 right-6 flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600 hover:from-blue-600 hover:to-violet-600 dark:hover:from-blue-700 dark:hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <FiMessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="font-medium">Görüş Bildir</span>
      </button>
      <SuggestionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}; 