import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:'/Bookmark-website/',
  plugins:[
    tailwindcss(),
  ],
})