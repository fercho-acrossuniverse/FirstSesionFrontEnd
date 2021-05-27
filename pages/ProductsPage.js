import { Selector } from 'testcafe'

class ProductsPage {
    constructor (){
        this.ProductsTitle = Selector('span').withAttribute('class','title')
        this.BurguerMenu = Selector('button').withAttribute('id','react-burger-menu-btn')
        this.logoutButton = Selector('a').withAttribute('id','logout_sidebar_link')
        this.addtocartbttn = Selector('button').withAttribute('class','btn btn_primary btn_small btn_inventory')
        this.cartlink = Selector('a').withAttribute('class','shopping_cart_link')        
        this.cartItem = Selector('span').withAttribute('class','shopping_cart_badge')
        //ADD Product list
        this.addBackpack = Selector('button').withAttribute('id','add-to-cart-sauce-labs-backpack')
        this.addJacket = Selector('button').withAttribute('id','add-to-cart-sauce-labs-fleece-jacket')
        this.addTshirt = Selector('button').withAttribute('id','add-to-cart-test.allthethings()-t-shirt-(red)')
        //RMV Product lits
        this.rmvBackpack = Selector('button').withAttribute('id','remove-sauce-labs-backpack')
        this.rmvJacket = Selector('button').withAttribute('id','remove-sauce-labs-fleece-jacket')
        this.rmvTshirt = Selector('button').withAttribute('id','remove-test.allthethings()-t-shirt-(red)')
    }
}

export default new ProductsPage()