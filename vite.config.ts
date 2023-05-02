import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'
// dotenv.config()
dotenv.config({ path: '.env.production' }) //배포 환경에서 사용

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/cinemain/",
  define: {
    'process.env': process.env,
  },
})
