import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });
  try {
    await page.goto('http://localhost:3000');
    // Wait for animations
    await page.waitForTimeout(3000); 
    await page.screenshot({ path: 'C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\09747bdc-b445-472b-a9e2-7afcf925aa1e\\screenshot.png', fullPage: true });
    console.log("Screenshot taken successfully!");
  } catch(e) {
    console.error("Failed to take screenshot, server might not be running.", e);
  } finally {
    await browser.close();
  }
})();
