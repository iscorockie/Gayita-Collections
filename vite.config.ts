import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE lets us deploy under https://<user>.github.io/gayita-collections/
// while dev/preview run at "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: true,
  },
});
