let getHomepage = (req, res) => {
    return res.render('shop-index');
}
let getShopItem = (req, res) => {
    return res.render('shop-item');
}
let getShopAccout = (req, res) => {
    return res.render('shop-account');
}
let getShopCheckout = (req, res) => {
    return res.render('shop-checkout');
}
let getShopProductList = (req, res) => {
    return res.render('shop-product-list');
}
let getShopIndexHeader = (req, res) => {
    return res.render('shop-index-header-fix');
}
let getShopSearchResult = (req, res) => {
    return res.render('shop-search-result');
}
let getShopShoppingCart = (req, res) => {
    return res.render('shop-shopping-cart');
}
let getShopStandartForms = (req, res) => {
    return res.render('shop-standart-forms');
}
let getShopContacts = (req, res) => {
    return res.render('shop-contacts');
}
let getShopShoppingCartNull = (req, res) => {
    return res.render('shop-shopping-cart-null');
}
let getAdmin = (req, res) => {
    return res.render('admin');
}

module.exports = {
    getHomepage,
    getShopItem,
    getShopAccout,
    getShopCheckout,
    getShopProductList,
    getShopIndexHeader,
    getShopSearchResult,
    getShopShoppingCart,
    getShopStandartForms,
    getShopContacts,
    getShopShoppingCartNull,
    getAdmin

}