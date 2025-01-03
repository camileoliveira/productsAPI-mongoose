const {
  addProduct,
  listAllProducts,
  updateProduct,
  removeProduct,
  findProductByName,
  findProductByCategory,
  findProductByPrice,
  findProductByStock,
} = require("../repository/productsRepository");


async function addProductService(name, category, price, stock) {
  try {
    const product = await addProduct(name, category, price, stock);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function listAllProductsService() {
  try {
    const product = await listAllProducts();
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function updateProductService(id, name, category, price, stock) {
  try {
    const product = await updateProduct(id, name, category, price, stock);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function removeProductService(id) {
  try {
    const product = await removeProduct(id);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findProductByNameService(name) {
  try {
    const product = await findProductByName(name);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findProductByCategoryService(category) {
  try {
    const product = await findProductByCategory(category);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findProductByPriceService(price) {
  try {
    const product = await findProductByPrice(price);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findProductByStockService(stock) {
  try {
    const product = await findProductByStock(stock);
    return product;
  } catch (err) {
    console.log("service layer", err.message);
  }
}

module.exports = {
  addProductService,
  listAllProductsService,
  updateProductService,
  removeProductService,
  findProductByNameService,
  findProductByCategoryService,
  findProductByPriceService,
  findProductByStockService,
};

