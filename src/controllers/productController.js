const Product = require("../models/productSchema");

exports.getProducts = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    const data = await Product.find()
      .skip(page * limit)
      .limit(limit);
    res.status(200).json({ data: data });
  } catch (e) {
    console.log("Error", e);
  }
};

exports.getProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await Product.find({ _id: id });
    res.status(200).json({ data: data });
  } catch (e) {
    console.log("Error", e);
  }
};

exports.getSearchProducts = async (req, res, next) => {
  try {
    const { searchtext } = req.query;
    // console.log(id);
    const data = await Product.find({
      name: { $regex: searchtext, $options: "i" },
    }).limit(20);
    res.status(200).json({ data: data });
  } catch (e) {
    console.log("Error", e);
  }
};
