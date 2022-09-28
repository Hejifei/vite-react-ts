import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   exclude: [],  //  将指定数组中的依赖,不进行预构建
  // },
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/*.ts', 'src/*.tsx', "*.ts"]
    })
  ],
  envPrefix: 'ENV',   //  配置vite注入客户端环境变量的env前缀, 默认 VITE开头
})
