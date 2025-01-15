import React from 'react'

const AramaVeDegistirme = () => {
  return (
    <div className="space-y-8">

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Metninizde gelişmiş arama yapın ve istediğiniz değişiklikleri uygulayın. Arama ve değiştirme araçlarıyla metinlerinizi kolayca düzenleyin.
      </p>

       <div className="space-y-8">
        {/* Arama ve Değiştirme */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">1</span>
            <h4 className="text-lg font-semibold">Arama ve Değiştirme</h4>
          </div>
         <div className="space-y-6">
            <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-sky-100 dark:bg-sky-900/50 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <div>
                      <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Arama ve Değiştirme İşlemleri</h5>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                         Metin içinde arama yapabilir, bulduğunuz kelime ya da ifadeleri kolayca değiştirebilirsiniz. Gelişmiş seçeneklerle arama ve değiştirme işlemlerini özelleştirin.
                      </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-sky-600 dark:text-sky-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      
                        <div className="mb-4">
                           <div className="font-medium text-gray-700 dark:text-gray-300">
                            Arama Metni
                           </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line bg-gray-100 dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                             eski
                            </div>
                         </div>

                         <div className="mb-4">
                           <div className="font-medium text-gray-700 dark:text-gray-300">
                            Değiştirme Metni
                           </div>
                           <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line bg-gray-100 dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                             yeni
                           </div>
                         </div>
                          <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                             Bu eski bir metin.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-sky-500 to-sky-600 dark:from-sky-600 dark:to-sky-700 rounded-full p-2.5 shadow-md">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>

                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-green-100 dark:border-green-900/50 transition-all duration-300 hover:shadow-lg hover:border-green-200 dark:hover:border-green-800">
                            <div className="absolute -top-3 left-4 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                              Çıktı
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               Bu yeni bir metin.
                             </div>
                           </div>
                        </div>
                       
                      <div className="mt-4 flex items-center justify-end gap-2">
                           <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200" title="Bul">
                            Bul
                          </button>
                         <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200" title="Değiştir">
                           Değiştir
                         </button>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200" title="Tümünü Değiştir">
                          Tümünü Değiştir
                       </button>
                      </div>
                    </div>
                      {/* Özelliklerin Paragraf Açıklamaları */}
                      <div className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                            <p>
                               <b>Büyük/küçük harf duyarlı:</b> Bu seçenek, arama işleminin büyük harf ve küçük harf ayrımına dikkat edilerek yapılmasını sağlar. Örneğin, "Metin" ve "metin" kelimeleri bu seçenek aktif olduğunda farklı olarak değerlendirilir.
                            </p>
                            <p>
                               <b>Tam kelime:</b> Bu seçenek aktif olduğunda, arama işlemi sadece tam kelimeleri bulur. Örneğin, "el" kelimesi arandığında "eleman" kelimesindeki "el" bölümünü değil, sadece "el" kelimesini bulur.
                            </p>
                           <p>
                                <b>Regex kullan:</b> Bu seçenek, arama işlemi sırasında düzenli ifadelerin (regex) kullanılmasını sağlar. Bu sayede, karmaşık arama kalıpları belirleyebilirsiniz (örneğin: "a[0-9]+b" gibi).
                            </p>
                              {/* Butonların Paragraf Açıklamaları */}
                            <p>
                             <b>Bul:</b> Bu butona tıkladığınızda, ilk eşleşen metin bulunur ve işaretlenir.
                            </p>
                            <p>
                             <b>Değiştir:</b> Bu butona tıkladığınızda, ilk eşleşen metin değiştirme metni ile değiştirilir.
                            </p>
                             <p>
                              <b>Tümünü Değiştir:</b> Bu butona tıkladığınızda, metindeki tüm eşleşenler değiştirme metni ile değiştirilir.
                            </p>
                         </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AramaVeDegistirme