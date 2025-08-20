export class CheckoutOverviewPage {

    constructor(page) {
        this.page = page
        this.finishButton = page.locator('#finish')
        this.pageTitle = page.locator('.title')
        this.summaryItems = page.locator('.cart_item')

    }

    async verifyOverviewPageLoaded() {

        await this.pageTitle.waitFor({state: 'visible'})
        const text = await this.pageTitle.textContent()
        return text.trim() === 'Checkout: Overview'
        
    }

    async getSummaryCount() {
        return await this.summaryItems.count()
    }

    async finishOrder() {
        await this.finishButton.click()
    }
}
