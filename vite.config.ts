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