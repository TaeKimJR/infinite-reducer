import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    name: 'InfiniteReducers',
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    babel({}),
  ],
};
