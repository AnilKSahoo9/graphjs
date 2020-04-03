import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    name: "learnJavascript",
    file: "sample/bundle.js",
    format: "umd"
  },
  plugins: [resolve(), commonjs()]
};
