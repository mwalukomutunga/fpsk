import { defineConfig } from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import { resolvePath } from 'react-router-dom'
const root = resolve(__dirname,'')
const outDir = resolve(__dirname,'dist')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main: resolve(root,'index.html'),
        contact: resolve(root,'contact.html')
      }
    }
  }
})
