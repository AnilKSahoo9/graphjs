import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      name: "Graph",
      file: "dist/graph.js",
      format: "umd",
    },
    {
      name: "GraphMin",
      file: "dist/graph.min.js",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
};
