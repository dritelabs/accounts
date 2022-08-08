module.exports = {
  // extends: ['@commitlint/config-conventional'],
  extends: ['./common/autoinstallers/rush-commitlint/node_modules/@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['lower-case', 'sentence-case']]
  }
};
