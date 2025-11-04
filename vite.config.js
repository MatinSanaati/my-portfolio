import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ مطمئن شو که خروجی توی dist باشه
    emptyOutDir: true, // ✅ قبل از بیلد، فولدر dist رو پاک کنه (برای جلوگیری از فایل‌های باقی‌مانده)
    assetsDir: "assets", // ✅ مطمئن شو که assets توی dist/assets باشه
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
  },
});
