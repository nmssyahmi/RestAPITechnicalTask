const express = require(`express`);
const router = express.Router();

const {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require(`../routes/controllers/prods`);

router.route(`/`).get(getAllProduct).post(createProduct);
router.route(`/:id`).get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
