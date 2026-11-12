import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Tailwindcss from "@tailwindcss/vite";
import Vue from "@vitejs/plugin-vue";
import Webfontdl from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: "src/types/auto-imports.d.ts",
      dirs: ["src/stores"],
    }),
    Components({
      extensions: ["vue"],
      dts: "src/types/components.d.ts",
    }),
    Vue(),
    Tailwindcss(),
    Webfontdl(),
  ],
});
