import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@shared': resolve('src/shared'),
        '@main': resolve('src/main'),
        '@preload': resolve('src/preload'),
        '@': resolve('src/preload')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@': resolve('src/preload'),
        '@preload': resolve('src/preload'),
        '@shared': resolve('src/shared')
      }
    }
  },
  renderer: {
    assetsInclude: 'src/renderer/assets',
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@renderer': resolve('src/renderer/src'),
        '@/components': resolve('src/renderer/src/components'),
        '@/services': resolve('src/renderer/src/services'),
        '@/lib': resolve('src/renderer/src/lib'),
        '@/assets': resolve('src/renderer/src/assets'),
        '@shared': resolve('src/shared')
      }
    },
    plugins: [react()]
  }
})
