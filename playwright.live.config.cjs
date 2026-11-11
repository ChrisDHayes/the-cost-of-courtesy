const { defineConfig, devices } = require('@playwright/test');
const chromeLaunch = process.env.CHROME_BINARY ? { launchOptions: { executablePath: process.env.CHROME_BINARY } } : {};

module.exports = defineConfig({
  testDir: './tests',
  testMatch: 'live-pages.spec.cjs',
  timeout: 45_000,
  expect: { timeout: 12_000 },
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.LIVE_URL || 'https://chrisdhayes.github.io/the-cost-of-courtesy/',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'live-desktop-chromium', use: { ...devices['Desktop Chrome'], ...chromeLaunch, viewport: { width: 1440, height: 900 } } },
    { name: 'live-mobile-chromium', use: { ...devices['Pixel 7'], ...chromeLaunch, browserName: 'chromium' } }
  ]
});
