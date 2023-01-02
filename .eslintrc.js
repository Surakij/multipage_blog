module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,

  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-len': ['error', {
      code: 500,
      ignoreComments: true,
    },
    ],
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-void': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-syntax': 'off',
    'no-sequences': 'off',
    'no-underscore-dangle': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-var': 'off',
    'no-mixed-operators': 'off',
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',
    'block-scoped-var': 'off',
    'vars-on-top': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off',
  },
};
