<div align="center">

# 📝 Online Text Editor

**A powerful, modern, and feature-rich online text editor built with React, TypeScript, and Vite**

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-metineditoru.com-green.svg)](https://metineditoru.com)
[![GitHub stars](https://img.shields.io/github/stars/mehmeterguden/Online-Text-Editor?style=social)](https://github.com/mehmeterguden/Online-Text-Editor)

[🇹🇷 Türkçe](README-TR.md) | [🇺🇸 English](#)

---

**Transform your text editing experience with our advanced online editor featuring rich text editing, code highlighting, real-time statistics, and powerful text processing tools.**

> **Note**: This project is open-sourced for transparency and trust-building purposes. The source code is available for viewing, learning, and educational use only. Commercial use, monetization, or creating competing services is not permitted under the CC BY-NC-SA 4.0 license.

[🚀 Live Demo](https://metineditoru.com) • [📖 Documentation](#-documentation) • [🤝 Contributing](#-contributing) • [🐛 Report Bug](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>

## ✨ Features

### 🎨 **Modern Interface & Experience**
- **Clean, Intuitive Design**: Modern UI with smooth animations and transitions
- **Dark/Light Theme**: Automatic theme detection with manual override
- **Responsive Layout**: Seamless experience across desktop, tablet, and mobile
- **Customizable Settings**: Personalize your editing environment
- **Auto-save**: Never lose your work with intelligent auto-save functionality

### 🔧 **Advanced Text Editing**
- **CKEditor 5 Integration**: Professional-grade rich text editing with toolbar
- **Monaco Editor**: VS Code-like code editing with syntax highlighting
- **Dual Editor Mode**: Switch between rich text and code editing seamlessly
- **Real-time Statistics**: Live character, word, line, and paragraph counts
- **Smart Formatting**: Auto-formatting and intelligent text processing

### 🧹 **Comprehensive Text Processing**
- **Cleaning Tools**: Remove extra spaces, tabs, empty lines, and formatting
- **Character Tools**: Convert special characters, remove emojis, normalize text
- **Content Tools**: Remove URLs, emails, HTML tags, and unwanted content
- **Formatting Tools**: Remove comments, code blocks, indentation levels
- **Pattern Tools**: Remove specific patterns, dates, numbers, and formats
- **Case Conversion**: Transform text between different case formats

### 🔍 **Powerful Search & Replace**
- **Advanced Search**: Regex support with case-sensitive/insensitive options
- **Smart Replace**: Replace all or selective replacement with preview
- **Search History**: Keep track of your recent searches
- **Multi-line Support**: Search and replace across multiple lines
- **Pattern Matching**: Find and replace complex text patterns

### 📊 **Analytics & Insights**
- **Real-time Analysis**: Live text analysis and statistics
- **Character Frequency**: Analyze character distribution and usage
- **Reading Time**: Estimate reading time and complexity
- **Export Statistics**: Download detailed text analysis reports
- **Word Cloud**: Visual representation of word frequency

### 🌐 **Multi-language & Accessibility**
- **Unicode Support**: Full support for international characters
- **Keyboard Shortcuts**: Efficient editing with customizable shortcuts
- **Screen Reader Support**: Accessible design for all users
- **RTL Support**: Right-to-left text direction support

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn v1.22.0+)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mehmeterguden/Online-Text-Editor.git
cd Online-Text-Editor
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server:**
```bash
npm run dev
# or
yarn dev
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

### Project Architecture

```
src/
├── components/              # React Components
│   ├── Editor.tsx          # Main editor component
│   ├── EditorSettings.tsx  # Editor configuration
│   ├── Toolbar.tsx         # Editor toolbar
│   ├── SearchReplace.tsx   # Search & replace functionality
│   ├── Toast.tsx           # Notification system
│   └── layout/             # Layout components
│       ├── Header.tsx      # Application header
│       └── Layout.tsx      # Main layout wrapper
├── features/               # Feature Modules
│   ├── cleaning/           # Text cleaning tools
│   │   ├── basic/         # Basic cleaning operations
│   │   ├── character/     # Character manipulation
│   │   ├── content/       # Content filtering
│   │   ├── formatting/    # Formatting tools
│   │   └── pattern/       # Pattern matching
│   ├── editor/            # Editor functionality
│   │   ├── hooks/         # Editor-specific hooks
│   │   └── types.ts       # Editor type definitions
│   ├── textOperations/    # Text processing operations
│   │   ├── operations/    # Core text operations
│   │   └── hooks/         # Text operation hooks
│   └── theme/             # Theme management
│       ├── hooks/         # Theme hooks
│       └── types.ts       # Theme types
├── hooks/                 # Custom React Hooks
├── pages/                 # Page Components
│   ├── how-to/           # Documentation pages
│   └── GizlilikPolitikasi.tsx
├── styles/                # Styling
│   ├── components.css    # Component styles
│   ├── index.css         # Global styles
│   ├── theme.css         # Theme styles
│   └── tooltip.css       # Tooltip styles
└── utils/                 # Utility Functions
    ├── cleaning.ts        # Cleaning utilities
    ├── sorting.ts         # Sorting algorithms
    └── turkishCase.ts     # Turkish case conversion
```

### Technology Stack

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
| **Routing** | React Router | Client-side Routing |

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

# Development Configuration
VITE_DEV_MODE=false
VITE_DEBUG=false
```

### Build Configuration

The project uses Vite for building with the following key configurations:

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **ESLint**: Code quality enforcement with React and TypeScript rules
- **PostCSS**: CSS processing with autoprefixer

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment**: Set environment variables in Vercel dashboard
3. **Deploy**: Automatic deployment on every push to main branch

### Other Platforms

| Platform | Configuration | Notes |
|----------|---------------|-------|
| **Netlify** | Build command: `npm run build`<br>Publish directory: `dist` | Easy setup with GitHub integration |
| **GitHub Pages** | Use GitHub Actions for deployment | Free hosting for public repositories |
| **AWS S3 + CloudFront** | Upload `dist` folder to S3 bucket | Scalable and fast global distribution |
| **Firebase Hosting** | Use Firebase CLI for deployment | Google's hosting platform |

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

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| **Chrome** | 90+ | ✅ Full Support |
| **Firefox** | 88+ | ✅ Full Support |
| **Safari** | 14+ | ✅ Full Support |
| **Edge** | 90+ | ✅ Full Support |
| **Mobile Browsers** | Latest | ✅ Responsive Design |

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```
tests/
├── unit/                 # Unit tests
├── integration/          # Integration tests
├── e2e/                 # End-to-end tests
└── fixtures/            # Test data and fixtures
```

## 📊 Performance

### Bundle Analysis

| Metric | Value | Target |
|--------|-------|--------|
| **Initial Bundle** | ~862KB | < 1MB |
| **Gzipped Size** | ~214KB | < 300KB |
| **First Paint** | < 1.5s | < 2s |
| **Time to Interactive** | < 2.5s | < 3s |

### Optimization Features

- **Code Splitting**: Dynamic imports for better loading performance
- **Tree Shaking**: Remove unused code from bundles
- **Image Optimization**: Automatic image compression and lazy loading
- **Caching**: Intelligent caching strategies for better performance

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs**: Found a bug? Open an issue with detailed information
- 💡 **Suggest Features**: Have an idea? Share it in our discussions
- 🔧 **Fix Issues**: Pick up an issue and submit a pull request
- 📖 **Improve Documentation**: Help make our docs better
- 🧪 **Add Tests**: Improve our test coverage

### Development Workflow

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

- **TypeScript**: Use strict typing and avoid `any`
- **ESLint**: Follow our ESLint configuration
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Use conventional commit messages
- **Tests**: Write tests for new features

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

This project wouldn't be possible without these amazing open-source libraries:

| Library | Purpose | License |
|---------|---------|---------|
| [React](https://reactjs.org/) | UI Library | MIT |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | Apache 2.0 |
| [Vite](https://vitejs.dev/) | Build Tool | MIT |
| [CKEditor 5](https://ckeditor.com/) | Rich Text Editor | GPL-2.0 |
| [Monaco Editor](https://microsoft.github.io/monaco-editor/) | Code Editor | MIT |
| [Tailwind CSS](https://tailwindcss.com/) | CSS Framework | MIT |
| [Ant Design](https://ant.design/) | UI Components | MIT |
| [Lucide React](https://lucide.dev/) | Icons | ISC |

## 📞 Support & Contact

### Getting Help

- 📖 **Documentation**: Check our comprehensive documentation
- 💬 **Discussions**: Join our GitHub Discussions
- 🐛 **Issues**: Report bugs or request features
- 📧 **Email**: Contact through GitHub profile

### Community

- **GitHub**: [@mehmeterguden](https://github.com/mehmeterguden)
- **Website**: [metineditoru.com](https://metineditoru.com)
- **Live Demo**: [Try it now](https://metineditoru.com)

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ **Star the repository**
- 🍴 **Fork the project**
- 🐛 **Report bugs**
- 💡 **Suggest new features**
- 🤝 **Contribute code**
- 📢 **Share with others**

---

<div align="center">

**Built with ❤️ and modern web technologies**

[🚀 Live Demo](https://metineditoru.com) • [📖 Documentation](#-documentation) • [🐛 Report Bug](https://github.com/mehmeterguden/Online-Text-Editor/issues) • [💡 Request Feature](https://github.com/mehmeterguden/Online-Text-Editor/issues)

</div>