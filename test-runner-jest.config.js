// !!! This file is used as an override to the test-runner configuration for this repo only !!!
// If you want to create your own override for your project, use playwright/test-runner-jest.config.js as base instead
const { TEST_ROOT, TEST_MATCH } = process.env;

const roots = TEST_ROOT ? [TEST_ROOT] : undefined;

module.exports = {
  cacheDirectory: 'node_modules/.cache/storybook/test-runner',
  rootDir: process.cwd(),
  roots,
  testMatch: [TEST_MATCH || '**/*.stories.[jt]s?(x)'],
  transform: {
    '^.+\\.stories\\.[jt]sx?$': '@storybook/test-runner/playwright/transform',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  preset: 'jest-playwright-preset',
  globalSetup: '@storybook/test-runner/playwright/global-setup.js',
  globalTeardown: '@storybook/test-runner/playwright/global-teardown.js',
  testEnvironment: '@storybook/test-runner/playwright/custom-environment.js',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
