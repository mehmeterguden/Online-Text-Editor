<div align="center">

# 📝 Online Metin Editörü

**Türkiye'nin En Gelişmiş Online Metin Editörü**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Canlı Demo](https://img.shields.io/badge/Canlı%20Demo-metineditoru.com-green.svg)](https://metineditoru.com)

[🇹🇷 Türkçe](#) | [🇺🇸 English](README.md)

---

**React, TypeScript ve Vite ile geliştirilmiş güçlü, modern ve özellik açısından zengin online metin editörü. Bu, Türkiye'nin en gelişmiş online metin editörünün açık kaynak versiyonudur.**

</div>

## ✨ Özellikler

### 🎨 **Modern Arayüz**
- Temiz, sezgisel tasarım ve koyu/açık tema desteği
- Tüm cihazlarda çalışan responsive tasarım
- Özelleştirilebilir editör ayarları

### 🔧 **Gelişmiş Editör**
- **CKEditor 5 Entegrasyonu**: Profesyonel kalitede zengin metin düzenleme
- **Monaco Editör**: Sözdizimi vurgulama ile kod düzenleme
- **Gerçek Zamanlı İstatistikler**: Karakter, kelime ve satır sayıları
- **Otomatik Kaydetme**: Çalışmanızı asla kaybetmeyin

### 🧹 **Metin İşleme Araçları**
- **Temizleme Araçları**: Fazla boşlukları, sekmeleri, boş satırları kaldır
- **Karakter Araçları**: Özel karakterleri dönüştür, emojileri kaldır
- **İçerik Araçları**: URL'leri, e-postaları, HTML etiketlerini kaldır
- **Biçimlendirme Araçları**: Yorumları, kod bloklarını, girintileri kaldır
- **Desen Araçları**: Belirli desenleri ve formatları kaldır

### 🔍 **Arama ve Değiştirme**
- Regex desteği ile gelişmiş arama
- Büyük/küçük harf duyarlı seçenekler
- Tümünü değiştir veya seçici değiştirme
- Arama geçmişi

### 📊 **Analitik ve İstatistikler**
- Gerçek zamanlı metin analizi
- Karakter frekans analizi
- Kelime sayısı ve okuma süresi tahmini
- İstatistikleri dışa aktarma

### 🌐 **Çoklu Dil Desteği**
- Türkçe dil optimizasyonu
- Unicode desteği
- Özel karakter işleme

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum

1. **Depoyu klonlayın:**
```bash
git clone https://github.com/mehmeterguden/Online-Text-Editor.git
cd Online-Text-Editor
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:1234
```

## 🛠️ Geliştirme

### Mevcut Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Kod kalitesi kontrolü
npm run lint

# TypeScript tip kontrolü
npm run typecheck

# Production build önizleme
npm run preview
```

### Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Editor.tsx      # Ana editör bileşeni
│   ├── Toolbar.tsx     # Editör araç çubuğu
│   └── layout/          # Layout bileşenleri
├── features/           # Özellik modülleri
│   ├── cleaning/       # Metin temizleme araçları
│   ├── editor/         # Editör ayarları
│   ├── textOperations/ # Metin işlemleri
│   └── theme/          # Tema yönetimi
├── hooks/              # Özel React hook'ları
├── pages/              # Sayfa bileşenleri
├── styles/             # CSS stilleri
└── utils/              # Yardımcı fonksiyonlar
```

## 🔧 Yapılandırma

### Ortam Değişkenleri

`.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değerleri doldurun:

```env
# Google AdSense Yapılandırması
VITE_GOOGLE_ADSENSE_CLIENT_ID=your-adsense-id

# Google Analytics Yapılandırması
VITE_GOOGLE_ANALYTICS_ID=your-analytics-id

# Site Yapılandırması
VITE_SITE_URL=https://metineditoru.com
VITE_SITE_NAME=Online Metin Editörü
```

### Build Yapılandırması

Proje build için Vite kullanır. Ana yapılandırma dosyaları:
- `vite.config.ts` - Vite yapılandırması
- `tsconfig.json` - TypeScript yapılandırması
- `tailwind.config.js` - Tailwind CSS yapılandırması

## 🌐 Deployment

### Vercel (Önerilen)

1. GitHub deponuzu Vercel'e bağlayın
2. Vercel dashboard'da ortam değişkenlerini ayarlayın
3. Her push'ta otomatik deploy

### Diğer Platformlar

Proje herhangi bir statik hosting servisine deploy edilebilir:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📱 Tarayıcı Desteği

- Chrome (en son)
- Firefox (en son)
- Safari (en son)
- Edge (en son)
- Mobil tarayıcılar

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. **Depoyu fork edin**
2. **Özellik dalı oluşturun:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Değişikliklerinizi commit edin:**
   ```bash
   git commit -m 'Harika özellik ekle'
   ```
4. **Dalı push edin:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Pull Request açın**

### Geliştirme Kuralları

- TypeScript en iyi uygulamalarını takip edin
- Anlamlı commit mesajları kullanın
- Yeni özellikler için test ekleyin
- Dokümantasyonu güncelleyin
- Mevcut kod stilini takip edin

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

Bu proje aşağıdaki açık kaynak kütüphaneleri kullanır:

- [React](https://reactjs.org/) - UI kütüphanesi
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenliği
- [Vite](https://vitejs.dev/) - Build aracı
- [CKEditor 5](https://ckeditor.com/) - Zengin metin editörü
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Kod editörü
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Ant Design](https://ant.design/) - UI bileşenleri

## 📞 İletişim

- **Geliştirici**: Mehmet Ergüden
- **GitHub**: [@mehmeterguden](https://github.com/mehmeterguden)
- **Website**: [metineditoru.com](https://metineditoru.com)
- **E-posta**: GitHub üzerinden iletişim

## 🌟 Destek

Bu projeyi faydalı buluyorsanız, lütfen:

- ⭐ Depoyu yıldızlayın
- 🐛 Hata bildirin
- 💡 Yeni özellikler önerin
- 🤝 Kod katkısında bulunun

---

<div align="center">

**Türkiye'de ❤️ ile yapıldı**

[Canlı Demo'yu Ziyaret Et](https://metineditoru.com) | [Hata Bildir](https://github.com/mehmeterguden/Online-Text-Editor/issues) | [Özellik İste](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>
