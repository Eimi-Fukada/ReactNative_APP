module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // eslint-disable-next-line no-sparse-arrays
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
