import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import eslint from '@rollup/plugin-eslint'
import babel from '@rollup-plugin-babel'

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  external: ['styled-components'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    typescript({ 
      useTsconfigDeclarationDir: true, exclude: ['*.d.ts', '**/*.d.ts', '**/*.test.tsx'],
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    postcss({
        extensions: ['.css']
    }),
    plugins: [
      eslint()
    ]
  ]
};