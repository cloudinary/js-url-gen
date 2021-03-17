import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve'
import typescript from "rollup-plugin-typescript";
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'playground/base.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    json(),
    typescript(),
    serve({
      contentBase: 'playground'
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
