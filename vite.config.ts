import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react(),
    viteImagemin({
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: true }
        ]
      },
      gifsicle: {
        optimizationLevel: 3,
      },
      // generate WebP versions of your PNG/JPEG
      webp: {
        quality: 75
      }
    })  
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
