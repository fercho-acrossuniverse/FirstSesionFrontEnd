import { Selector } from 'testcafe'
import { PRODUCTS } from '../data/Constants'

class YourCart {
    constructor (){
        this.yourcartTitle = Selector('span').withAttribute('class','title')
        this.chkoutbtt = Selector('button').withAttribute('name','checkout')
        //Product items added
        this.cartItmBackpack = Selector('div').withExactText(PRODUCTS.ADDED_CART_PRDS.BACKPACK)
        this.cartItmTshirt = Selector('div').withExactText(PRODUCTS.ADDED_CART_PRDS.TSHIRT)
        this.cartItmJacket = Selector('div').withExactText(PRODUCTS.ADDED_CART_PRDS.JACKET)
    }
}

export default new YourCart()