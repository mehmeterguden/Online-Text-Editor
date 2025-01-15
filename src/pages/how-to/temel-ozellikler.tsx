import React from 'react'

const TemelOzellikler = () => {
  return (
    <div className="grid gap-12">
      {/* Metin Düzenleme */}
      <section>

        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Metinlerinizi kolayca düzenleyebileceğiniz kullanıcı dostu arayüzümüz ile tanışın.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Metin Düzenleme Kartı */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <span className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
              <h4 className="text-lg font-semibold">Hızlı ve Kolay Metin Düzenleme</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                Modern ve kullanıcı dostu arayüz ile metinlerinizi kolayca düzenleyin.
            </p>
             <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
               Sezgisel ve kolay arayüz
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Otomatik kaydetme ile güvenli düzenleme
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Geri alma ve ileri alma araçları
              </li>
            </ul>
          </div>

          {/* Arama ve Değiştirme Kartı */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <span className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <h4 className="text-lg font-semibold">Gelişmiş Arama ve Değiştirme</h4>
            </div>
           <p className="text-gray-600 dark:text-gray-400 mb-4">
              Gelişmiş arama ve değiştirme özellikleriyle metinlerinizde hassas ve hızlı değişiklikler yapın.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Akıllı ve hızlı arama motoru
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Toplu değiştirme seçenekleri
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                 <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Karmaşık aramalar için regex desteği
              </li>
            </ul>
          </div>

          {/* Dosya İşlemleri Kartı */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <span className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <h4 className="text-lg font-semibold">Kolay Dosya Yönetimi</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
             Metin dosyalarınızı kolaylıkla yönetin ve paylaşın.
            </p>
            <ul className="space-y-2">
             <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Metin dosyalarını kolayca indirme
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tarayıcıdan yazdırma desteği
              </li>
               <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Belgelerinizi otomatik olarak yedekleyin
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TemelOzellikler