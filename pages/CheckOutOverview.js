import { Selector } from 'testcafe'
import { PRODUCTS } from '../data/Constants'

class CheckOutOverview {
    constructor (){
        this.chkoutOverviewTitle = Selector('span').withAttribute('class','title')
        this.finishBttn = Selector('button').withAttribute('name','finish')
        //Product items confirmation
        this.overviewItmBackpack = Selector('div').withExactText(PRODUCTS.ADDED_CART_PRDS.BACKPACK)
        this.overviewItmTshirt = Selector('div').withExactText(PRODUCTS.ADDED_CART_PRDS.TSHIRT)
        this.overviewItmJacket = Selector('div').withExactText(PRODUCTS.ADDED_CART_PRDS.JACKET)
    }
}

export default new CheckOutOverview()