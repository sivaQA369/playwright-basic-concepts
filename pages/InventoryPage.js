export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.productCards = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button.btn_inventory');
    this.cartIcon = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addProductsToCart(count = 1) {
    const total = await this.addToCartButtons.count();
    console.log('Total products:', total);
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async verifyCartItemCount(expectedCount) {
    // ✅ Wait for cart badge to be visible
    await this.cartIcon.waitFor({ state: 'visible', timeout: 5000 });

    // ✅ Get text from the cart badge
    const cartText = await this.cartIcon.textContent();
    console.log('🛒 cart shows:', cartText);

    // ✅ Compare expected vs actual
    return cartText.trim() === expectedCount.toString();
  }

  async goToCartPage() {
    await this.cartLink.click();
  }
}
