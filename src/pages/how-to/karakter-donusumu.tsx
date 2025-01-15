import React from 'react'

const KarakterDonusumu = () => {
  return (
    <div className="space-y-8">

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Metinlerinizdeki karakterleri dönüştürme araçlarıyla kolayca düzenleyin. Türkçe ve İngilizce karakter dönüşümleri yaparak metinlerinizi istediğiniz formata getirin.
      </p>

      <div className="space-y-8">
        {/* Karakter Dönüşümü */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">1</span>
            <h4 className="text-lg font-semibold">Karakter Dönüşümü</h4>
          </div>
          <div className="space-y-6">
            <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Türkçe karakterleri İngilizce karakterlere dönüştür</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki Türkçe karakterleri (ç, ğ, ı, i, ö, ş, ü) karşılık gelen İngilizce karakterlere (c, g, i, i, o, s, u) dönüştürür. Türkçe metinleri uluslararası standartlara uygun hale getirir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-orange-600 dark:text-orange-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Türkçe karakterler: ç, ğ, ı, i, ö, ş, ü{'\n'}
                              Örnek cümle: Bugün çok güzel bir gün.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-full p-2.5 shadow-md">
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
                             Turkce karakterler: c, g, i, i, o, s, u{'\n'}
                             Ornek cumle: Bugun cok guzel bir gun.
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                 <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">İngilizce karakterleri Türkçe karakterlere dönüştür</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki İngilizce karakterleri (c, g, i, o, s, u) karşılık gelen Türkçe karakterlere (ç, ğ, ı, ö, ş, ü) dönüştürür. İngilizce klavye ile yazılmış metinleri Türkçeye çevirir.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-orange-600 dark:text-orange-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                         <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Ingilizce karakterler: c, g, i, o, s, u{'\n'}
                              Ornek cumle: Bugun cok guzel bir gun.
                            </div>
                         </div>

                         <div className="flex items-center justify-center">
                           <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-full p-2.5 shadow-md">
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
                             Türkçe karakterler: ç, ğ, ı, ö, ş, ü{'\n'}
                              Örnek çümle: Bügün çok güzel bir gün.
                            </div>
                           </div>
                      </div>
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

export default KarakterDonusumu