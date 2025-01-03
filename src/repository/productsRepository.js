const Products = require("../schema/productSchema");

async function addProduct(name, category, price, stock) {
  try {
    const newProducts = new Products({ name, category, price, stock });
    return await newProducts.save();
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function listAllProducts() {
  try {
    return await Products.find();
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function updateProduct(id, name, category, price, stock) {
  try {
    const product = await Products.findByIdAndUpdate(
      id,
      { name, category, price, stock },
      { new: true, runValidators: true }
    );
    return product;
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function removeProduct(id) {
  try {
    return await Products.findByIdAndDelete(id);
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findProductByName(name) {
  try {
    const productName = await Products.findOne({ name });
    if (productName) {
      return productName;
    } else {
      console.log("name not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findProductByCategory(category) {
  try {
    const productCategory = await Products.findOne({ category });
    if (productCategory) {
      return productCategory;
    } else {
      console.log("category not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findProductByPrice(price) {
  try {
    const productPrice = await Products.findOne({ price });
    if (productPrice) {
      return productPrice;
    } else {
      console.log("price not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findProductByStock(stock) {
  try {
    const productStock = await Products.findOne({ stock });
    if (productStock) {
      return productStock;
    } else {
      console.log("stock not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

module.exports = {
  addProduct,
  listAllProducts,
  updateProduct,
  removeProduct,
  findProductByName,
  findProductByCategory,
  findProductByPrice,
  findProductByStock,
};
