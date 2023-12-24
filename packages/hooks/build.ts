/* eslint-disable @typescript-eslint/no-explicit-any */
import dts from 'bun-plugin-dts'

import { cssModule } from './plugins'

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  minify: true,
  splitting: true,
  external: ['react'],
  plugins: [cssModule, dts()],
})
