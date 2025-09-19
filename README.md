# 📝 Modern Metin Editörü

Modern, kullanıcı dostu ve güçlü özelliklere sahip bir metin editörü uygulaması. React, TypeScript ve Vite teknolojileri ile geliştirilmiştir.

## ✨ Özellikler

- 🎨 **Modern Arayüz**: Temiz ve kullanıcı dostu tasarım
- 🔧 **Gelişmiş Editör**: CKEditor 5 entegrasyonu
- 🧹 **Metin Temizleme**: Çeşitli temizleme araçları
- 🔍 **Arama ve Değiştirme**: Güçlü arama ve değiştirme özellikleri
- 📊 **İstatistikler**: Karakter, kelime ve satır sayıları
- 🌙 **Tema Desteği**: Açık/koyu tema seçenekleri
- 📱 **Responsive**: Mobil uyumlu tasarım
- ⚡ **Hızlı**: Vite ile optimize edilmiş performans

## 🚀 Kurulum

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/mehmeterguden/Metin-Editoru.git
cd Metin-Editoru
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

# Önizleme
npm run preview
```

### Proje Yapısı

```
src/
├── components/          # React bileşenleri
├── features/           # Özellik modülleri
│   ├── cleaning/       # Metin temizleme araçları
│   ├── editor/         # Editör ayarları
│   ├── textOperations/ # Metin işlemleri
│   └── theme/          # Tema yönetimi
├── hooks/              # Custom React hooks
├── pages/              # Sayfa bileşenleri
├── styles/             # CSS stilleri
└── utils/              # Yardımcı fonksiyonlar
```

## 🔧 Yapılandırma

### Ortam Değişkenleri

`.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değerleri doldurun:

```env
VITE_GOOGLE_ADSENSE_CLIENT_ID=your-adsense-id
VITE_GOOGLE_ANALYTICS_ID=your-analytics-id
VITE_SITE_URL=https://your-domain.com
VITE_SITE_NAME=Your Site Name
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Geliştirici**: Mehmet Ergüden
- **GitHub**: [@mehmeterguden](https://github.com/mehmeterguden)
- **Website**: [metineditoru.com](https://metineditoru.com)

## 🙏 Teşekkürler

Bu proje aşağıdaki açık kaynak projelerden yararlanmıştır:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [CKEditor 5](https://ckeditor.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!