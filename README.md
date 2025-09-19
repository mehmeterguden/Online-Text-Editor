<div align="center">

# 📝 Online Text Editor

**A powerful, modern, and feature-rich online text editor built with React, TypeScript, and Vite**

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Website](https://img.shields.io/badge/Website-metineditoru.com-green.svg)](https://metineditoru.com)

[🇹🇷 Türkçe](README-TR.md) | [🇺🇸 English](#)

---

**This is the source code of metineditoru.com - a powerful online text editor featuring rich text editing, code highlighting, real-time statistics, and comprehensive text processing tools.**

> **Note**: This project is open-sourced for transparency and trust-building purposes. The source code is available for viewing, learning, and educational use only. Commercial use, monetization, or creating competing services is not permitted under the CC BY-NC-SA 4.0 license.

</div>

## ✨ Features

### 🎨 **Modern Interface**
- Clean, intuitive design with dark/light theme support
- Responsive layout that works on all devices
- Real-time statistics and text analysis
- Auto-save functionality

### 🔧 **Advanced Text Editing**
- **CKEditor 5 Integration**: Professional-grade rich text editing
- **Monaco Editor**: VS Code-like code editing with syntax highlighting
- **Dual Editor Mode**: Switch between rich text and code editing
- **Smart Formatting**: Auto-formatting and intelligent text processing

### 🧹 **Comprehensive Text Processing**
- **Cleaning Tools**: Remove extra spaces, tabs, empty lines
- **Character Tools**: Convert special characters, remove emojis
- **Content Tools**: Remove URLs, emails, HTML tags
- **Formatting Tools**: Remove comments, code blocks, indentation
- **Pattern Tools**: Remove specific patterns and formats
- **Case Conversion**: Transform text between different case formats

### 🔍 **Search & Replace**
- Advanced search with regex support
- Case-sensitive/insensitive options
- Replace all or selective replacement
- Search history and multi-line support

### 📊 **Analytics & Statistics**
- Real-time text analysis
- Character frequency analysis
- Reading time estimation
- Export statistics and word cloud visualization

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

3. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open in browser:**
```
http://localhost:1234
```

## 🛠️ Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run typecheck` | Run TypeScript type checking |

### Project Structure

```
src/
├── components/          # React Components
│   ├── Editor.tsx      # Main editor component
│   ├── Toolbar.tsx     # Editor toolbar
│   └── layout/         # Layout components
├── features/           # Feature Modules
│   ├── cleaning/       # Text cleaning tools
│   ├── editor/         # Editor functionality
│   ├── textOperations/ # Text processing operations
│   └── theme/          # Theme management
├── hooks/              # Custom React Hooks
├── pages/              # Page Components
├── styles/             # Styling
└── utils/              # Utility Functions
```

## 🔧 Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18.2.0 | UI Library |
| **Language** | TypeScript 5.7.2 | Type Safety |
| **Build Tool** | Vite 6.3.5 | Development & Build |
| **Styling** | Tailwind CSS 3.4.17 | Utility-first CSS |
| **Editor** | CKEditor 5 | Rich Text Editing |
| **Code Editor** | Monaco Editor | Code Editing |
| **UI Components** | Ant Design | Component Library |
| **Icons** | Lucide React | Icon System |

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms

| Platform | Configuration |
|----------|---------------|
| **Netlify** | Build command: `npm run build`<br>Publish directory: `dist` |
| **GitHub Pages** | Use GitHub Actions for deployment |
| **AWS S3 + CloudFront** | Upload `dist` folder to S3 bucket |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Google AdSense Configuration
VITE_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx

# Google Analytics Configuration
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=https://metineditoru.com
VITE_SITE_NAME=Online Text Editor
```

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| **Chrome** | 90+ | ✅ Full Support |
| **Firefox** | 88+ | ✅ Full Support |
| **Safari** | 14+ | ✅ Full Support |
| **Edge** | 90+ | ✅ Full Support |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests:**
   ```bash
   npm test
   npm run lint
   npm run typecheck
   ```
5. **Commit your changes:**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
6. **Push to your branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Standards

- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Follow the existing code style

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ **View Source**: View and study the source code
- ✅ **Learn**: Use for educational and learning purposes
- ✅ **Personal Use**: Use in personal, non-commercial projects
- ✅ **Share**: Share and distribute with proper attribution
- ❌ **Commercial Use**: Cannot use for commercial purposes or profit
- ❌ **Competing Sites**: Cannot create competing text editor websites
- ❌ **Monetization**: Cannot monetize or earn money from this project

## 🙏 Acknowledgments

This project uses the following open-source libraries:

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [CKEditor 5](https://ckeditor.com/) - Rich text editor
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Ant Design](https://ant.design/) - UI components

---

<div align="center">

[🌐 Visit Website](https://metineditoru.com) • [🐛 Report Bug](https://github.com/mehmeterguden/Online-Text-Editor/issues) • [💡 Request Feature](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>