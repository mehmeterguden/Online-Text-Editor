import React from 'react'

const SiralamaAraclari = () => {
  return (
    <div className="space-y-8">

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Metinlerinizi sıralama araçlarımızla kolayca düzenleyin. Verilerinizi alfabetik, uzunluk veya rastgele sıralama yöntemleri ile organize edin.
      </p>

      <div className="space-y-8">
        {/* Sıralama Araçları */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">1</span>
            <h4 className="text-lg font-semibold">Sıralama Araçları</h4>
          </div>
          <div className="space-y-6">
          <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 8h18M3 12h18M3 16h18" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Metni A'dan Z'ye sırala</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizi alfabetik olarak A'dan Z'ye doğru sıralar. Metinlerinizdeki satırları düzenlemek için mükemmel bir araçtır.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-teal-600 dark:text-teal-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              c satırı{'\n'}
                              a satırı{'\n'}
                              b satırı
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-full p-2.5 shadow-md">
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
                              a satırı{'\n'}
                              b satırı{'\n'}
                              c satırı
                            </div>
                          </div>
                      </div>
                  </div>
                    </div>
                  </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 4H3m18 4H3m18 4H3m18 4H3" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Metni Z'den A'ya sırala</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                       Metninizi alfabetik olarak Z'den A'ya doğru sıralar. Verilerinizi tersten sıralamak istediğinizde idealdir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-teal-600 dark:text-teal-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              c satırı{'\n'}
                              a satırı{'\n'}
                              b satırı
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-full p-2.5 shadow-md">
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
                              c satırı{'\n'}
                              b satırı{'\n'}
                              a satırı
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                 <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4 4 4m6 0v12m0 0l4-4m-4 4-4-4" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Satırları kısadan uzuna sırala</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki satırları, karakter sayılarına göre kısadan uzuna doğru sıralar. Metinlerinizi uzunluklarına göre düzenleyin.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-teal-600 dark:text-teal-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              kısa{'\n'}
                              uzunca bir satır{'\n'}
                              orta uzunlukta
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-full p-2.5 shadow-md">
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
                             kısa{'\n'}
                             orta uzunlukta{'\n'}
                              uzunca bir satır
                             </div>
                           </div>
                      </div>
                    </div>
                  </div>
                </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m10 0h-4m-3 4h3m-3-4h3" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Satırları uzundan kısaya sırala</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizdeki satırları, karakter sayılarına göre uzundan kısaya doğru sıralar. Verilerinizi uzunluklarına göre tersine sıralamak için kullanışlıdır.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-teal-600 dark:text-teal-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                              <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               kısa{'\n'}
                               uzunca bir satır{'\n'}
                               orta uzunlukta
                             </div>
                            </div>

                            <div className="flex items-center justify-center">
                              <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-full p-2.5 shadow-md">
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
                               uzunca bir satır{'\n'}
                               orta uzunlukta{'\n'}
                               kısa
                             </div>
                           </div>
                       </div>
                    </div>
                  </div>
                </div>
              </li>
               <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Satırları rastgele sırala</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizdeki satırları rastgele sıralar. Verilerinizi karıştırarak farklı bir düzen elde etmek için idealdir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-teal-600 dark:text-teal-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                         <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            birinci satır{'\n'}
                            ikinci satır{'\n'}
                             üçüncü satır
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-full p-2.5 shadow-md">
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
                              ikinci satır{'\n'}
                            üçüncü satır{'\n'}
                              birinci satır
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

export default SiralamaAraclari