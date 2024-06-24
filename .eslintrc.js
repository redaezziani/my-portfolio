module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['classnames', 'clsx'],
      config: 'tailwind.config.js',
      cssFiles: [
        '**/*.css',
        '**/*.scss',
        '**/*.js',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
      ],
      tags: ['tw'],
    },
  },
  extends: [
    'next',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'tailwindcss',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Not required for Next.js
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'import/order': 'off', // Disable import order if using simple-import-sort
    '@typescript-eslint/no-unused-vars': ['warn'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off', // Adjust based on your project's needs
    'react/jsx-uses-react': 'off', // React 17 JSX transform
    'react/jsx-uses-vars': 'error',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
