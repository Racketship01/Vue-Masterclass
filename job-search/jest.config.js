module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/playground.js",
    "!src/playground_archive.js",
  ],
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  coverageProvider: "v8",
};
