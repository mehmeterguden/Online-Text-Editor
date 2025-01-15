import React from 'react'

const Kisayollar = () => {
  return (
    <div className="space-y-8">

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Editörü daha hızlı ve verimli kullanmak için klavye kısayollarını öğrenin. Bu kısayollar, metin düzenleme sürecinizi hızlandıracak ve daha akıcı hale getirecektir.
      </p>

       <div className="space-y-6">
        {/* Kısayollar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
        
          <div className="space-y-6">
            
              {/* Temel Düzenleme Kısayolları */}
              <div className="space-y-4">
                  <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Temel Düzenleme Kısayolları</h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Bu kısayollar, editördeki en temel işlemleri hızlıca yapmanızı sağlar. Metin düzenleme süreçlerinizde sıklıkla kullanacağınız bu kısayollar, verimliliğinizi artırır.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Geri Al</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + Z</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + Z</span>
                      </span>
                     <span className="text-gray-500 dark:text-gray-400 text-sm italic">Son yapılan işlemi geri alır</span>
                   </li>
                     <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">İleri Al</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                       <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + Y</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + Shift + Z</span>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm italic">Geri alınan işlemi tekrar yapar</span>
                   </li>
                    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                     <span className="font-medium text-gray-700 dark:text-gray-300">Kes</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                       <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + X</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + X</span>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm italic">Seçili metni keser</span>
                   </li>
                    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                       <span className="font-medium text-gray-700 dark:text-gray-300">Kopyala</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + C</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + C</span>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm italic">Seçili metni kopyalar</span>
                   </li>
                    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Yapıştır</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                       <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + V</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + V</span>
                      </span>
                       <span className="text-gray-500 dark:text-gray-400 text-sm italic">Kopyalanan metni yapıştırır</span>
                   </li>
                     <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Tümünü Seç</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                         <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + A</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + A</span>
                      </span>
                     <span className="text-gray-500 dark:text-gray-400 text-sm italic">Tüm metni seçer</span>
                    </li>
                </ul>
             </div>

              {/* Arama ve Değiştirme Kısayolları */}
              <div className="space-y-4">
                  <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Arama ve Değiştirme Kısayolları</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Bu kısayollar, metin içinde arama yapmayı, değiştirmeyi ve eşleşmeler arasında geçiş yapmayı kolaylaştırır.
                   </p>
                  <ul className="list-none space-y-2">
                     <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Bul</span>
                         <span className="font-mono text-gray-500 dark:text-gray-400">
                           <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + F</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + F</span>
                          </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">Arama penceresini açar</span>
                   </li>
                   <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Değiştir</span>
                         <span className="font-mono text-gray-500 dark:text-gray-400">
                           <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + H</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + H</span>
                          </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">Değiştirme penceresini açar</span>
                   </li>
                   <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Sonraki Eşleşme</span>
                        <span className="font-mono text-gray-500 dark:text-gray-400">
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">F3</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + G</span>
                          </span>
                         <span className="text-gray-500 dark:text-gray-400 text-sm italic">Sonraki eşleşmeye gider</span>
                   </li>
                    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Önceki Eşleşme</span>
                        <span className="font-mono text-gray-500 dark:text-gray-400">
                            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Shift + F3</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + Shift + G</span>
                          </span>
                         <span className="text-gray-500 dark:text-gray-400 text-sm italic">Önceki eşleşmeye gider</span>
                  </li>
                </ul>
             </div>

              {/* Görünüm Kısayolları */}
               <div className="space-y-4">
                 <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Görünüm Kısayolları</h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Bu kısayollar, editörün görünümünü yakınlaştırarak ya da uzaklaştırarak kolayca ayarlamanızı sağlar.
                  </p>
                   <ul className="list-none space-y-2">
                     <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Yakınlaştır</span>
                        <span className="font-mono text-gray-500 dark:text-gray-400">
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + Fare Tekerleği Yukarı</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + Fare Tekerleği Yukarı</span>
                         </span>
                         <span className="text-gray-500 dark:text-gray-400 text-sm italic">Yazı boyutunu büyütür</span>
                     </li>
                     <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Uzaklaştır</span>
                       <span className="font-mono text-gray-500 dark:text-gray-400">
                         <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + Fare Tekerleği Aşağı</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + Fare Tekerleği Aşağı</span>
                       </span>
                       <span className="text-gray-500 dark:text-gray-400 text-sm italic">Yazı boyutunu küçültür</span>
                     </li>
                   </ul>
              </div>

               {/* Çoklu İmleç ve Seçim Kısayolları */}
              <div className="space-y-4">
                <h5 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">Çoklu İmleç ve Seçim Kısayolları</h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                   Bu kısayollar, metin içinde daha hızlı düzenlemeler yapmanızı ve birden fazla noktada değişiklikler yapmanızı sağlar.
                   </p>
                  <ul className="list-none space-y-2">
                    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Çoklu İmleç</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Alt + Tıklama</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌥ + Tıklama</span>
                      </span>
                     <span className="text-gray-500 dark:text-gray-400 text-sm italic">Birden fazla noktada düzenleme yapar</span>
                    </li>
                      <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                       <span className="font-medium text-gray-700 dark:text-gray-300">Kelime Seçimi</span>
                      <span className="font-mono text-gray-500 dark:text-gray-400">
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + D</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + D</span>
                       </span>
                       <span className="text-gray-500 dark:text-gray-400 text-sm italic">Aynı kelimeleri seçer</span>
                    </li>
                      <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-md p-3 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Satır Seçimi</span>
                        <span className="font-mono text-gray-500 dark:text-gray-400">
                         <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm mr-1">Ctrl + L</span> / <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">⌘ + L</span>
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">Bulunulan satırı seçer</span>
                      </li>
                 </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kisayollar