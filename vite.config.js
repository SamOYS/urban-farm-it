import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: './src/css/main.scss',
            output: {
                dir: 'assets',
                assetFileNames: 'styles.css',
            }
        }
    }
})