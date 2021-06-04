import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
import camelize from './camelize'

export default {
  input: 'src/vanilla-js-lib.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: camelize(pkg.name),
  },
  plugins: [resolve(), typescript()],
}
