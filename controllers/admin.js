const Product = require("../model/product");

module.exports = {
    getAddProduct: (req, res, next) => {
        res.render("admin/edit-product", {
            pageTitle: "Add Product",
            path: "/admin/add-product"
        });
    },

    addProduct: async (req, res, next) => {

        try {
            const { title, description, amount } = req.body;
            const image = req.file.path;

            const product = await new Product({ title, description, image, amount });
            await product.save();
            res.redirect("/");
        }
        catch (err) {
            next(new Error(err))
        }
    }
}