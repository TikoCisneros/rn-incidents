// https://medium.com/@thinhtran3588/make-professional-mobile-apps-with-react-native-and-typescript-improve-your-code-quality-cc527f594840
module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['no-null'],
  rules: {
    'indent': ['error', 2, { "SwitchCase": 1 }],
    'import/no-extraneous-dependencies': 'off',
    'react-native/no-inline-styles': 'off',
    'react/forbid-prop-types': 'off',
    'quotes': 'error',
    'max-len': [
      'error', {
        'code': 120
      }
    ],
    'react/jsx-closing-bracket-location': [1, {selfClosing: 'line-aligned', nonEmpty: 'after-props'}],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prop-types': [1, { 'ignore': ['style', 'otherProps', 'navigation', 'containerStyle', 'children']}],
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.stories.js'
      ],
      env: {
        'jest': true
      }
    }
  ]
};
