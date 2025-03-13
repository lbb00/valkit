import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import fs from 'node:fs/promises'
import glob from 'fast-glob'

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
      entryRoot: 'src',
      insertTypesEntry: true,
      rollupTypes: true,
      outDir: './dist/types',
      async afterBuild() {
        const files = glob.sync('dist/types/**/*.d.{ts,ts.map}', {
          nodir: true,
        })
        for (const file of files) {
          const newFilePath = file.replace(/\.d\.ts(\.map)?$/, '.d.cts$1')
          await fs.copyFile(file, newFilePath)
        }
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
