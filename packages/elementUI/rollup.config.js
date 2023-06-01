import commonjs from "@rollup/plugin-commonjs";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import alias from "@rollup/plugin-alias";

import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default {
  input: "./src/main.js",
  output: [
    {
      file: "./dist/index.js",
      format: "umd",
      name: "qiankunStyleFix",
      globals: {
        "ant-design-vue": "antDesignVue",
        vue: "Vue$1",
        "element-ui": "elementUi",
      },
      plugins: [terser()],
      banner: "/* qiankun-style-fix " + pkg.version + " */",
    },
    {
      file: "./dist/index.common.js",
      format: "cjs",
      plugins: [terser()],
      banner: "/* qiankun-style-fix " + pkg.version + " */",
    },
    {
      file: "./dist/index.esm.js",
      format: "es",
      plugins: [terser()],
      banner: "/* qiankun-style-fix " + pkg.version + " */",
    },
  ],
  external: ["ant-design-vue", "vue", "element-ui"],
  plugins: [
    babel({ babelHelpers: "bundled" }),
    resolve(),
    commonjs(),
    nodeResolve(),
    alias({
      entries: {
        "@root": "../../../",
        "@": "./src",
      },
    }),
  ],
};
