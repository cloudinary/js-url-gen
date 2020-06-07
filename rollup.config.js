import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundles/umd/base.js',
      format: 'umd',
      name:'cloudinaryBase'
    },
  ],
  plugins: [
    resolve(),
    typescript()
  ]
}];

