import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  target: "node16",
  // format: ["esm"],
});
