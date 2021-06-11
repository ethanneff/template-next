module.exports = {
  collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],
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
