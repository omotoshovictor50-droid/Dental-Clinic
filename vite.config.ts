import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set to '/<repo-name>/' for a GitHub Pages project site (e.g. username.github.io/Dental-Clinic/).
// If you're deploying to a username.github.io root site instead, change this back to '/'.
export default defineConfig({
  base: '/Dental-Clinic/',
  plugins: [react()],
})
