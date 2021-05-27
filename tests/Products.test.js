import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import YourCart from '../pages/YourCart'
import { URLS, CREDENTIALS, PRODUCTS, CHECKOUTINFO } from '../data/Constants'
import CheckOutInf from '../pages/CheckOutInf'
import CheckOutOverview from '../pages/CheckOutOverview'
import CheckoutComplete from '../pages/CheckoutComplete'


fixture('Products feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('User can navigate to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    
    //adding more than one assertion in order to check more web elements in the web page
    await t.expect(ProductsPage.addtocartbttn.exists).ok()
    await t.expect(ProductsPage.cartlink.exists).ok()
})

test('Add single item to shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addBackpack)
    
    //adding more than one assertion in order to check more web elements in the web page
    await t.expect(ProductsPage.rmvBackpack.exists).ok()
    await t.expect(ProductsPage.cartlink.innerText).contains('1')
})

test('Add multiple items to shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addBackpack)
    await t.click(ProductsPage.addJacket)
    await t.click(ProductsPage.addTshirt)
    
    //assertions from Product Page
    await t.expect(ProductsPage.rmvBackpack.exists).ok()
    await t.expect(ProductsPage.rmvJacket.exists).ok()
    await t.expect(ProductsPage.rmvTshirt.exists).ok()
    await t.expect(ProductsPage.cartlink.innerText).contains('3')

    await t.click(ProductsPage.cartlink)
    
    //assertions validate all the items added in shopping cart
    await t.expect(YourCart.yourcartTitle.innerText).contains('YOUR CART')
    await t.expect(YourCart.cartItmBackpack.exists).ok()
    await t.expect(YourCart.cartItmTshirt.exists).ok()
    await t.expect(YourCart.cartItmJacket.exists).ok()
    
    await t.click(YourCart.chkoutbtt)

    //Validate missing mail info
    await t.expect(CheckOutInf.chkOutTitle.innerText).contains('CHECKOUT: YOUR INFORMATION')
    await t.click(CheckOutInf.continueBttn)
    
    //Validate error message is displayed in the user´s information page
    await t.expect(CheckOutInf.errorBttn.exists).ok()

    //Filling user Information
    await CheckOutInf.submitCheckoutForm(CHECKOUTINFO.FIRST_NAME,CHECKOUTINFO.LAST_NAME,CHECKOUTINFO.ZIP_CODE)

    //Validate the user navigates to the overview page
    await t.expect(CheckOutOverview.chkoutOverviewTitle.innerText).contains('CHECKOUT: OVERVIEW')
    
    //Validate items in the overview page match with the added items
    await t.expect(CheckOutOverview.overviewItmBackpack.exists).ok()
    await t.expect(CheckOutOverview.overviewItmTshirt.exists).ok()
    await t.expect(CheckOutOverview.overviewItmJacket.exists).ok()

    //Complete the purchase and validate the user navigates to the confirmation page
    await t.click(CheckOutOverview.finishBttn)
    await t.expect(CheckoutComplete.chkoutComplete.innerText).contains('THANK YOU FOR YOUR ORDER')
})