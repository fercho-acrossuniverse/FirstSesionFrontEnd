import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { URLS, CREDENTIALS, MESSAGES } from '../data/Constants'

fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('User can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.expect(ProductsPage.ProductsTitle.innerText).contains('PRODUCTS')
})

test('User can not login using invalid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.INV_USERNAME,CREDENTIALS.INVALID_USER.INV_PASSWORD)
    
    await t.expect(LoginPage.ErrorMsg.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)
})

test('User can logout from Products page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.ProductsTitle.innerText).contains('PRODUCTS')
    await t.click(ProductsPage.BurguerMenu)
    await t.click(ProductsPage.logoutButton)
    
    await t.expect(LoginPage.loginButton.exists).ok()
})


