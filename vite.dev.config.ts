import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   exclude: [],  //  将指定数组中的依赖,不进行预构建
  // },
  // plugins: [
  //   react(),
  //   eslintPlugin({
  //     include: ['src/**/*.ts', 'src/**/*.tsx', 'src/*.ts', 'src/*.tsx']
  //   })
  // ],
})
