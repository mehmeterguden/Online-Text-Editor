<div align="center">

# 📝 Online Metin Editörü

**React, TypeScript ve Vite ile geliştirilmiş güçlü, modern ve özellik açısından zengin online metin editörü**

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/Lisens-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Canlı Demo](https://img.shields.io/badge/Canlı%20Demo-metineditoru.com-green.svg)](https://metineditoru.com)
[![GitHub stars](https://img.shields.io/github/stars/mehmeterguden/Online-Text-Editor?style=social)](https://github.com/mehmeterguden/Online-Text-Editor)

[🇹🇷 Türkçe](#) | [🇺🇸 English](README.md)

---

**Zengin metin düzenleme, kod vurgulama, gerçek zamanlı istatistikler ve güçlü metin işleme araçları ile metin düzenleme deneyiminizi dönüştürün.**

> **Not**: Bu proje şeffaflık ve güven oluşturma amaçlarıyla açık kaynak yapılmıştır. Kaynak kodu sadece görüntüleme, öğrenme ve eğitim amaçlı kullanım için mevcuttur. CC BY-NC-SA 4.0 lisansı altında ticari kullanım, para kazanma veya rekabet eden hizmetler oluşturma izni verilmez.

[🚀 Canlı Demo](https://metineditoru.com) • [📖 Dokümantasyon](#-dokümantasyon) • [🤝 Katkıda Bulunma](#-katkıda-bulunma) • [🐛 Hata Bildir](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>

## ✨ Özellikler

### 🎨 **Modern Arayüz ve Deneyim**
- **Temiz, Sezgisel Tasarım**: Yumuşak animasyonlar ve geçişlerle modern UI
- **Koyu/Açık Tema**: Manuel geçersiz kılma ile otomatik tema algılama
- **Responsive Tasarım**: Masaüstü, tablet ve mobilde sorunsuz deneyim
- **Özelleştirilebilir Ayarlar**: Düzenleme ortamınızı kişiselleştirin
- **Otomatik Kaydetme**: Akıllı otomatik kaydetme ile çalışmanızı asla kaybetmeyin

### 🔧 **Gelişmiş Metin Düzenleme**
- **CKEditor 5 Entegrasyonu**: Araç çubuğu ile profesyonel kalitede zengin metin düzenleme
- **Monaco Editör**: Sözdizimi vurgulama ile VS Code benzeri kod düzenleme
- **Çift Editör Modu**: Zengin metin ve kod düzenleme arasında sorunsuz geçiş
- **Gerçek Zamanlı İstatistikler**: Canlı karakter, kelime, satır ve paragraf sayıları
- **Akıllı Biçimlendirme**: Otomatik biçimlendirme ve akıllı metin işleme

### 🧹 **Kapsamlı Metin İşleme**
- **Temizleme Araçları**: Fazla boşlukları, sekmeleri, boş satırları ve biçimlendirmeyi kaldır
- **Karakter Araçları**: Özel karakterleri dönüştür, emojileri kaldır, metni normalize et
- **İçerik Araçları**: URL'leri, e-postaları, HTML etiketlerini ve istenmeyen içeriği kaldır
- **Biçimlendirme Araçları**: Yorumları, kod bloklarını, girinti seviyelerini kaldır
- **Desen Araçları**: Belirli desenleri, tarihleri, sayıları ve formatları kaldır
- **Büyük/Küçük Harf Dönüşümü**: Metni farklı büyük/küçük harf formatları arasında dönüştür

### 🔍 **Güçlü Arama ve Değiştirme**
- **Gelişmiş Arama**: Büyük/küçük harf duyarlı/duyarsız seçeneklerle regex desteği
- **Akıllı Değiştirme**: Önizleme ile tümünü veya seçici değiştirme
- **Arama Geçmişi**: Son aramalarınızı takip edin
- **Çoklu Satır Desteği**: Birden fazla satırda arama ve değiştirme
- **Desen Eşleştirme**: Karmaşık metin desenlerini bul ve değiştir

### 📊 **Analitik ve İçgörüler**
- **Gerçek Zamanlı Analiz**: Canlı metin analizi ve istatistikleri
- **Karakter Frekansı**: Karakter dağılımını ve kullanımını analiz edin
- **Okuma Süresi**: Okuma süresini ve karmaşıklığı tahmin edin
- **İstatistikleri Dışa Aktarma**: Detaylı metin analiz raporlarını indirin
- **Kelime Bulutu**: Kelime frekansının görsel temsili

### 🌐 **Çoklu Dil ve Erişilebilirlik**
- **Unicode Desteği**: Uluslararası karakterler için tam destek
- **Klavye Kısayolları**: Özelleştirilebilir kısayollarla verimli düzenleme
- **Ekran Okuyucu Desteği**: Tüm kullanıcılar için erişilebilir tasarım
- **RTL Desteği**: Sağdan sola metin yönü desteği

## 🚀 Hızlı Başlangıç

### Gereksinimler
- **Node.js**: v18.0.0 veya üzeri
- **npm**: v8.0.0 veya üzeri (veya yarn v1.22.0+)

### Kurulum

1. **Depoyu klonlayın:**
```bash
git clone https://github.com/mehmeterguden/Online-Text-Editor.git
cd Online-Text-Editor
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
```

3. **Ortam değişkenlerini ayarlayın:**
```bash
cp .env.example .env
# .env dosyasını yapılandırmanızla düzenleyin
```

4. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
```

5. **Tarayıcıda açın:**
```
http://localhost:1234
```

## 🛠️ Geliştirme

### Mevcut Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Hot reload ile geliştirme sunucusunu başlat |
| `npm run build` | Production hazır uygulamayı oluştur |
| `npm run preview` | Production build'i yerel olarak önizle |
| `npm run lint` | Kod kalitesi kontrolü için ESLint çalıştır |
| `npm run typecheck` | TypeScript tip kontrolü çalıştır |

### Proje Mimarisi

```
src/
├── components/              # React Bileşenleri
│   ├── Editor.tsx          # Ana editör bileşeni
│   ├── EditorSettings.tsx  # Editör yapılandırması
│   ├── Toolbar.tsx         # Editör araç çubuğu
│   ├── SearchReplace.tsx   # Arama ve değiştirme işlevselliği
│   ├── Toast.tsx           # Bildirim sistemi
│   └── layout/             # Layout bileşenleri
│       ├── Header.tsx      # Uygulama başlığı
│       └── Layout.tsx      # Ana layout wrapper
├── features/               # Özellik Modülleri
│   ├── cleaning/           # Metin temizleme araçları
│   │   ├── basic/         # Temel temizleme işlemleri
│   │   ├── character/     # Karakter manipülasyonu
│   │   ├── content/       # İçerik filtreleme
│   │   ├── formatting/    # Biçimlendirme araçları
│   │   └── pattern/       # Desen eşleştirme
│   ├── editor/            # Editör işlevselliği
│   │   ├── hooks/         # Editör özel hook'ları
│   │   └── types.ts       # Editör tip tanımları
│   ├── textOperations/    # Metin işleme işlemleri
│   │   ├── operations/    # Temel metin işlemleri
│   │   └── hooks/         # Metin işleme hook'ları
│   └── theme/             # Tema yönetimi
│       ├── hooks/         # Tema hook'ları
│       └── types.ts       # Tema tipleri
├── hooks/                 # Özel React Hook'ları
├── pages/                 # Sayfa Bileşenleri
│   ├── how-to/           # Dokümantasyon sayfaları
│   └── GizlilikPolitikasi.tsx
├── styles/                # Stil Dosyaları
│   ├── components.css    # Bileşen stilleri
│   ├── index.css         # Global stiller
│   ├── theme.css         # Tema stilleri
│   └── tooltip.css       # Tooltip stilleri
└── utils/                 # Yardımcı Fonksiyonlar
    ├── cleaning.ts        # Temizleme yardımcıları
    ├── sorting.ts         # Sıralama algoritmaları
    └── turkishCase.ts     # Türkçe büyük/küçük harf dönüşümü
```

### Teknoloji Yığını

| Kategori | Teknoloji | Amaç |
|----------|-----------|------|
| **Frontend** | React 18.2.0 | UI Kütüphanesi |
| **Dil** | TypeScript 5.7.2 | Tip Güvenliği |
| **Build Aracı** | Vite 6.3.5 | Geliştirme ve Build |
| **Stil** | Tailwind CSS 3.4.17 | Utility-first CSS |
| **Editör** | CKEditor 5 | Zengin Metin Düzenleme |
| **Kod Editörü** | Monaco Editor | Kod Düzenleme |
| **UI Bileşenleri** | Ant Design | Bileşen Kütüphanesi |
| **İkonlar** | Lucide React | İkon Sistemi |
| **Routing** | React Router | Client-side Routing |

## 🔧 Yapılandırma

### Ortam Değişkenleri

Kök dizinde `.env` dosyası oluşturun:

```env
# Google AdSense Yapılandırması
VITE_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx

# Google Analytics Yapılandırması
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Site Yapılandırması
VITE_SITE_URL=https://metineditoru.com
VITE_SITE_NAME=Online Metin Editörü

# Geliştirme Yapılandırması
VITE_DEV_MODE=false
VITE_DEBUG=false
```

### Build Yapılandırması

Proje, aşağıdaki temel yapılandırmalarla Vite kullanarak build yapar:

- **TypeScript**: Kapsamlı tip kontrolü ile strict mod etkin
- **Tailwind CSS**: Özel yapılandırma ile utility-first CSS framework
- **ESLint**: React ve TypeScript kuralları ile kod kalitesi zorunluluğu
- **PostCSS**: Autoprefixer ile CSS işleme

## 🌐 Deployment

### Vercel (Önerilen)

1. **Depoyu Bağla**: GitHub deponuzu Vercel'e bağlayın
2. **Ortamı Yapılandır**: Vercel dashboard'da ortam değişkenlerini ayarlayın
3. **Deploy Et**: Ana dalda her push'ta otomatik deployment

### Diğer Platformlar

| Platform | Yapılandırma | Notlar |
|----------|--------------|--------|
| **Netlify** | Build komutu: `npm run build`<br>Yayın dizini: `dist` | GitHub entegrasyonu ile kolay kurulum |
| **GitHub Pages** | Deployment için GitHub Actions kullan | Genel depolar için ücretsiz hosting |
| **AWS S3 + CloudFront** | `dist` klasörünü S3 bucket'a yükle | Ölçeklenebilir ve hızlı global dağıtım |
| **Firebase Hosting** | Deployment için Firebase CLI kullan | Google'ın hosting platformu |

### Docker Deployment

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📱 Tarayıcı Desteği

| Tarayıcı | Sürüm | Destek |
|----------|-------|--------|
| **Chrome** | 90+ | ✅ Tam Destek |
| **Firefox** | 88+ | ✅ Tam Destek |
| **Safari** | 14+ | ✅ Tam Destek |
| **Edge** | 90+ | ✅ Tam Destek |
| **Mobil Tarayıcılar** | En Son | ✅ Responsive Tasarım |

## 🧪 Test Etme

### Testleri Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Watch modunda testleri çalıştır
npm run test:watch

# Coverage ile testleri çalıştır
npm run test:coverage
```

### Test Yapısı

```
tests/
├── unit/                 # Unit testler
├── integration/          # Entegrasyon testleri
├── e2e/                 # End-to-end testler
└── fixtures/            # Test verileri ve fixtures
```

## 📊 Performans

### Bundle Analizi

| Metrik | Değer | Hedef |
|--------|-------|-------|
| **İlk Bundle** | ~862KB | < 1MB |
| **Gzipped Boyut** | ~214KB | < 300KB |
| **İlk Boyama** | < 1.5s | < 2s |
| **Etkileşim Süresi** | < 2.5s | < 3s |

### Optimizasyon Özellikleri

- **Kod Bölme**: Daha iyi yükleme performansı için dinamik import'lar
- **Tree Shaking**: Bundle'lardan kullanılmayan kodu kaldır
- **Görsel Optimizasyonu**: Otomatik görsel sıkıştırma ve lazy loading
- **Önbellekleme**: Daha iyi performans için akıllı önbellekleme stratejileri

## 🤝 Katkıda Bulunma

Topluluktan katkıları memnuniyetle karşılıyoruz! İşte nasıl yardımcı olabileceğiniz:

### Katkıda Bulunma Yolları

- 🐛 **Hata Bildir**: Hata buldunuz mu? Detaylı bilgi ile issue açın
- 💡 **Özellik Öner**: Fikriniz var mı? Tartışmalarımızda paylaşın
- 🔧 **Sorunları Düzelt**: Bir issue alın ve pull request gönderin
- 📖 **Dokümantasyonu İyileştir**: Dokümantasyonumuzu daha iyi hale getirmeye yardım edin
- 🧪 **Test Ekle**: Test kapsamımızı iyileştirin

### Geliştirme İş Akışı

1. **Depoyu fork edin**
2. **Özellik dalı oluşturun:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Değişikliklerinizi yapın**
4. **Testleri çalıştırın:**
   ```bash
   npm test
   npm run lint
   npm run typecheck
   ```
5. **Değişikliklerinizi commit edin:**
   ```bash
   git commit -m 'feat: harika özellik ekle'
   ```
6. **Dalınızı push edin:**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Pull Request açın**

### Kod Standartları

- **TypeScript**: Strict typing kullanın ve `any`'den kaçının
- **ESLint**: ESLint yapılandırmamızı takip edin
- **Prettier**: Tutarlı kod formatlaması
- **Conventional Commits**: Conventional commit mesajları kullanın
- **Testler**: Yeni özellikler için test yazın

## 📄 Lisans

Bu proje **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

### Bu ne anlama geliyor:

- ✅ **Kaynak Kodunu Görüntüleme**: Kaynak kodunu görüntüleyebilir ve inceleyebilirsiniz
- ✅ **Öğrenme**: Eğitim ve öğrenme amaçlı kullanabilirsiniz
- ✅ **Kişisel Kullanım**: Kişisel, ticari olmayan projelerde kullanabilirsiniz
- ✅ **Paylaşım**: Uygun atıf ile paylaşabilir ve dağıtabilirsiniz
- ❌ **Ticari Kullanım**: Ticari amaçlar veya kâr için kullanamazsınız
- ❌ **Rekabet Eden Siteler**: Rekabet eden metin editörü siteleri oluşturamazsınız
- ❌ **Para Kazanma**: Bu projeden para kazanamaz veya monetize edemezsiniz

## 🙏 Teşekkürler

Bu proje, bu harika açık kaynak kütüphaneleri olmadan mümkün olmazdı:

| Kütüphane | Amaç | Lisans |
|-----------|------|--------|
| [React](https://reactjs.org/) | UI Kütüphanesi | MIT |
| [TypeScript](https://www.typescriptlang.org/) | Tip Güvenliği | Apache 2.0 |
| [Vite](https://vitejs.dev/) | Build Aracı | MIT |
| [CKEditor 5](https://ckeditor.com/) | Zengin Metin Editörü | GPL-2.0 |
| [Monaco Editor](https://microsoft.github.io/monaco-editor/) | Kod Editörü | MIT |
| [Tailwind CSS](https://tailwindcss.com/) | CSS Framework | MIT |
| [Ant Design](https://ant.design/) | UI Bileşenleri | MIT |
| [Lucide React](https://lucide.dev/) | İkonlar | ISC |

## 📞 Destek ve İletişim

### Yardım Alma

- 📖 **Dokümantasyon**: Kapsamlı dokümantasyonumuzu kontrol edin
- 💬 **Tartışmalar**: GitHub Tartışmalarımıza katılın
- 🐛 **Sorunlar**: Hata bildirin veya özellik isteyin
- 📧 **E-posta**: GitHub profili üzerinden iletişim

### Topluluk

- **GitHub**: [@mehmeterguden](https://github.com/mehmeterguden)
- **Website**: [metineditoru.com](https://metineditoru.com)
- **Canlı Demo**: [Şimdi dene](https://metineditoru.com)

## 🌟 Desteğinizi Gösterin

Bu projeyi faydalı buluyorsanız, lütfen:

- ⭐ **Depoyu yıldızlayın**
- 🍴 **Projeyi fork edin**
- 🐛 **Hata bildirin**
- 💡 **Yeni özellikler önerin**
- 🤝 **Kod katkısında bulunun**
- 📢 **Başkalarıyla paylaşın**

---

<div align="center">

**Modern web teknolojileri ve ❤️ ile yapıldı**

[🚀 Canlı Demo](https://metineditoru.com) • [📖 Dokümantasyon](#-dokümantasyon) • [🐛 Hata Bildir](https://github.com/mehmeterguden/Online-Text-Editor/issues) • [💡 Özellik İste](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>