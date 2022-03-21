import Cart from '../models/Cart';
import Product from '../models/Product';
let getShopAddCartItem = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(!err && product) {
            Cart.findOne({userId: req.session.userId}, (err, cart) => {
                if(!err && cart) {
                    cart.product.push({
                        _id: product._id,
                        size: 'L',
                        color: 'Pink',
                        quantity: 2
                    });
                    cart.save((err, cart) => {
                        return res.redirect('/shop-shopping-cart');
                    })
                } else {
                    Cart.create({
                        userId: req.session.userId,
                        product: [{
                            _id: product._id,
                            size: 'L',
                            color: 'Pink',
                            quantity: 2
                        }]
                    });
                    return res.redirect('/shop-shopping-cart');
                }
            })
        } else {
            return res.redirect('/shop-shopping-cart');
        }
    })
}

module.exports = {
    getShopAddCartItem,
}