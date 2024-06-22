import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://unitedcart.onrender.com",
      "/uploads/": "https://unitedcart.onrender.com",
    },
  },
});
