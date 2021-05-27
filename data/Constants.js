import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce'
    },
    INVALID_USER:{
        INV_USERNAME:'musico',
        INV_PASSWORD:'dejazz'
    }
}

export const MESSAGES = {
    ERROR_MESSAGES:{
        INVALID_LOGIN: 'Epic sadface: Username and password do not match any user in this service'
    }
}

export const PRODUCTS = {
    ADDED_CART_PRDS:{
        BACKPACK: 'Sauce Labs Backpack',
        TSHIRT: 'Test.allTheThings() T-Shirt (Red)',
        JACKET: 'Sauce Labs Fleece Jacket'

    }
}

export const CHECKOUTINFO = {
    FIRST_NAME: 'Sauce',
    LAST_NAME: 'De Arbol',
    ZIP_CODE: '4000'
}