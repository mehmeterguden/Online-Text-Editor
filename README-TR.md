<div align="center">

# 📝 Online Metin Editörü

**React, TypeScript ve Vite ile geliştirilmiş güçlü, modern ve özellik açısından zengin online metin editörü**

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/Lisens-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Canlı Demo](https://img.shields.io/badge/Canlı%20Demo-metineditoru.com-green.svg)](https://metineditoru.com)

[🇹🇷 Türkçe](#) | [🇺🇸 English](README.md)

---

**Zengin metin düzenleme, kod vurgulama, gerçek zamanlı istatistikler ve güçlü metin işleme araçları ile metin düzenleme deneyiminizi dönüştürün.**

> **Not**: Bu proje şeffaflık ve güven oluşturma amaçlarıyla açık kaynak yapılmıştır. Kaynak kodu sadece görüntüleme, öğrenme ve eğitim amaçlı kullanım için mevcuttur. CC BY-NC-SA 4.0 lisansı altında ticari kullanım, para kazanma veya rekabet eden hizmetler oluşturma izni verilmez.

</div>

## ✨ Özellikler

### 🎨 **Modern Arayüz**
- Koyu/açık tema desteği ile temiz, sezgisel tasarım
- Tüm cihazlarda çalışan responsive tasarım
- Gerçek zamanlı istatistikler ve metin analizi
- Otomatik kaydetme işlevselliği

### 🔧 **Gelişmiş Metin Düzenleme**
- **CKEditor 5 Entegrasyonu**: Profesyonel kalitede zengin metin düzenleme
- **Monaco Editör**: Sözdizimi vurgulama ile VS Code benzeri kod düzenleme
- **Çift Editör Modu**: Zengin metin ve kod düzenleme arasında geçiş
- **Akıllı Biçimlendirme**: Otomatik biçimlendirme ve akıllı metin işleme

### 🧹 **Kapsamlı Metin İşleme**
- **Temizleme Araçları**: Fazla boşlukları, sekmeleri, boş satırları kaldır
- **Karakter Araçları**: Özel karakterleri dönüştür, emojileri kaldır
- **İçerik Araçları**: URL'leri, e-postaları, HTML etiketlerini kaldır
- **Biçimlendirme Araçları**: Yorumları, kod bloklarını, girintileri kaldır
- **Desen Araçları**: Belirli desenleri ve formatları kaldır
- **Büyük/Küçük Harf Dönüşümü**: Metni farklı büyük/küçük harf formatları arasında dönüştür

### 🔍 **Arama ve Değiştirme**
- Regex desteği ile gelişmiş arama
- Büyük/küçük harf duyarlı/duyarsız seçenekler
- Tümünü veya seçici değiştirme
- Arama geçmişi ve çoklu satır desteği

### 📊 **Analitik ve İstatistikler**
- Gerçek zamanlı metin analizi
- Karakter frekans analizi
- Okuma süresi tahmini
- İstatistikleri dışa aktarma ve kelime bulutu görselleştirme

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

3. **Ortam değişkenlerini ayarlayın:**
```bash
cp .env.example .env
# .env dosyasını yapılandırmanızla düzenleyin
```

4. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
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

### Proje Yapısı

```
src/
├── components/          # React Bileşenleri
│   ├── Editor.tsx      # Ana editör bileşeni
│   ├── Toolbar.tsx     # Editör araç çubuğu
│   └── layout/         # Layout bileşenleri
├── features/           # Özellik Modülleri
│   ├── cleaning/       # Metin temizleme araçları
│   ├── editor/         # Editör işlevselliği
│   ├── textOperations/ # Metin işleme işlemleri
│   └── theme/          # Tema yönetimi
├── hooks/              # Özel React Hook'ları
├── pages/              # Sayfa Bileşenleri
├── styles/             # Stil Dosyaları
└── utils/              # Yardımcı Fonksiyonlar
```

## 🔧 Teknoloji Yığını

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

## 🌐 Deployment

### Vercel (Önerilen)

1. GitHub deponuzu Vercel'e bağlayın
2. Vercel dashboard'da ortam değişkenlerini ayarlayın
3. Ana dalda her push'ta otomatik deployment

### Diğer Platformlar

| Platform | Yapılandırma |
|----------|--------------|
| **Netlify** | Build komutu: `npm run build`<br>Yayın dizini: `dist` |
| **GitHub Pages** | Deployment için GitHub Actions kullan |
| **AWS S3 + CloudFront** | `dist` klasörünü S3 bucket'a yükle |

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
```

## 📱 Tarayıcı Desteği

| Tarayıcı | Sürüm | Destek |
|----------|-------|--------|
| **Chrome** | 90+ | ✅ Tam Destek |
| **Firefox** | 88+ | ✅ Tam Destek |
| **Safari** | 14+ | ✅ Tam Destek |
| **Edge** | 90+ | ✅ Tam Destek |

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Lütfen şu adımları izleyin:

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

- TypeScript en iyi uygulamalarını takip edin
- Anlamlı commit mesajları kullanın
- Yeni özellikler için test ekleyin
- Mevcut kod stilini takip edin

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

Bu proje aşağıdaki açık kaynak kütüphaneleri kullanır:

- [React](https://reactjs.org/) - UI kütüphanesi
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenliği
- [Vite](https://vitejs.dev/) - Build aracı
- [CKEditor 5](https://ckeditor.com/) - Zengin metin editörü
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Kod editörü
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Ant Design](https://ant.design/) - UI bileşenleri

---

<div align="center">

[🚀 Canlı Demo](https://metineditoru.com) • [🐛 Hata Bildir](https://github.com/mehmeterguden/Online-Text-Editor/issues) • [💡 Özellik İste](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>