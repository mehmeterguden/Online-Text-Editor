import React from 'react';

export default function GizlilikPolitikasi() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-light-text dark:text-dark-text mb-8">Gizlilik Politikası</h1>
      
      <div className="space-y-8 text-light-text-secondary dark:text-dark-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Genel Bilgilendirme</h2>
          <p>
            Bu metin editörü, kullanıcı gizliliğini en üst düzeyde tutan, tamamen tarayıcı tabanlı bir uygulamadır. 
            Metinleriniz ve düzenlemeleriniz yalnızca tarayıcınızda işlenir, hiçbir sunucuya gönderilmez veya saklanmaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Veri İşleme</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tüm metin düzenleme işlemleri tarayıcınızda gerçekleşir</li>
            <li>Hiçbir kişisel veri veya metin içeriği sunucularımıza gönderilmez</li>
            <li>Düzenlediğiniz metinler yalnızca tarayıcı belleğinde geçici olarak tutulur</li>
            <li>Tarayıcı sekmesini kapattığınızda tüm veriler silinir</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Yerel Depolama Kullanımı</h2>
          <p>
            Uygulamamız yalnızca aşağıdaki temel tercihleri tarayıcınızın yerel deposunda saklar:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Tema tercihi (açık/koyu tema)</li>
            <li>Editör ayarları (yazı tipi boyutu gibi görünüm tercihleri)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Çerezler</h2>
          <p>
            Bu uygulama hiçbir çerez kullanmamaktadır. Tüm işlevsellik tarayıcınızın yerel depolama özelliği ile sağlanmaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">İletişim</h2>
          <p>
            Bu gizlilik politikası hakkında sorularınız için aşağıdaki iletişim kanallarını kullanabilirsiniz:
          </p>
          <div className="mt-2">
            <a href="mailto:contact@example.com" className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300">
              contact@example.com
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Güncellemeler</h2>
          <p>
            Bu gizlilik politikası, uygulamamızın gelişimine paralel olarak güncellenebilir. 
            Önemli değişiklikler olması durumunda kullanıcılarımız bilgilendirilecektir.
          </p>
          <p className="mt-2">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>
        </section>
      </div>
    </div>
  );
} 