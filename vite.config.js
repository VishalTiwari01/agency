import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',         // Custom output directory
    assetsDir: 'assets',     // Assets will be in build/assets/
    emptyOutDir: true        // Clear the build folder before building
  },
  plugins: [react()],
})
