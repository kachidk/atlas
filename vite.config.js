import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

const path = require("path");

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/ts/app.tsx"],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "resources/ts"),
    },
  },
});
