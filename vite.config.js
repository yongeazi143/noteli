import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [react()],
});
