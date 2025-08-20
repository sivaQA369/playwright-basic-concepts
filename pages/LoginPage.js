import {expect} from '@playwright/test'
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
        this.errorMsg = page.locator('[data-test="error"]')
        
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login(user, pass) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginBtn.click()
    }

    async assertLoginError(expectedText) {
        await expect(this.errorMsg).toBeVisible()
        await expect(this.errorMsg).toHaveText(expectedText)

    }
}