import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'vite-react-ts-eslint-prettier',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
      ],
    },
  },
})
