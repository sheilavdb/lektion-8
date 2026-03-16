export default [
  {
    plugins: { security },
    rules: {
      "security/detect-eval-with-expression": "error",
      "security/detect-object-injection": "warn"
    }
  }
];