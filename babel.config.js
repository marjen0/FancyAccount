const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        root: ['./src'],
        alias: {
          '@screens': path.resolve(__dirname, './src/screens'),
          '@navigation': path.resolve(__dirname, './src/navigation'),
          '@components': path.resolve(__dirname, './src/components'),
          '@styles': ([, name]) =>
            path.resolve(__dirname, `./src/styles${name}`),
          '@context': path.resolve(__dirname, './src/context'),
          '@utils': ([, name]) => path.resolve(__dirname, `./src/utils${name}`),
          '@constants': path.resolve(__dirname, './src/constants'),
          '@hooks': path.resolve(__dirname, './src/hooks'),
          '@core': ([, name]) => path.resolve(__dirname, `./src/core${name}`),
        },
      },
    ],
  ],
};
