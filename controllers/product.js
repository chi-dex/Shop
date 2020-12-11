const Product = require("../model/product");

module.exports = {
    getProducts: async (req, res, next) => {

        try {
            const products = await Product.find();

            res.render("shop/products", {
                pageTitle: "Home",
                path: "/",
                products: products
            });
        }
        catch (err) {
            next(new Error(err))
        }
    },
    getIndex: async (req, res, next) => {
        try {

        }
        catch (err) {

        }
    },
    getCart: async (req, res, next) => {
        try {

        }
        catch (err) {

        }
    }
}