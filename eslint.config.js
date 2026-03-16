import security from 'eslint-plugin-security';
export default [
  {
    plugins: { security },
    rules: {
      "security/detect-eval-with-expression": "error",
      "security/detect-object-injection": "warn"
    }
  }
];

//https://eslint.org/docs/latest/use/command-line-interface
//https://github.com/eslint-community/eslint-plugin-security