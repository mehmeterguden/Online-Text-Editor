import { useState, useEffect } from 'react'
import { Layout } from '../../components/layout/Layout'
import TemelOzellikler from './temel-ozellikler'
import BuyukKucukHarf from './buyuk-kucuk-harf'
import TemizlemeAraclari from './temizleme-araclari'
import SiralamaAraclari from './siralama-araclari'
import KarakterDonusumu from './karakter-donusumu'
import URLAraclari from './url-araclari'
import AramaVeDegistirme from './arama-ve-degistirme'
import EditorAyarlari from './editor-ayarlari'
import Kisayollar from './kisayollar'
import { Helmet } from 'react-helmet'

export const HowTo = () => {
  const [activeSection, setActiveSection] = useState('temel-ozellikler')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px'
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  // JSON-LD Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Metin Editörü Kullanım Kılavuzu",
    "description": "Metin Editörü'nün tüm özelliklerini öğrenin. Türkçe-İngilizce karakter dönüşümü, HTML temizleme, metin düzenleme ve daha fazlası için kapsamlı rehber.",
    "totalTime": "PT5M",
    "tool": [
      {
        "@type": "HowToTool",
        "name": "İnternet Tarayıcısı"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Metin Düzenleme ve Biçimlendirme",
        "text": "Metninizi editöre yapıştırın veya yazın. Gelişmiş düzenleme araçlarıyla metninizi profesyonelce biçimlendirin.",
        "url": "https://metineditoru.com/nasil-kullanilir/#temel-ozellikler"
      },
      {
        "@type": "HowToStep",
        "name": "Türkçe-İngilizce Karakter Dönüşümü",
        "text": "Tek tıkla Türkçe karakterleri İngilizce karakterlere veya tam tersine dönüştürün.",
        "url": "https://metineditoru.com/nasil-kullanilir/#karakter-donusumu"
      },
      {
        "@type": "HowToStep",
        "name": "HTML ve Özel Karakter Temizleme",
        "text": "Metninizi HTML etiketlerinden ve özel karakterlerden arındırın, temiz bir metin elde edin.",
        "url": "https://metineditoru.com/nasil-kullanilir/#temizleme-araclari"
      },
      {
        "@type": "HowToStep",
        "name": "Metin Sıralama ve Organizasyon",
        "text": "Metinlerinizi alfabetik veya sayısal olarak sıralayın, satırları düzenleyin.",
        "url": "https://metineditoru.com/nasil-kullanilir/#siralama-araclari"
      }
    ],
    "about": {
      "@type": "Thing",
      "name": "Metin Editörü",
      "description": "Profesyonel metin düzenleme ve dönüştürme aracı",
      "url": "https://metineditoru.com"
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Nasıl Kullanılır? - Metin Editörü Kullanım Kılavuzu</title>
        <meta name="description" content="Metin Editörü'nün tüm özelliklerini öğrenin. Türkçe-İngilizce karakter dönüşümü, HTML temizleme, metin düzenleme ve daha fazlası için kapsamlı rehber." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nasıl Kullanılır? - Metin Editörü Kullanım Kılavuzu" />
        <meta property="og:description" content="Metin Editörü'nün tüm özelliklerini öğrenin. Türkçe-İngilizce karakter dönüşümü, HTML temizleme, metin düzenleme ve daha fazlası için kapsamlı rehber." />
        <meta property="og:url" content="https://metineditoru.com/nasil-kullanilir/" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nasıl Kullanılır? - Metin Editörü Kullanım Kılavuzu" />
        <meta name="twitter:description" content="Metin Editörü'nün tüm özelliklerini öğrenin. Türkçe-İngilizce karakter dönüşümü, HTML temizleme, metin düzenleme ve daha fazlası için kapsamlı rehber." />
        
        {/* Canonical URL ve Alternatif URL'ler */}
        <link rel="canonical" href="https://metineditoru.com/nasil-kullanilir/" />
        <link rel="alternate" href="https://www.metineditoru.com/nasil-kullanilir/" />
        <link rel="alternate" href="http://metineditoru.com/nasil-kullanilir/" />
        <link rel="alternate" href="http://www.metineditoru.com/nasil-kullanilir/" />

        {/* HTTPS Yönlendirmesi */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        {/* Additional Meta Tags */}
        <meta name="keywords" content="metin editörü, metin düzenleme aracı, türkçe karakter dönüştürme, html temizleme, metin biçimlendirme, büyük küçük harf dönüşümü, satır sıralama, url kodlama" />
        <meta name="author" content="Metin Editörü" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="Turkish" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Sol Menü */}
          <div className="col-span-3">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                İçindekiler
              </h2>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection('temel-ozellikler')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'temel-ozellikler'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Temel Özellikler
                </button>
                <button
                  onClick={() => scrollToSection('buyuk-kucuk-harf')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'buyuk-kucuk-harf'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Büyük/Küçük Harf Dönüşümleri
                </button>
                <button
                  onClick={() => scrollToSection('temizleme-araclari')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'temizleme-araclari'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Temizleme Araçları
                </button>
                <button
                  onClick={() => scrollToSection('siralama-araclari')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'siralama-araclari'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Sıralama Araçları
                </button>
                <button
                  onClick={() => scrollToSection('karakter-donusumu')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'karakter-donusumu'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Karakter Dönüşümü
                </button>
                <button
                  onClick={() => scrollToSection('url-araclari')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'url-araclari'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  URL Araçları
                </button>
                <button
                  onClick={() => scrollToSection('arama-ve-degistirme')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'arama-ve-degistirme'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Arama ve Değiştirme
                </button>
                <button
                  onClick={() => scrollToSection('editor-ayarlari')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'editor-ayarlari'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Editör Ayarları
                  
                </button>
                <button
                  onClick={() => scrollToSection('kisayollar')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === 'kisayollar'
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Klavye Kısayolları
                </button>
              </nav>
            </div>
          </div>

          {/* Ana İçerik */}
          <div className="col-span-9">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Metin Editörü Nasıl Kullanılır?
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Metin Editörü'nün tüm özelliklerini keşfedin ve metinlerinizi profesyonelce düzenleyin.
            </p>

            {/* Temel Özellikler */}
            <section id="temel-ozellikler" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </span>
            Güçlü Metin Düzenleme Araçları
        </h2>
              <TemelOzellikler />
            </section>

            {/* Büyük/Küçük Harf Dönüşümleri */}
            <section id="buyuk-kucuk-harf" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
       <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        Büyük/Küçük Harf Dönüşümleri
      </h2>
              <BuyukKucukHarf />
            </section>

            {/* Temizleme Araçları */}
            <section id="temizleme-araclari" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </span>
        Metin Temizleme Araçları
      </h2>
              <TemizlemeAraclari />
            </section>

            {/* Sıralama Araçları */}
            <section id="siralama-araclari" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
      <span className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4 4 4m6 0v12m0 0l4-4m-4 4-4-4" />
         </svg>
       </span>
        Sıralama Araçları
      </h2>
              <SiralamaAraclari />
            </section>

            {/* Karakter Dönüşümü */}
            <section id="karakter-donusumu" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
       <span className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
         </svg>
       </span>
        Karakter Dönüşümü
      </h2>
              <KarakterDonusumu />
            </section>
            {/* URL Araçları */}
            <section id="url-araclari" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.99a3 3 0 00-4.242 0l-1.5 1.5m6.001-1.499a3 3 0 104.242 0l1.5-1.5m-1.757 5.669a4 4 0 105.656-5.656l-4-4a4 4 0 00-5.656 0l1.102 1.101" />
           </svg>
        </span>
        URL Araçları
      </h2>
              <URLAraclari />
            </section>

            {/* Arama ve Değiştirme */}
            <section id="arama-ve-degistirme" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-sky-500 to-sky-600 dark:from-sky-400 dark:to-sky-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
        </span>
        Arama ve Değiştirme
      </h2>
              <AramaVeDegistirme />
            </section>

            {/* Editör Ayarları */}
            <section id="editor-ayarlari" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </span>
        Kişiselleştirilebilir Editör Ayarları
      </h2>
              <EditorAyarlari />
            </section>

            {/* Klavye Kısayolları */}
            <section id="kisayollar" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
       <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
           </svg>
       </span>
        Klavye Kısayolları
      </h2>
              <Kisayollar />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HowTo 