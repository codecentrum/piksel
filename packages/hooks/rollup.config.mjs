import terser from '@rollup/plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json' assert { type: 'json' }

export default [
  {
    input: `./src/index.ts`,
    treeshake: true,
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      json(),
      terser(),
      peerDepsExternal(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
    ],
    watch: {
      clearScreen: false,
    },
    external: ['react', 'react-dom', 'tailwindcss', 'class-variance-authority'],
  },
]
