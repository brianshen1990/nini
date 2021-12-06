module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  plugins: [
    'react',
    '@emotion',
    'eslint-plugin-react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/syntax-preference': ['warn', 'string'],
    '@emotion/pkg-renaming': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-deprecated': 'error',
    // added
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.js', '**/*.spec.js']
      }
    ],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
};
