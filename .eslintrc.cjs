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
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
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
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'no-mixed-operators': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
