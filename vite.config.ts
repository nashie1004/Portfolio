import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
  build: {
    
  }
  ,assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.svg'] // Add any image format you need
})
