import { Selector, t } from 'testcafe'

class CheckOutInf {
    constructor (){
        this.chkOutTitle = Selector('span').withAttribute('class','title')
        this.continueBttn = Selector('input').withAttribute('name','continue')
        this.errorBttn = Selector('h3').withAttribute('data-test','error')
        this.firstName = Selector('input').withAttribute('name','firstName')
        this.lastName = Selector('input').withAttribute('name','lastName')
        this.infoZipCode = Selector('input').withAttribute('name','postalCode')
    }

    async submitCheckoutForm(first,last,zip){
        if (first != null) {        
            await t.typeText(this.firstName, first, {paste:true})
        }
        if (last != null) {
            await t.typeText(this.lastName, last, {paste:true})
        }
        if (this.infoZipCode != null) {
            await t.typeText(this.infoZipCode, zip, {paste:true})
        }
        await t.click(this.continueBttn)
    }
}

export default new CheckOutInf()