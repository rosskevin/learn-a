import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescriptPlugin from 'rollup-plugin-typescript2';
import typescript from 'typescript';

const tsconfig = path.join(__dirname, 'tsconfig.json');
console.info(`Using tsconfig: ${tsconfig}`);

// treat as externals not relative and not absolute paths
const external = id => !id.startsWith('.') && !id.startsWith('/');

const input = './src/index.ts';
const extensions = ['.ts', '.tsx'];

const tsconfigOverride = {
  compilerOptions: {
    // leave imports as they are
    module: 'esnext',
    // do not transpile stuff like classes, async/await, ...
    target: 'esnext',
  },
};

const commonPlugins = [
  nodeResolve({ extensions }),
  typescriptPlugin({ typescript, tsconfig, tsconfigOverride }),
];

export default [
  {
    input,
    external,
    output: {
      file: './dist/cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [...commonPlugins],
  },

  {
    input,
    external,
    output: {
      file: './dist/esm.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [...commonPlugins],
  },
];
