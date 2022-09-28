import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
  build: () => Object.assign({}, viteBaseConfig, viteProdConfig),
  serve: () => Object.assign({}, viteBaseConfig, viteDevConfig)
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  // console.log('process', process.env)
  console.log(process.cwd())

  // process.cwd()方法:返回当前node进程的工作目录
  /**
   * 当我们调用loadenv的时候,他会做如下几件事
   * 1、直接找到.env文件不解释,并解释其中的环境变量,并放进一个对象里
   * 2、会将传进来的mode这个变量的值进行拼接:   ```'.env.development'```,并根据提供的目录去取对应的配置文件
   * 进行解析,并放进一个对象
   * 3、我们可以理解为
   * ```js
   *    const baseEnvConfig = 读取.env的配置
   *    const modeEnvConfig = 读取env相关配置
   *    const lastEnvConfig = {...baseEnvConfg, ...modeEnvConfig}
   * ```
   * 
   * 环境变量注入到 import.meta.env
   */
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env///', env)
  return envResolver[command]()
})
