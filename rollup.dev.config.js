import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve'

export default {
  input: 'src',
  output: [
    {
      file: 'dev/base.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    serve({
      contentBase: 'dev'
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};

