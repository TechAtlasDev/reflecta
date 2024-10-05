import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mi PWA',
        short_name: 'PWA',
        description: 'Esta es una Progressive Web App.',
        theme_color: '#56368D',
        background_color: '#56368D',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/reflecta/public/logos/teamColor.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/reflecta/public/logos/teamColor.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
