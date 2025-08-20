export class CheckoutPage {
    constructor(page) {

        this.page = page
        this.firstNameInput = page.locator('#first-name')
        this.lastNameInput = page.locator('#last-name')
        this.postalCodeInput = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.pageTitle = page.locator('.title')
    }

    async fillCheckoutDetails(firstName, lastName, postalCode) {
        await this.pageTitle.waitFor({state: 'visible'})
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)
        await this.continueButton.click()

    }
}