import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // ensure correct path resolution for Vercel hosting

  server: {
    host: "::",
    port: 8080,
    open: true,
    // important for React Router in dev mode
    fs: {
      strict: true,
    }
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist", // Vercel looks for dist by default
    sourcemap: true, // useful for debugging
  },
}));
