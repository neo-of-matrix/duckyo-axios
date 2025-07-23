import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://httpraccoons.com",
        rewrite: (path) => path.replace(/^\/api/, "/"),
        changeOrigin: true,
        secure: false,
      },
    },
    port: 3000,
  },
});
