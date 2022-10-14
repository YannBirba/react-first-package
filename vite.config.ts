/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-first-package",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `rfp.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    target: "esnext",
    sourcemap: true,
  },
});
