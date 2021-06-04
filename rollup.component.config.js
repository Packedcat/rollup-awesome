import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
import camelize from './camelize'

const input = 'src/component-lib.tsx'
const plugins = [resolve(), typescript()]

export default [
  {
    input,
    output: {
      file: 'dist/component-lib.umd.js',
      format: 'umd',
      name: camelize(pkg.name),
      globals: { react: 'React' },
    },
    external: ['react'],
    plugins,
  },
  {
    input,
    external: [...Object.keys(pkg.peerDependencies || {})],
    output: [
      { file: 'dist/component-lib.es.js', format: 'es' },
      { file: 'dist/component-lib.cjs.js', format: 'cjs' },
    ],
    plugins,
  },
]
