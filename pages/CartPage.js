export class CartPage {
    constructor(page) {
        this.page = page
        this.cartItems = page.locator('.cart_item')
        this.cartItemNames = page.locator('.inventory_item_name')
        this.cartItemPrices = page.locator('.inventory_item_price')
        this.cartTitle = page.locator('.title')  
    }

    async verifyCartPageLoaded() {
        await this.cartTitle.waitFor({state: 'visible', })
        const titleText = await this.cartTitle.textContent()
        return titleText.includes('Your Cart')
    }
    
    async getCartItemsCount() {
        return await this.cartItems.count()

    }

    async printCartItems () {

        const count = await this.cartItems.count()
        console.log(`Items in cart:', ${count}`)

        for(let i=0; i< count; i++) {

            const name = await this.cartItemNames.nth(i).textContent()
            const price = await this.cartItemPrices.nth(i).textContent()
            console.log(`${name.trim()} - ${price.trim()}`)
            
        }
    }
     
    async assertProductExists(productName) {
        const names = await this.cartItemNames.allTextContents()
        return names.map(n => n.trim()).includes(productName)
    }
}