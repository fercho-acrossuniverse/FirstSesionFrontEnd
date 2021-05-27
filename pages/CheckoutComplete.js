import { Selector } from 'testcafe'

class CheckoutComplete {
    constructor (){
        this.chkoutComplete = Selector('h2').withAttribute('class','complete-header')
        this.finishBttn = Selector('button').withAttribute('name','finish')        
    }
}

export default new CheckoutComplete()