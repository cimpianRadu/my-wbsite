// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "chore"]],
    "scope-case": [2, "always", "lower-case"], // Ensure scope is lowercase
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "references-empty": [2, "never"], // Ensure there is an issue reference
    "header-max-length": [2, "always", 100], // Optionally enforce a max header length
  },
};
