// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "chore"]],
    // "subject-case": [2, "always", "lower-case"],
    // "subject-full-stop": [2, "never", "."],
  },
  //   formatter: "@commitlint/format",
  //   helpUrl: "Please follow the commit message format: type(scope?): description\nExample: feat: add new login feature",
};
