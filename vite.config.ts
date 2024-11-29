import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const entry = {
  core: './src/core.ts',
  react: './src/react/valkit-react.tsx',
  vue: './src/vue/valkit-vue.ts',
}
export default defineConfig({
  build: {
    lib: {
      entry,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (format === 'es') return `${entryName}.js`
        return `${entryName}.${format}`
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
      include: Object.keys(entry).map((i) => entry[i]),
      entryRoot: 'src',
      insertTypesEntry: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
