import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// 创建不同框架的构建配置
export default defineConfig({
  build: {
    lib: {
      entry: {
        core: './src/core.ts',
        react: './src/valkit-react.tsx',
        vue: './src/valkit-vue.ts',
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (format === 'es') return `${entryName}.js`
        return `${entryName}.${format}.js`
      },
    },
    rollupOptions: {
      external: ['react', 'vue'],
      output: {
        globals: {
          react: 'React',
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    react(),
    vue(),
    dts({
      include: ['src/core.ts', 'src/valkit-react.tsx', 'src/valkit-vue.ts'],
      entryRoot: 'src',
      insertTypesEntry: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
