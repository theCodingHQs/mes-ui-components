
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/essence-ui/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
  sourcemap: true,
  minify: true,
  treeshake: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
