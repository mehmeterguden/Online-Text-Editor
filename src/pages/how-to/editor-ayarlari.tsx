import React from 'react'

const EditorAyarlari = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
        Metin editörü deneyiminizi kişiselleştirin ve tercihlerinize göre özelleştirin. Tema seçenekleri, yazı tipi ayarları ve görünüm seçenekleri ile size en uygun
        çalışma ortamını oluşturun. Editörünüzü tamamen kendi stilinize göre ayarlayın.
      </p>

      <div className="space-y-6">
          {/* Tema Ayarları */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
              <span className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 10a4 4 0 01-4-4 4 4 0 01-4 4 4 4 0 014 4 4 4 0 014-4z" />
         </svg>
      </span>
                <h3 className="text-xl font-semibold">Tema Ayarları</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Açık ve koyu tema seçenekleriyle editörünüzün görünümünü özelleştirerek gözlerinizi koruyun.
              </p>
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm space-y-2">
                  <p>
                      <b>Tema Seçimi:</b> Editörünüzün genel renk şemasını (açık veya koyu) belirleyebilirsiniz. Bu ayar, farklı çalışma ortamlarına uyum sağlamanıza ve göz yorgunluğunu azaltmanıza yardımcı olur. Editörün arkaplanı, yazı renkleri ve diğer arayüz elemanları seçtiğiniz temaya göre ayarlanır.
                  </p>
                 
              </div>
            </div>

          {/* Yazı Tipi Ayarları */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <span className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                 </svg>
              </span>
            <h3 className="text-xl font-semibold">Yazı Tipi Ayarları</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Farklı yazı tipleri, boyutları, satır yükseklikleri ve harf aralıkları ile metinlerinizi özelleştirin.
            </p>
           
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm space-y-2">
                  <p>
                     <b>Yazı Tipi Seçimi:</b> Aşağıdaki yazı tipleri arasından seçim yapabilirsiniz:
                      <ul className="list-disc ml-4">
                        <li>JetBrains Mono</li>
                        <li>Fira Code</li>
                        <li>Source Code Pro</li>
                        <li>Consolas</li>
                        <li>Monaco</li>
                        <li>Menlo</li>
                        <li>Ubuntu Mono</li>
                        <li>Roboto Mono</li>
                        <li>IBM Plex Mono</li>
                       </ul>
                  </p>
                  <p>
                    <b>Yazı Boyutu:</b> Metinlerin yazı boyutunu, 8 ile 72 piksel arasında seçebilirsiniz. Ön tanımlı boyutları (XS, S, M, L, XL) kullanabileceğiniz gibi özel bir değer de girebilirsiniz.
                  </p>
                  <p>
                      <b>Satır Yüksekliği:</b> Satırlar arasındaki boşluğu 1 ile 3 katı arasında olacak şekilde ayarlayabilirsiniz. Ön tanımlı değerleri(XS,S,M,L,XL) kullanabileceğiniz gibi özel bir değer de girebilirsiniz.
                  </p>
                  <p>
                      <b>Harf Aralığı:</b> Karakterler arasındaki boşluğu 0 ile 2 piksel arasında olacak şekilde ayarlayabilirsiniz. Ön tanımlı değerleri(XS,S,M,L,XL) kullanabileceğiniz gibi özel bir değer de girebilirsiniz.
                  </p>
              </div>
          </div>

        {/* Görünüm Ayarları */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
           <div className="flex items-center mb-4">
              <span className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Görünüm Ayarları</h3>
            </div>
             <p className="text-gray-600 dark:text-gray-400 mb-4">
                 Editörünüzün görünümünü satır numaraları, kelime kaydırma, mini harita gibi özelliklerle istediğiniz gibi ayarlayın.
            </p>
           <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm space-y-2">
             
                 <p>
                    <b>Kelime Kaydırma:</b> Uzun satırların otomatik olarak bir sonraki satıra geçmesini sağlayarak metnin ekrana sığmasını sağlar. Bu seçenek aktif olduğunda, satırlar otomatik olarak bir sonraki satıra kaydırılır.
                  </p>
                  <p>
                     <b>Satır Numaraları:</b> Editörün sol tarafında satır numaralarının görünür olup olmayacağını belirler. Bu özellik, özellikle kod blokları ile çalışırken satırları takip etmeyi kolaylaştırır.
                   </p>
                   <p>
                    <b>Mini Harita:</b> Editörün sağ tarafında, metnin genel yapısını gösteren küçük bir harita görünmesini sağlar. Bu özellik, özellikle uzun metinlerde gezinmeyi kolaylaştırır.
                  </p>
                 <p>
                    <b>Yumuşak Kaydırma:</b> Sayfa kaydırma animasyonlarını daha akıcı hale getirir, böylece daha yumuşak ve doğal bir kaydırma deneyimi yaşarsınız.
                  </p>
                  <p>
                    <b>Parantez Renklendirme:</b> Kod yazarken parantez çiftlerinin eşleşmelerini kolayca görmenizi sağlamak için, parantezleri farklı renklerde gösterir. Bu, kod yazarken parantezlerin takibini kolaylaştırır ve hataları azaltır.
                  </p>
                 <p>
                    <b>Girinti Kılavuzları:</b> Kod bloklarınızın daha düzenli ve okunabilir olması için dikey girinti çizgilerini görüntüler.
                  </p>
                <p>
                    <b>Otomatik Parantez Kapatma:</b> Parantez açtığınızda, editör otomatik olarak parantezin kapanışını ekler. Bu, kod yazım hızınızı artırırken parantez hatalarını azaltmaya yardımcı olur.
                  </p>
                  <p>
                    <b>Otomatik Tırnak Kapatma:</b> Tırnak işaretleri açtığınızda, editör otomatik olarak tırnağın kapanışını ekler. Bu, metinleri yazarken tırnak hatalarını azaltmaya yardımcı olur.
                 </p>
                 <p>
                    <b>Otomatik Sarmalama:</b> Seçtiğiniz metinleri parantez veya tırnak işaretleri içine otomatik olarak alır. Bu özellik, metinleri hızlıca biçimlendirmenize olanak tanır.
                   </p>
                 <p>
                    <b>Yapıştırırken Düzenle:</b> Yapıştırdığınız metni otomatik olarak düzenleyerek biçimlendirme ve girinti hatalarını giderir, böylece metinleriniz her zaman düzgün görünür.
                  </p>
                  <p>
                      <b>Tıklanabilir Bağlantılar:</b> Metin içerisindeki bağlantıları (URL) otomatik olarak tıklanabilir hale getirir. Bu sayede, bağlantılara kolayca erişebilirsiniz.
                  </p>
                  <p>
                     <b>Fare ile Yakınlaştırma:</b> Ctrl tuşuna basılı tutarak fare tekerleği ile yakınlaştırma ve uzaklaştırma yapmanızı sağlar.
                   </p>
                   <p>
                     <b>Belirsiz Karakterleri Vurgula:</b> Metinde olası karışıklıklara yol açabilecek belirsiz Unicode karakterlerini vurgular. Bu sayede metin içinde fark edilmeyen karakterlerin tespit edilmesi kolaylaşır.
                    </p>
                   <p>
                      <b>Görünmez Karakterleri Vurgula:</b> Boşluk, tab veya satır sonu gibi görünmeyen karakterleri vurgular. Bu sayede metinlerinizi daha temiz hale getirebilirsiniz.
                    </p>
                    <p>
                      <b>ASCII Dışı Karakterleri Vurgula:</b> Temel ASCII karakterleri dışındaki tüm karakterleri vurgular, böylece metin içinde özel karakterleri kolayca görebilirsiniz.
                    </p>
                  <p>
                      <b>Görünmez Karakterler:</b> Boşluk ve sekme gibi görünmez karakterlerin nasıl gösterileceğini kontrol etmenizi sağlar (Hiç gösterme, Sadece satır başı ve sonunda göster veya Hepsini göster).
                   </p>
                   <p>
                       <b>Tab Boyutu:</b> Tab tuşuna bastığınızda editörde kaç boşlukluk bir girinti oluşacağını belirler (1-8 arası).
                     </p>
                    <p>
                      <b>İmleç Stili:</b> Editördeki imlecin stilini (çizgi, blok veya alt çizgi) değiştirmenize imkan tanır.
                    </p>
                     <p>
                       <b>İmleç Genişliği:</b> Editördeki imlecin kalınlığını (1-5 arası) ayarlamanızı sağlar.
                     </p>
                </div>
           </div>
        </div>
      </div>
  )
}

export default EditorAyarlari