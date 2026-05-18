import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/jackpsmith-git.github.io/',

    build: {
        outDir: 'dist',
        sourcemap: true,
    }
})