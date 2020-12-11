const expressPromise = require("express-promise-router");
const router = expressPromise();

const adminControllers = require("../controllers/admin");
const fileupload = require("../middleware/ImageFileUpload");

router.route("/add-product")
    .get(adminControllers.getAddProduct);

router.route("/add-product")
    .post(fileupload.single("image"), adminControllers.addProduct);

module.exports = router;