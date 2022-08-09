import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import multi from 'rollup-plugin-multi-input';
import {version} from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bundles/umd/base.js',
        format: 'umd',
        name: 'CldUrlGen',
      },
    ],
    plugins: [
      json(),
      resolve(),
      replace({
        'PACKAGE_VERSION_INJECTED_DURING_BUILD': version,
        preventAssignment: true
      }),
      typescript({ target: 'es5' }),
      commonjs(),
    ],
  },
  {
    input: 'src/**/*.ts',
    output: {
      format: 'cjs',
      dir: 'dist',
      entryFileNames: '[name].cjs',
      chunkFileNames: '[name]-[hash].cjs',
      exports: 'auto',
    },
    plugins: [
      multi(),
      json(),
      resolve(),
      replace({
        'PACKAGE_VERSION_INJECTED_DURING_BUILD': version,
        preventAssignment: true
      }),
      typescript({ target: "es5" }),
      commonjs()
    ]
  }
];

