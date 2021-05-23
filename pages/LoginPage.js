import { Selector } from 'testcafe'

class LoginPage {
    constructor (){
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('input[name="login-button"]')
    }
}

export default new LoginPage()