import React from 'react'

const TemizlemeAraclari = () => {
  return (
    <div className="space-y-8">

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Metinlerinizi gereksiz boşluklardan, karakterlerden ve formatlardan arındırın. Metin temizleme araçlarımız, verilerinizi daha düzenli ve okunabilir hale getirmenize yardımcı olur.
      </p>

      <div className="space-y-8">
        {/* Boşluk Temizleme */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">1</span>
            <h4 className="text-lg font-semibold">Boşluk Temizleme</h4>
          </div>
          <div className="space-y-6">
          <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l5-5m0 0l5-5m-5 5v14" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Boş satırları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki ardışık boş satırları (yalnızca satır başı karakteri içeren satırları) temizler. Metinlerinizde satır boşluklarını düzenlemek için idealdir.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-blue-600 dark:text-blue-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Satır 1.{'\n'}
                              {'\n'}
                              {'\n'}
                              Satır 2. {'\n'}
                              {'\n'}
                              Satır 3.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full p-2.5 shadow-md">
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
                              Satır 1.{'\n'}
                              Satır 2.{'\n'}
                              Satır 3.
                            </div>
                          </div>
                      </div>
                  </div>
                    </div>
                  </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-1m3 1v-3m3 1v-5m-3 3h4m-6 0h2m-2 0h0M6 19a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Fazla boşlukları sil (Tab hariç)</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Metninizdeki tab karakterleri dışındaki birden fazla ardışık boşluğu tek boşluğa çevirir. Metin düzenlemede sıklıkla kullanılır. Tab karakterleri korunur.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        <h6 className="font-medium text-blue-600 dark:text-blue-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               Boşluklar  	çok    	 fazla.	 Tab  karakteri	 korundu.
                              </div>
                          </div>

                            <div className="flex items-center justify-center">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full p-2.5 shadow-md">
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
                              Boşluklar çok fazla. Tab karakteri korundu.
                            </div>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
              </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v-2m6 2v-2M5 9H3m16 0h-2M5 15H3m16 0h-2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Fazla boşlukları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki birden fazla ardışık boşluğu ve tab karakterini tek boşluğa dönüştürür. Metinlerdeki gereksiz boşlukları ve tabları temizler.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-blue-600 dark:text-blue-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Boşluklar   	ve		 tablar   çok    fazla.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full p-2.5 shadow-md">
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
                            Boşluklar ve tablar çok fazla.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Satır başı/sonu boşlukları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Her satırın başındaki ve sonundaki boşluk karakterlerini temizler. Metin düzenlemede sıkça kullanılır.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-blue-600 dark:text-blue-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                          <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                            Girdi
                          </div>
                          <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {' '}  Boşluklar başta  ve sonda.   {'  \n'}
                            İkinci  satırda  da   aynı    şey   var. {'   \n'}
                            Temizlensin  lütfen.   {' '}
                          </div>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full p-2.5 shadow-md">
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
                            Boşluklar başta ve sonda.{'\n'}
                            İkinci satırda da aynı şey var.{'\n'}
                            Temizlensin lütfen.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Tab karakterlerini sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm tab karakterlerini kaldırır. Özellikle kod blokları ve hizalanmış metinler için kullanışlıdır.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-blue-600 dark:text-blue-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Tab	karakterleri	var. {'\n'}
                              	Her	satır	tabla	başlıyor.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full p-2.5 shadow-md">
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
                              Tab karakterleri var.{'\n'}
                             Her satır tabla başlıyor.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Tüm boşlukları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm boşluk karakterlerini (normal boşluklar, tablar, satır başları vb.) temizler. Metni sıkıştırır ve boşluklardan arındırır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-blue-600 dark:text-blue-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                              <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                                Girdi
                              </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Boşluk 	tab  ve satır	başı   var. {'\n'}
                              Hepsini temizle.
                            </div>
                            </div>

                            <div className="flex items-center justify-center">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full p-2.5 shadow-md">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </div>
                            </div>

                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-green-100 dark:border-green-900/50 transition-all duration-300 hover:shadow-lg  hover:border-green-200 dark:hover:border-green-800">
                              <div className="absolute -top-3 left-4 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                                Çıktı
                              </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Boşluktabvesatırbaşıvar.{'\n'}
                              Hepsitemizle.
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

        {/* Satır Temizleme */}
         <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">2</span>
            <h4 className="text-lg font-semibold">Satır Temizleme</h4>
          </div>
         <div className="space-y-6">
         <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Ardışık boş satırları birleştir</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Ardışık boş satırları tek bir boş satıra dönüştürür. Metinlerdeki gereksiz boşlukları azaltır.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-purple-600 dark:text-purple-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                          <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                            Girdi
                          </div>
                          <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Satır 1.{'\n'}
                            {'\n'}
                            {'\n'}
                            Satır 2.{'\n'}
                            {'\n'}
                             {'\n'}
                            Satır 3.
                          </div>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full p-2.5 shadow-md">
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
                            Satır 1.{'\n'}
                            {'\n'}
                            Satır 2.{'\n'}
                             {'\n'}
                            Satır 3.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </li>
             <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Tab karakterlerini sil</h5>
                     <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm tab karakterlerini kaldırır. Özellikle kod blokları ve hizalanmış metinler için kullanışlıdır.
                     </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-purple-600 dark:text-purple-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                          <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                            Girdi
                          </div>
                           <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Tab	ile   başlayan  satır. {'\n'}
                            	Başka	tablı   satır.
                          </div>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full p-2.5 shadow-md">
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
                            Tab ile başlayan satır.{'\n'}
                             Başka tablı satır.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
               <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Gizli karakterleri sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizdeki görünmeyen kontrol karakterlerini kaldırır. Metinlerinizi daha temiz ve hatasız hale getirir.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-purple-600 dark:text-purple-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                          <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                            Girdi
                          </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Gizli karakterler  {'\u0007'} içeriyor. {'\u0008'}
                            Temizlenmesi  gerek.
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full p-2.5 shadow-md">
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
                            Gizli karakterler içeriyor.{'\n'}
                             Temizlenmesi gerek.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
               <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Satır sonu noktalama sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Her satırın sonundaki noktalama işaretlerini (.,!?) temizler. Metinlerinizi daha düzenli hale getirir.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-purple-600 dark:text-purple-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               Noktalı satır., {'\n'}
                              Soru işaretli satır? {'\n'}
                             Ünlemli satır!
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full p-2.5 shadow-md">
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
                              Noktalı satır{'\n'}
                             Soru işaretli satır{'\n'}
                             Ünlemli satır
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Boş ve boşluklu satırları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm boş ve sadece boşluk içeren satırları kaldırır. Veri temizliğinde önemli bir adımdır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-purple-600 dark:text-purple-400 text-lg">Örnek Kullanım</h6>
                      </div>
                         <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                           <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                             Satır 1.{'\n'}
                             {' '}
                            {'\n'}
                             Satır 2.{'\n'}
                              	 {'\n'}
                              Satır 3.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full p-2.5 shadow-md">
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
                               Satır 1.{'\n'}
                               Satır 2.{'\n'}
                               Satır 3.
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
               <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4 4 4m7 8v-4m0 4l3-3m-3 3-3-3" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Liste işaretlerini sil</h5>
                     <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Satır başlarındaki liste işaretlerini (-, *, 1., a. vb.) temizler. Veri analizinde ve metin düzenlemede yardımcı olur.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-purple-600 dark:text-purple-400 text-lg">Örnek Kullanım</h6>
                      </div>
                     <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                          <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                             - Liste  öğesi 1 {'\n'}
                            * Liste  öğesi 2 {'\n'}
                             1. Liste  öğesi 3
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full p-2.5 shadow-md">
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
                             Liste öğesi 1 {'\n'}
                             Liste öğesi 2 {'\n'}
                             Liste öğesi 3
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
          {/* KARAKTER Temizleme */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">3</span>
            <h4 className="text-lg font-semibold">Karakter Temizleme</h4>
          </div>

          <div className="space-y-6">
           <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                   <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.75V16.5l-7.5-4.5-7.5 4.5V3.75m15 0h-15" />
                     </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Emoji ve sembolleri sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm emoji ve sembolleri temizler. Metinlerinizi daha sade ve profesyonel hale getirir.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-green-600 dark:text-green-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                           <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                             Emoji 😃 ve semboller 🚀 var.
                            </div>
                          </div>

                           <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full p-2.5 shadow-md">
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
                              Emoji ve semboller var.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                 </div>
              </li>
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                 <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                     </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">ASCII olmayan karakterleri sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizdeki ASCII olmayan özel karakterleri kaldırır. Veri işleme ve uyumluluk sorunlarını giderir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-green-600 dark:text-green-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            ASCII olmayan karakterler:  你好, こんにちは, 안녕하세요
                           </div>
                           </div>

                           <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full p-2.5 shadow-md">
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
                              ASCII olmayan karakterler: , ,
                            </div>
                         </div>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
               <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                 <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Kontrol karakterlerini sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki kontrol karakterlerini (örneğin, satır sonları, tablar) temizler. Metinlerinizi daha hatasız hale getirir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-green-600 dark:text-green-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                         <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Kontrol {String.fromCharCode(1)} karakterleri {String.fromCharCode(2)} var.
                          </div>
                         </div>

                         <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full p-2.5 shadow-md">
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
                              Kontrol karakterleri var.
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
         {/* İçerik Temizleme */}
         <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">4</span>
            <h4 className="text-lg font-semibold">İçerik Temizleme</h4>
          </div>
           <div className="space-y-6">
              <ul className="list-none space-y-4">
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                   <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 10h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8a2 2 0 00-2 2v4a2 2 0 002 2z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Tekrarlayan satırları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki birebir aynı olan tekrarlayan satırları kaldırır. Veri setlerindeki tekrarı önlemek için idealdir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-amber-600 dark:text-amber-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               Tekrar eden satır.{'\n'}
                               Tekrar eden satır.{'\n'}
                               Farklı bir satır.{'\n'}
                            </div>
                         </div>

                         <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-full p-2.5 shadow-md">
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
                              Tekrar eden satır.{'\n'}
                              Farklı bir satır.
                           </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">URL'leri sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm URL (web adresi) bağlantılarını temizler. Web adreslerini metinden ayırmak için idealdir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-amber-600 dark:text-amber-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              URL içeren metin: https://example.com {'\n'}
                              Başka bir URL: www.test.org
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-full p-2.5 shadow-md">
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
                             URL içeren metin:{'\n'}
                              Başka bir URL:
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
               </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                   <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">E-posta adreslerini sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm e-posta adreslerini temizler. İletişim bilgilerini metinden ayırmak için kullanışlıdır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-amber-600 dark:text-amber-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            E-posta adresi: test@example.com {'\n'}
                             Başka bir e-posta: mail@test.org
                            </div>
                         </div>

                         <div className="flex items-center justify-center">
                           <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-full p-2.5 shadow-md">
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
                              E-posta adresi:{'\n'}
                              Başka bir e-posta:
                            </div>
                         </div>
                        </div>
                    </div>
                  </div>
                </div>
                </li>
                 <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mr-4">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Markdown formatını sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm markdown formatlamalarını (**, *, #,  vb.) temizler. Markdown yazımını düz metne çevirmek için kullanılır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-amber-600 dark:text-amber-400 text-lg">Örnek Kullanım</h6>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                         <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            **Kalın** ve *italik* yazı. {'\n'}
                             # Başlık ve - liste.
                             </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-full p-2.5 shadow-md">
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
                              Kalın ve italik yazı.{'\n'}
                              Başlık ve - liste.
                            </div>
                           </div>
                      </div>
                    </div>
                  </div>
                 </div>
                </li>
                 <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                 <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mr-4">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm2 0v14h10V5H7z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">CSS stillerini sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizdeki CSS stil tanımlamalarını (örneğin, {'</style>'} etiketleri ve inline stiller) temizler. Metinleri temiz HTML'ye dönüştürmek için kullanılır.
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-amber-600 dark:text-amber-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                             {'<style>'} body {'color: red;'} {'</style>'}
                             {'<p style="font-size:16px;">'} Stilli metin {'</p>'}
                           </div>
                           </div>

                           <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-full p-2.5 shadow-md">
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
                             Stilli metin
                             </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
               </li>
                 <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Script kodlarını sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki JavaScript kodlarını içeren {'<script>'} etiketlerini temizler. Metinlerinizdeki gömülü kodları ayıklamak için idealdir.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-amber-600 dark:text-amber-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {'<script>'}  alert('Merhaba'); {'</script>'}
                             Metin içeriği.
                            </div>
                         </div>

                         <div className="flex items-center justify-center">
                           <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-full p-2.5 shadow-md">
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
                            Metin içeriği.
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
         {/* Format Temizleme */}
         <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">5</span>
            <h4 className="text-lg font-semibold">Format Temizleme</h4>
          </div>
           <div className="space-y-6">
            <ul className="list-none space-y-4">
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                 <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex items-center justify-center mr-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.764 1.764 0 01-1.764 1.764H4.764A1.764 1.764 0 013 20.24V5.882a1.764 1.764 0 011.764-1.764h5.472A1.764 1.764 0 0111 5.882z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Satır numaralarını sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki satırların başındaki numaraları kaldırır. Kod veya liste gibi satır numaralı metinler için kullanışlıdır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-rose-600 dark:text-rose-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                           <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              1. Satır bir. {'\n'}
                              2. Satır iki. {'\n'}
                              3. Satır üç.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700 rounded-full p-2.5 shadow-md">
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
                              Satır bir.{'\n'}
                              Satır iki.{'\n'}
                              Satır üç.
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
               <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                   <span className="flex-shrink-0 w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m10 0h-4m-3 4h3m-3-4h3" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Tırnak içindeki metinleri sil</h5>
                     <p className="text-gray-600 dark:text-gray-400 mb-4">
                       Metninizdeki tek veya çift tırnak içindeki metinleri temizler. Metin analizi ve düzenlemede faydalıdır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-rose-600 dark:text-rose-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Metinde 'tırnak içi' var. {"\n"}
                             Bir de "çift tırnak" var.
                             </div>
                           </div>

                           <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700 rounded-full p-2.5 shadow-md">
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
                             Metinde var.{'\n'}
                             Bir de var.
                           </div>
                           </div>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                   <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Parantez içindeki metinleri sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tüm parantez içindeki metinleri temizler. Parantezler arasındaki notları ayıklamak için kullanılır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-rose-600 dark:text-rose-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                              <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                Parantez (içi) var. {"\n"}
                                Başka (metin) de var.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700 rounded-full p-2.5 shadow-md">
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
                                Parantez var.{'\n'}
                                Başka de var.
                             </div>
                            </div>
                       </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                   <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex items-center justify-center mr-4">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Kod bloklarını sil</h5>
                     <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki {'<code>'} veya ``` ile işaretlenmiş kod bloklarını temizler. Kod içeren metinleri düzenlemek için kullanışlıdır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-rose-600 dark:text-rose-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                           <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               Kod {'<code >'} bloğu {'</code>'} var. {"\n"}
                               ```javascript  \n console.log('kod'); ```
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700 rounded-full p-2.5 shadow-md">
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
                              Kod bloğu var.{'\n'}
                               
                            </div>
                         </div>
                        </div>
                    </div>
                  </div>
                 </div>
                </li>
                 <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Girinti düzeylerini sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki satır başındaki girintileri temizler. Metinleri daha temiz ve düzenli hale getirir.
                    </p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-rose-600 dark:text-rose-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                   Girintili {"\n"}
                                     satır.{"\n"}
                                    Daha da{"\n"}
                                 girintili.
                            </div>
                            </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700 rounded-full p-2.5 shadow-md">
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
                               Girintili{'\n'}
                                satır.{'\n'}
                                 Daha da{'\n'}
                               girintili.
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
         {/* Pattern Temizleme */}
         <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mr-3 text-white font-bold text-xl shadow-lg">6</span>
            <h4 className="text-lg font-semibold">Pattern Temizleme</h4>
          </div>
            <div className="space-y-6">
                <ul className="list-none space-y-4">
                 <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Tarih formatındakileri sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki tarihleri (gün/ay/yıl, ay/gün/yıl vb.) temizler. Tarih içeren metinleri düzenlemek için idealdir.
                    </p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-indigo-600 dark:text-indigo-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                             Tarih 2023-10-26 var.{'\n'}
                             Başka 10/27/2023 tarih var.
                             </div>
                           </div>

                           <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-full p-2.5 shadow-md">
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
                             Tarih var.{'\n'}
                             Başka tarih var.
                             </div>
                            </div>
                        </div>
                     </div>
                  </div>
                 </div>
                </li>
                  <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                      <div className="flex items-start mb-4">
                         <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v17m-6-6h12" />
                            </svg>
                         </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Sayısal satırları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki sadece sayı içeren satırları temizler. Sayısal verileri ayıklamak için kullanışlıdır.
                    </p>
                     <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-indigo-600 dark:text-indigo-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                          <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              Sayısal 123 satır. {'\n'}
                              Sadece 456. {'\n'}
                                Başka 789 satır.
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-full p-2.5 shadow-md">
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
                              Sayısal satır.{'\n'}
                              Sadece.{'\n'}
                              Başka satır.
                             </div>
                           </div>
                        </div>
                    </div>
                  </div>
                  </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v17m-6-6h12" />
                      </svg>
                    </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Alfabetik satırları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Metninizdeki sadece harf içeren satırları temizler. Metin analizi ve düzenlemede faydalıdır.
                    </p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-indigo-600 dark:text-indigo-400 text-lg">Örnek Kullanım</h6>
                      </div>
                        <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                            <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            Harfli satır. {'\n'}
                              Sadece harfler. {'\n'}
                            Karışık bir satır 123.
                           </div>
                            </div>

                            <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-full p-2.5 shadow-md">
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
                              Harfli satır.{'\n'}
                              Sadece harfler.{'\n'}
                             Karışık bir satır 123.
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </li>
                 <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                     <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v17m-6-6h12" />
                        </svg>
                     </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Büyük harfli satırları sil</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Metninizdeki sadece büyük harflerden oluşan satırları temizler. Büyük harf içeren özel başlıkları düzenlemek için kullanışlıdır.
                    </p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-indigo-600 dark:text-indigo-400 text-lg">Örnek Kullanım</h6>
                      </div>
                       <div className="flex flex-col md:flex-row gap-6 items-stretch">
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                             <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            BÜYÜK HARFLERLE YAZILMIŞ SATIR. {'\n'}
                            Normal satır. {'\n'}
                              YİNE BÜYÜK HARFLİ.
                             </div>
                            </div>

                            <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-full p-2.5 shadow-md">
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
                             Normal satır. {'\n'}
                            </div>
                         </div>
                        </div>
                    </div>
                  </div>
                  </div>
                </li>
                <li className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mr-4">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v17m-6-6h12" />
                       </svg>
                      </span>
                  <div>
                    <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Küçük harfli satırları sil</h5>
                     <p className="text-gray-600 dark:text-gray-400 mb-4">
                       Metninizdeki sadece küçük harflerden oluşan satırları temizler. Küçük harf içeren metinleri ayıklamak için kullanışlıdır.
                     </p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h6 className="font-medium text-indigo-600 dark:text-indigo-400 text-lg">Örnek Kullanım</h6>
                      </div>
                         <div className="flex flex-col md:flex-row gap-6 items-stretch">
                             <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-5 relative border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800">
                            <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                              Girdi
                            </div>
                              <div className="font-mono text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                               küçük harflerle yazılmış satır. {'\n'}
                              Normal Satır. {'\n'}
                               yine küçük harfli.
                            </div>
                           </div>

                           <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-full p-2.5 shadow-md">
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
                              Normal Satır.{'\n'}
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

export default TemizlemeAraclari