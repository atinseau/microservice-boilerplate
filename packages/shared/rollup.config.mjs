import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { minify } from 'rollup-plugin-esbuild-minify'

import typescript from '@rollup/plugin-typescript';


export default defineConfig((args) => {

  /** @type {boolean} */
  const isWatch = args.watch === true

  return {
    input: [
      'src/index.ts',
    ],
    output: {
      dir: 'dist',
      format: 'commonjs',
      sourcemap: isWatch,
    },
    external: [
      'class-transformer',
      'class-validator',
    ],
    plugins: [
      typescript({
        sourceMap: isWatch,
      }),
      nodeResolve(),
      ...(!isWatch ? [minify()] : [])
    ],
    watch: {
      include: 'src/**',
      clearScreen: false
    }
  }
})
