import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { generateSystemReport } from './src/utils/systemReport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'system-report',
      async buildStart() {
        try {
          await generateSystemReport()
        } catch (error) {
          console.error('Failed to generate system report:', error)
        }
      }
    },
    {
      name: 'handle-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/nasil-kullanilir/') {
            req.url = '/nasil-kullanilir.html'
          }
          next()
        })
      }
    },
    {
      name: 'env-inject',
      transformIndexHtml: {
        enforce: 'pre',
        transform(html, context) {
          // Replace environment variable placeholders in HTML
          const envVars = {
            '%VITE_GOOGLE_ADSENSE_CLIENT_ID%': process.env.VITE_GOOGLE_ADSENSE_CLIENT_ID || '',
            '%VITE_GOOGLE_ANALYTICS_ID%': process.env.VITE_GOOGLE_ANALYTICS_ID || '',
            '%VITE_SITE_URL%': process.env.VITE_SITE_URL || 'https://metineditoru.com',
            '%VITE_SITE_NAME%': process.env.VITE_SITE_NAME || 'Metin Editörü'
          }
          
          let transformedHtml = html
          Object.entries(envVars).forEach(([placeholder, value]) => {
            transformedHtml = transformedHtml.replace(new RegExp(placeholder, 'g'), value)
          })
          
          return transformedHtml
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true,
    watch: {
      usePolling: true
    }
  }
}) 