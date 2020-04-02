import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/scripts/index.js",
  output: {
    name: "learnJavascript",
    file: "sample/bundle.js",
    format: "umd"
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs()
  ]
};
