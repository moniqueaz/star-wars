module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/(_)?stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.tsx',
    '!src/types/**/*.d.ts',
    '!**/coverage/**',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  coverageThreshold: {
    'src/**/**': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};
