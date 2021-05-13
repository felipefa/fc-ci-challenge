module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/*.test.js'],
  reporters: ['default', 'jest-sonar'],
  testEnvironment: 'node',
};
