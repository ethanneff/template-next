module.exports = {
  // collectCoverageFrom: [
  //   '**/*.{js,jsx,ts,tsx}',
  //   '!**/*.d.ts',
  //   '!**/node_modules/**',
  // ],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/testing/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/testing/setup.ts'],
  rootDir: '..',
};
