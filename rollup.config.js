import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
    removeComments: true,
    useTsconfigDeclarationDir: true,
  }),
  terser({
    include: ['fre.js'],
  })
]

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/fre.js', format: 'umd', name: 'fre', sourcemap: true },
      { file: 'dist/fre.esm.js', format: 'esm', sourcemap: true },
    ],
    plugins,
  },
  {
    input: 'compat/index.js',
    output: {
      file: 'dist/fre-compat.js',
      format: 'umd',
      name: 'fre',
      sourcemap: true,
    },
    plugins,
  },
]