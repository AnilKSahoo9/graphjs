import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/scripts/index.js",
  output: {
    file: "sample/bundle.js",
    format: "cjs"
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
