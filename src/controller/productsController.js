const {
  addProductService,
  listAllProductsService,
  updateProductService,
  removeProductService,
  findProductByNameService,
  findProductByCategoryService,
  findProductByPriceService,
  findProductByStockService,
} = require("../service/productsService");

async function addProductHandler(req, res) {
  try {
    const { name, category, price, stock } = req.body;
    const newProduct = await addProductService(name, category, price, stock);
    return res.status(200).send(newProduct);
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function listAllProductsHandler(req, res) {
  try {
    const products = await listAllProductsService();
    return res.status(200).send(products);
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function updateProductHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, category, price, stock } = req.body;
    const updateProduct = await updateProductService(
      id,
      name,
      category,
      price,
      stock
    );
    return res.status(200).send(updateProduct);
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function removeProductHandler(req, res) {
  try {
    const { id } = req.params;
    const removeProduct = await removeProductService(id);

    if (removeProduct) {
      return res.status(200).send("Product removed");
    }
    return res.status(404).send("Product not found");
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function findProductHandler(req, res) {
  try {
    const { name, category, price, stock } = req.query;
    if (name) {
      const nameProduct = await findProductByNameService(name);
      return res.status(200).send(nameProduct);
    }

    if (category) {
      const categoryProduct = await findProductByCategoryService(category);
      return res.status(200).send(categoryProduct);
    }

    if (price) {
      const priceProduct = await findProductByPriceService(price);
      return res.status(200).send(priceProduct);
    }

    if (stock) {
      const stockProduct = await findProductByStockService(stock);
      return res.status(200).send(stockProduct);
    }
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

module.exports = {
  addProductHandler,
  listAllProductsHandler,
  updateProductHandler,
  removeProductHandler,
  findProductHandler
};
