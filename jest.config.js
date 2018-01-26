/**
 * Created by Vincent on 2018/1/8.
 */
const path = require('path');

module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    '^.+\\.css$': path.resolve('jest/cssTransform.js'),
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': path.resolve('jest/fileTransform.js'),
  },
  moduleDirectories: ['src', 'node_modules'],
  // setupFiles: ["<rootDir>/jest/setupTests.js"],
  setupTestFrameworkScriptFile: "<rootDir>/jest/setupTests.js",
  // testMatch: ["<rootDir>/__tests__/*.test.js"],
  // testPathIgnorePatterns: ["<rootDir>/jest/setupTests.js"],
  coveragePathIgnorePatterns: ["jest"],
  collectCoverageFrom : ['src/**']
};
