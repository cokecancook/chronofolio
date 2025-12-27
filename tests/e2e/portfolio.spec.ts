import { test, expect } from '@playwright/test';

test.describe('Chronofolio E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the page to be stable
    await page.waitForLoadState('networkidle');
  });

  test('should load the home page correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/ChronoFolio/i);
    const timeline = page.locator('section').filter({ hasText: 'Todos' });
    await expect(timeline).toBeVisible();
  });

  test('should filter projects when a category is clicked', async ({ page, isMobile }) => {
    // Check initial state (should show more than just Branding)
    const allCards = page.locator('.portfolio-card');
    const initialCount = await allCards.count();

    if (isMobile) {
      // On mobile, first click expands the menu
      const activeFilter = page.locator('button').filter({ hasText: 'Todos' }).first();
      await activeFilter.click();
      
      // Wait for the menu to expand (animation)
      await page.waitForTimeout(500);
      
      // Then click Branding - ensure it's the one in the expanded list
      const brandingButton = page.getByRole('button', { name: 'Branding', exact: true });
      await brandingButton.waitFor({ state: 'visible' });
      await brandingButton.click();
    } else {
      // Click on 'Branding' filter directly
      const brandingButton = page.getByRole('button', { name: 'Branding', exact: true });
      await brandingButton.click();
    }

    // Verify URL update
    await expect(page).toHaveURL(/\?category=Branding/);

    // Verify projects are filtered (this might take a moment if items are filtered out)
    await page.waitForTimeout(500); // Wait for transition
    const filteredCount = await allCards.count();
    expect(filteredCount).toBeLessThan(initialCount);
    
    // Verify it scrolled to top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThanOrEqual(50);
  });

  test('should handle direct navigation with category param', async ({ page }) => {
    await page.goto('/?category=Branding');
    await page.waitForLoadState('networkidle');

    // Verify 'Branding' button is active
    const brandingButton = page.getByRole('button', { name: 'Branding', exact: true });
    await expect(brandingButton).toHaveClass(/bg-primary/); // Next.js variant 'default' should have bg-primary

    const allCards = page.locator('.portfolio-card');
    const filteredCount = await allCards.count();
    // Assuming we have branding projects
    expect(filteredCount).toBeGreaterThan(0);
  });

  test('should open project modal when a card is clicked', async ({ page }) => {
    const firstCard = page.locator('.portfolio-card').first();
    await firstCard.click();

    // Verify modal is visible
    const modal = page.locator('div[role="dialog"]');
    await expect(modal).toBeVisible();

    // Close the modal
    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
  });

  test('should have a sticky filter bar', async ({ page }) => {
    const filterBar = page.getByTestId('timeline-filters');
    await page.evaluate(() => window.scrollTo(0, 1000));
    
    // Check if it's still near the top of the viewport
    // Wait a bit for scroll to finish
    await page.waitForTimeout(500);
    const boundingBox = await filterBar.boundingBox();
    // It should be sticking to the top (y=0)
    expect(boundingBox?.y).toBeLessThanOrEqual(5);
  });
});

test.describe('Visual Regression & Layout', () => {
  test('should match desktop screenshot', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Only run on desktop');
    await page.goto('/');
    // Wait for animations to settle
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('home-desktop.png', { 
      fullPage: true,
      maxDiffPixelRatio: 0.1, // Allow for some animation/rendering differences
    });
  });

  test('should match mobile screenshot', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Only run on mobile devices');
    await page.goto('/');
    // Wait for animations to settle
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('home-mobile.png', { 
      fullPage: true,
      maxDiffPixelRatio: 0.1,
    });
  });
});
