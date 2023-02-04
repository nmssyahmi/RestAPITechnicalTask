let { products } = require(`../../data.js`);
const { v4: uuidv4 } = require("uuid");

//GET
const getAllProduct = (req, res) => {
  res.status(200).json({
    success: true,
    data: products,
  });
};

//GET product using specific id
const getProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id == id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, msg: "No product with the id" });
  }
  res.status(200).json({
    success: true,
    selectedProduct: product,
  });
};

//POST
const createProduct = (req, res) => {
  const prod = req.body;
  if (!prod) {
    return res.status(400).send({ success: false, msg: "Try Again" });
  }
  const data = { id: uuidv4(), ...prod };
  products.push(data);
  res.status(201).send({ success: true, newProduct: data });
};

//PATCH
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { productName, productPrice, productBrand, vendor } = req.body;

  const product = products.find((product) => product.id === id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, msg: "No product with the id" });
  }

  if (productName) product.productName = productName;
  if (productPrice) product.productPrice = productPrice;
  if (productBrand) product.productBrand = productBrand;
  if (vendor) product.vendor = vendor;
  res.status(201).send({ success: true, updProduct: product });
};

//DELETE
const deleteProduct = (req, res) => {
  const items = products.find((items) => items.id === req.params.id);
  if (!items) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with the id:${req.params.id}` });
  }

  const _item = products.filter((items) => items.id !== req.params.id);
  return res.status(200).json({ success: true, data: _item });
};

module.exports = {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
