// .eslintrc.js
module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'], // prettier 必须是最后一个，才能确保覆盖
  rules: {
    // prettier
    'prettier/prettier': 'error',
  },
}
