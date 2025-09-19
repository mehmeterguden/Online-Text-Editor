<div align="center">

# 📝 Online Text Editor

**Turkey's Most Advanced Online Text Editor**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-metineditoru.com-green.svg)](https://metineditoru.com)

[🇹🇷 Türkçe](README-TR.md) | [🇺🇸 English](#)

---

**A powerful, modern, and feature-rich online text editor built with React, TypeScript, and Vite. This is the open-source version of Turkey's most advanced online text editor.**

</div>

## ✨ Features

### 🎨 **Modern Interface**
- Clean, intuitive design with dark/light theme support
- Responsive layout that works on all devices
- Customizable editor settings

### 🔧 **Advanced Editor**
- **CKEditor 5 Integration**: Professional-grade rich text editing
- **Monaco Editor**: Code editing with syntax highlighting
- **Real-time Statistics**: Character, word, and line counts
- **Auto-save**: Never lose your work

### 🧹 **Text Processing Tools**
- **Cleaning Tools**: Remove extra spaces, tabs, empty lines
- **Character Tools**: Convert special characters, remove emojis
- **Content Tools**: Remove URLs, emails, HTML tags
- **Formatting Tools**: Remove comments, code blocks, indentation
- **Pattern Tools**: Remove specific patterns and formats

### 🔍 **Search & Replace**
- Advanced search with regex support
- Case-sensitive/insensitive options
- Replace all or selective replacement
- Search history

### 📊 **Analytics & Statistics**
- Real-time text analysis
- Character frequency analysis
- Word count and reading time estimation
- Export statistics

### 🌐 **Multi-language Support**
- Turkish language optimized
- Unicode support
- Special character handling

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mehmeterguden/Online-Text-Editor.git
cd Online-Text-Editor
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:1234
```

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Code quality check
npm run lint

# TypeScript type checking
npm run typecheck

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/          # React components
│   ├── Editor.tsx      # Main editor component
│   ├── Toolbar.tsx    # Editor toolbar
│   └── layout/         # Layout components
├── features/           # Feature modules
│   ├── cleaning/       # Text cleaning tools
│   ├── editor/         # Editor settings
│   ├── textOperations/ # Text operations
│   └── theme/          # Theme management
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── styles/             # CSS styles
└── utils/              # Utility functions
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```env
# Google AdSense Configuration
VITE_GOOGLE_ADSENSE_CLIENT_ID=your-adsense-id

# Google Analytics Configuration
VITE_GOOGLE_ANALYTICS_ID=your-analytics-id

# Site Configuration
VITE_SITE_URL=https://metineditoru.com
VITE_SITE_NAME=Online Text Editor
```

### Build Configuration

The project uses Vite for building. Key configuration files:
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project uses the following open-source libraries:

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [CKEditor 5](https://ckeditor.com/) - Rich text editor
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Ant Design](https://ant.design/) - UI components

## 📞 Contact

- **Developer**: Mehmet Ergüden
- **GitHub**: [@mehmeterguden](https://github.com/mehmeterguden)
- **Website**: [metineditoru.com](https://metineditoru.com)
- **Email**: Contact through GitHub

## 🌟 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---

<div align="center">

**Made with ❤️ in Turkey**

[Visit Live Demo](https://metineditoru.com) | [Report Bug](https://github.com/mehmeterguden/Online-Text-Editor/issues) | [Request Feature](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>