const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  color: {
    type: String,
  },
  image: {
    type: String,
  },
  clickCount: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
