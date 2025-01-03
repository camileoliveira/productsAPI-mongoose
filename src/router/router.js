const express = require("express");
const router = express.Router();

const {
  addProductHandler,
  listAllProductsHandler,
  updateProductHandler,
  removeProductHandler,
  findProductHandler,
} = require("../controller/productsController");

router.post("/product", addProductHandler);
router.get("/product", listAllProductsHandler);
router.get("/product/search", findProductHandler);
router.put("/product/:id", updateProductHandler);
router.delete("/product/:id", removeProductHandler);

module.exports = router;