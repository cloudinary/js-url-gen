import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src',
  output: [
    {
      file: 'dist/base.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/base.umd.js',
      format: 'umd',
      name:'cloudinaryBase'
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
