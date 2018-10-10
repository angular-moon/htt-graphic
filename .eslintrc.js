// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.dev.js',
      },
    },
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'generator-star-spacing': 'off',
    'react/sort-comp': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-unused-prop-types': 'off',
    'array-callback-return': 'off',
    'no-confusing-arrow': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    'no-debugger': 'off',
    'no-plusplus': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
};
