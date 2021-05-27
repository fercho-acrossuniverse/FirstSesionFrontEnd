import { Selector, t } from 'testcafe'

class LoginPage {
    constructor (){
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        //this.loginButton = Selector('input[name="login-button"]')
        this.loginButton = Selector('input').withAttribute('name','login-button')
        this.ErrorMsg = Selector('h3[data-test="error"]')
    }

    async submitLoginForm(username,password){
        if (username != null) {        
            await t.typeText(this.usernameField, username, {paste:true})
        }
        if (password != null) {
            await t.typeText(this.passwordField, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
}

export default new LoginPage()