import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/shop-item', homeController.getShopItem)
    router.get('/shop-account', homeController.getShopAccout)
    router.get('/shop-checkout', homeController.getShopCheckout)
    router.get('/shop-product-list', homeController.getShopProductList)
    router.get('/shop-index-header-fix', homeController.getShopIndexHeader)
    router.get('/shop-search-result', homeController.getShopSearchResult)
    router.get('/shop-shopping-cart', homeController.getShopShoppingCart)
    router.get('/shop-standart-forms', homeController.getShopStandartForms)
    router.get('/shop-contacts', homeController.getShopContacts)
    router.get('/shop-shopping-cart-null', homeController.getShopShoppingCartNull)
    router.get('/admin', homeController.getAdmin)
    return app.use('/', router);
}

module.exports = initWebRoute;