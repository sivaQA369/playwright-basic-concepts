export class CheckoutCompletePage {
    constructor(page) {
        this.page = page
        this.completeMessage = page.locator('.complete-header')

    }

    async verifyOrderSuccess() {
        await this.completeMessage.waitFor({state: 'visible'})
        const msg = await this.completeMessage.textContent()
        return msg.includes('Thank you for your order!')
    }
}