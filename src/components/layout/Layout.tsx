import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useState } from 'react'
import { EditorSettingsPopup } from '../EditorSettings'
import { useEditorSettings } from '../../features/editor/hooks/useEditorSettings'
import { FiX } from 'react-icons/fi'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme()
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const { editorSettings, updateEditorSettings } = useEditorSettings()

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary-500">
              Metin Editörü
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/nasil-kullanilir/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all group"
                title="Nasıl Kullanılır"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Yardım</span>
              </Link>
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all group"
                title="Ayarlar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Ayarlar</span>
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all group"
                title={theme === 'dark' ? 'Aydınlık Mod' : 'Karanlık Mod'}
              >
                {theme === 'dark' ? (
                  <>
                    <svg className="h-5 w-5 text-yellow-500 group-hover:text-yellow-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 transition-colors">Aydınlık</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition-colors">Karanlık</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Hakkımızda */}
            <div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">
                Metin Editörü
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                Metinlerinizi düzenlemek, biçimlendirmek ve dönüştürmek için profesyonel çözüm.
                Kullanıcı dostu arayüzü ve gelişmiş özellikleriyle metin düzenleme işlerinizi kolaylaştırır.
              </p>
            </div>

            {/* Özellikler */}
            <div>
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                Özellikler
              </h3>
              <ul className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
                <li>Metin Düzenleme</li>
                <li>Büyük/Küçük Harf</li>
                <li>Karakter Dönüşümü</li>
                <li>Sıralama Araçları</li>
                <li>URL Kodlama</li>
                <li>HTML Temizleme</li>
              </ul>
            </div>

            {/* Yardım */}
            <div>
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                Bağlantılar
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors font-medium"
                  >
                    Editör Ayarları
                  </button>
                </li>
                <li>
                  <Link
                    to="/nasil-kullanilir/"
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors font-medium"
                  >
                    Nasıl Kullanılır?
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setShowPrivacyPolicy(true)}
                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors text-sm"
                  >
                    Gizlilik Politikası
                  </button>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                  İletişim
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:iletisim@metineditoru.com"
                    className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 text-white rounded-lg transition-colors"
                  >
                    E-posta Gönder
                  </a>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    E-posta: iletisim@metineditoru.com
                  </p>
                </div>
              </div>
          </div>
        </div>
      </footer>

      {/* Gizlilik Politikası Modal */}
      {showPrivacyPolicy && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-y-auto py-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrivacyPolicy(false)
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl mx-4 relative">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Gizlilik Politikası
                </h2>
                <button
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Bu gizlilik politikası, Metin Editörü tarafından sağlanan hizmetlerin kullanımı sırasında uygulanan veri işleme prensiplerini açıklamaktadır.
                </p>
                <h3>Veri İşleme Prensipleri</h3>
                <ul>
                  <li>Tüm metin düzenleme işlemleri kullanıcının tarayıcısında gerçekleştirilir</li>
                  <li>Düzenlenen metinler sunucularımıza gönderilmez veya saklanmaz</li>
                  <li>Hiçbir kullanıcı verisi üçüncü taraflarla paylaşılmaz</li>
                </ul>
                <h3>İletişim</h3>
                <p>
                  E-posta: iletisim@metineditoru.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ayarlar Modal */}
      <EditorSettingsPopup
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={editorSettings}
        onUpdate={updateEditorSettings}
      />
    </div>
  )
} 