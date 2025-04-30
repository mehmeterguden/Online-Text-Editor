import React from 'react';

export default function GizlilikPolitikasi() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-light-text dark:text-dark-text mb-8">Gizlilik Politikası</h1>
      
      <div className="space-y-8 text-light-text-secondary dark:text-dark-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">1. Giriş ve Tanımlar</h2>
          <p>
            Bu gizlilik politikası, Metin Editörü ("uygulama", "biz", "bizim") tarafından sağlanan hizmetlerin kullanımı sırasında uygulanan veri işleme prensiplerini açıklamaktadır. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat hükümlerine uygun olarak hazırlanmıştır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">2. Veri İşleme Prensipleri</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tüm metin düzenleme işlemleri tarayıcınızda gerçekleşir</li>
            <li>Hiçbir kişisel veri veya metin içeriği sunucularımıza gönderilmez</li>
            <li>Düzenlediğiniz metinler yalnızca tarayıcı belleğinde geçici olarak tutulur</li>
            <li>Tarayıcı sekmesini kapattığınızda tüm veriler silinir</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">3. Yerel Depolama Kullanımı</h2>
          <p>
            Uygulamamız yalnızca aşağıdaki temel tercihleri tarayıcınızın yerel deposunda saklar:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Tema tercihi (açık/koyu tema)</li>
            <li>Editör ayarları (yazı tipi boyutu gibi görünüm tercihleri)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">4. Çerezler</h2>
          <p>
            Bu uygulama hiçbir çerez kullanmamaktadır. Tüm işlevsellik tarayıcınızın yerel depolama özelliği ile sağlanmaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">5. Geri Bildirim Sistemi</h2>
          <p>
            Geri bildirim formumuz aracılığıyla bizimle paylaştığınız bilgiler (isim, e-posta adresi ve mesajınız) yalnızca sizinle iletişim kurmak ve geri bildiriminizi değerlendirmek amacıyla kullanılır. Bu bilgiler güvenli bir şekilde saklanır ve üçüncü taraflarla paylaşılmaz.
          </p>
          <p className="mt-2">
            Geri bildirim formunda e-posta adresinizi paylaşmayı tercih etmeniz durumunda, size yanıt vermek için kullanılacaktır. E-posta adresinizi paylaşmadan da geri bildirimde bulunabilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">6. Veri Güvenliği</h2>
          <p>
            Uygulamamız, kullanıcı verilerinin güvenliğini sağlamak için gerekli tüm teknik ve idari tedbirleri almaktadır. Verileriniz tarayıcınızda şifrelenmiş olarak saklanır ve üçüncü tarafların erişimine karşı korunur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">7. Kullanıcı Hakları</h2>
          <p>
            KVKK kapsamında, kişisel verilerinizle ilgili olarak:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Verilerinizin düzeltilmesini veya silinmesini isteme</li>
            <li>Verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li>Verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">8. İletişim</h2>
          <p>
            Bu gizlilik politikası hakkında sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz:
          </p>
          <div className="mt-2">
            <a href="mailto:iletisim@metineditoru.com" className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300">
              iletisim@metineditoru.com
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">9. Güncellemeler</h2>
          <p>
            Bu gizlilik politikası, yasal gereklilikler veya hizmet değişiklikleri doğrultusunda güncellenebilir. Önemli değişiklikler olması durumunda, kullanıcılarımız uygulama arayüzünde bilgilendirilecektir.
          </p>
          <p className="mt-2">
            Son güncelleme: 30 Nisan 2025
          </p>
        </section>
      </div>
    </div>
  );
} 