module.exports = {
  testEnvironment: 'node',
  collectCoverage: false,
  verbose: true,
  setupFiles: [
    '<rootDir>/dist/index.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/dist/index.js']
};
