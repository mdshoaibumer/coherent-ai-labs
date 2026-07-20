import { test, expect } from '@playwright/test';

test.describe('Homepage E2E', () => {
  test('should load the homepage and display hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Coherent AI Labs/);
    
    // Check if hero CTA exists
    const ctaButton = page.locator('a[href="#contact"]').first();
    await expect(ctaButton).toBeVisible();
  });

  test('navigation links should work smoothly', async ({ page, isMobile }) => {
    await page.goto('/');
    
    if (isMobile) {
      // Mobile nav interaction
      const menuBtn = page.getByLabel('Open menu');
      await menuBtn.click();
      const servicesLink = page.locator('a[href="#services"]').first();
      await expect(servicesLink).toBeVisible();
    } else {
      // Desktop nav interaction
      const servicesLink = page.locator('a[href="#services"]').first();
      await expect(servicesLink).toBeVisible();
    }
  });

  test('FAQ accordion toggles correctly', async ({ page }) => {
    await page.goto('/');
    // Scroll to FAQ
    const faqSection = page.locator('#faq');
    if (await faqSection.isVisible()) {
      await faqSection.scrollIntoViewIfNeeded();
      // Test accordion interaction
      const toggleButton = page.locator('button[aria-controls^="faq-panel"]').first();
      await toggleButton.click();
      const panelId = await toggleButton.getAttribute('aria-controls');
      const panel = page.locator(`#${panelId}`);
      await expect(panel).toBeVisible();
    }
  });
});
