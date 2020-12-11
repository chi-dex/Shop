const expressPromise = require("express-promise-router"); //helps us with try catch
const router = expressPromise();

const productControllers = require("../controllers/product");

router.route("/")
    .get(productControllers.getProducts);

module.exports = router;