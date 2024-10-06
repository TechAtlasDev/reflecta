import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Reflecta",
        short_name: "Reflecta",
        description: "Una aplicación web progresiva para Reflecta",
        icons: [
          {
            src: "/teamColor-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/teamColor-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        background_color: "#0f172a", // Este es el valor hex para 'slate-950'
        theme_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        scope: "/",
        screenshots: [
          {
            src: "/1.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            label: "Landing Page",
            form_factor: "narrow",
          },
          {
            src: "/2.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            label: "Dashboard",
            form_factor: "narrow",
          },
          {
            src: "/3.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            label: "Map",
            form_factor: "narrow",
          },
          {
            src: "/4.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            label: "Map",
            form_factor: "narrow",
          },
          {
            src: "/desktopLanding.png",
            sizes: "1920x1080",
            type: "image/png",
            label: "Landing",
            form_factor: "wide",
          },
          {
            src: "/desktopMap.png",
            sizes: "1920x1080",
            type: "image/png",
            label: "Map",
            form_factor: "wide",
          },
          {
            src: "/desktopDashboard.png",
            sizes: "1920x1080",
            type: "image/png",
            label: "Dashboard",
            form_factor: "wide",
          },
        ],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
