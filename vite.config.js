import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Everything ships local — no external CDNs, no UI kits.
// base: './' keeps asset paths relative so the build can be dropped
// into any sub-folder (e.g. under XAMPP/htdocs) and still work.
export default defineConfig({
  plugins: [react()],
  base: './',
})
