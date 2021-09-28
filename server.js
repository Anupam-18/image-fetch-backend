const express = require("express");
var faker = require("faker");
const connectDB = require("./config/db");
const getRandomColor = require("./utility/getColors");
require("dotenv").config();
const cors = require('cors');

const app = express();
const port = 5000 || process.env.PORT;

connectDB();


const Product = require("./model/product");
app.use(cors());
app.options('*', cors());


app.get("/test", (req, res, next) => {
  res.send("Server is running perfect");
});


app.get("/recordClick/:id", async (req, res, next) => {
  let { id } = req.params;
  let product = await Product.findById(id);

  console.log("earlier", product.clickCount);
  if (product !== undefined) {
    product = await Product.findByIdAndUpdate(
      id,
      {
        clickCount: product.clickCount + 1,
      },
      { new: true }
    );

    console.log("after", product.clickCount);
    res.json({ message: "success", data: product });
  } else {
    res.json({ message: "failure", data: [] });
  }
});

app.get("/products", async (req, res, next) => {
  let products = await Product.find({});
  if (products !== undefined) {
    res.json({ message: "success", data: products });
  } else {
    res.json({ message: "failure", data: [] });
  }
});

app.get("/product/:id", async (req, res, next) => {
  let { id } = req.params;
  let product = await Product.findById(id);
  if (product !== undefined) {
    res.json({ message: "success", data: product });
  } else {
    res.json({ message: "failure", data: [] });
  }
});


app.get("/saveToDb", async (req, res, next) => {
  for (var i = 29; i > 0; i--) {
    let productObj = {
      name: faker.company.companyName(),
      description: faker.lorem.paragraph(),
      price: Math.floor(Math.random() * 600 + 50),
      color: getRandomColor(),
      image: `WhatsApp+Image+2021-09-25+at+13.29.35+(${i}).jpeg`,
      clickCount: 0,
    };
    let prodct = await Product.create(productObj);
  }
  res.send("done");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
