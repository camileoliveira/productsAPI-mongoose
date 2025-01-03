const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  stock: {
    type: Number,
    require: true,
  },
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;