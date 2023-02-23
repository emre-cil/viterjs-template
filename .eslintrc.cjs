module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y', 'import'],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // allow short circuiting
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
