const {
  getProducts,
  getProductsById,
  getSearchProducts,
} = require("../controllers/productController");
const Product = require("../models/productSchema");

const router = require("express").Router();

/**
 * @desc get the all products in the collection
 * @route GET /api/v1/products
 */
router.route("/").get(getProducts);

/**
 * @desc get all the products in the collection using query parameter
 * @route GET /api/v1/products/?searchtext=snddsmf
 */
router.route("/search").get(getSearchProducts);

/**
 * @desc get  product  in the collection using id
 * @route GET /api/v1/products/:id
 */
router.route("/:id").get(getProductsById);

/**
 * @desc add the product
 * @route POST /api/v1/addproduct
 */
router.route("/add").post(async (req, res) => {
  try {
    const { payload } = req.body;
    await Product.create(payload);
    res.status(201).json({ msg: "Success,product created successfully" });
  } catch (e) {
    console.log("Error");
    res.status(400).json({ msg: "Unable to add product, please try again !!" });
  }
});

module.exports = router;
