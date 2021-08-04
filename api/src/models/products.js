const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    vineyard: {
      type: String,
      required: true,
    },
    rating: [Number],
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Tinto", "Blanco", "Rosado"], //AGREGAR LUEGO MAS CATEGORIAS SI ES NECESARIO
    },
    stock: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: {
      type: String,
      requiered: true,
    },
    varietal: [String],
    year: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
      default: 1,
    },
    reviews: [Object], //{name,content}
    barcode: {
      type: Number,
      required: true,
      unique: true
    }
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("Product", ProductsSchema, "products");

module.exports = Product;
