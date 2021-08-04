const { Router } = require("express");
const router = Router();
const productSchema = require("../models/products");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwt_decode = require("jwt-decode");
const userSchema = require("../models/users");

router.get("/", async (req, res) => {
  const { category, name, vineyard, barcode } = req.query;
  if (vineyard) {
    try {
      const productsByVineyard = await productSchema.find();
      let filter = productsByVineyard.filter((v) => v.vineyard.toLowerCase().includes(vineyard.toLowerCase()))
      filter.length ? res.send(filter) : res.status(404).send("Sorry... Vineyard not found")
      ;
    } catch (err) {
      return res.status(404).send("Sorry... Vineyard not found");
    }
  }
  if (category) {
    try {
      const productsByCategory = await productSchema.find({
        category: category,
      });
      return res.send(productsByCategory);
    } catch (err) {
      return res.status(404).send("The category was not found");
    }
  }
  if (name) {
    try {
      const productsByName = await productSchema.find();
      let filter = productsByName.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.send(filter);
    } catch (err) {
      return res.status(404).send("The wine was not found");
    }
  }
  if (barcode) {
    try {
      const productsByBarcode = await productSchema.find({
        barcode: barcode,
      });
      console.log(productsByBarcode)
      if(productsByBarcode.length > 0) {
        return res.send(productsByBarcode);
      } else {
        return res.status(404).send(["Not found"]);
      }
    } catch (err) {
      return res.status(404).send("Sorry... Barcode not found");
    }
  }
  const products = await productSchema.find();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productsById = await productSchema.findById(id);
    res.send(productsById);
  } catch (err) {
    return res.status(404).send("Sorry not found");
  }
});

//Pruebas de rutas
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      try {
        const {
          name,
          price,
          vineyard,
          description,
          category,
          stock,
          imageUrl,
          varietal,
          year,
          barcode,
        } = req.body;
        const data = {
          name: name,
          price: price,
          vineyard: vineyard,
          rating: [5],
          description: description,
          category: category,
          stock: stock,
          imageUrl: imageUrl,
          varietal: varietal,
          year: year,
          reviews: [],
          barcode: barcode
        };
        const newProduct = await new productSchema(data);
        newProduct.save();
        res.send("post Ok");
      } catch (err) {
        res.status(404).send(err);
      }
    } else {
      res.status(401).send({ message: "No está autorizado" });
    }
  }
);

router.put(
  "/vineyard",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const {vineyard, increase, discount} = req.body
      const productsByVineyard = await productSchema.find();
      let filter = productsByVineyard.filter((v) => v.vineyard.toLowerCase().includes(vineyard.toLowerCase()))
      filter.map(async(wine)=>{
       const update = {
        price: Math.floor(wine.price * increase * discount) 
      };
      const product = await productSchema.findByIdAndUpdate(wine._id, update);
     })      
      res.send("Cambios completos");
    } else {
      res.status(401).send({ message: "No esta autorizado" });
    }
  }
);

router.put(
  "/modify",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id, description, name, price, stock, vineyard, barcode } = req.body;
      const update = {
        name: name,
        price: price,
        stock: stock,
        vineyard: vineyard,
        description: description,
      };
      const product = await productSchema.findByIdAndUpdate(id, update);
      res.send("Cambios completos");
    } else {
      res.status(401).send({ message: "No esta autorizado" });
    }
  }
);

router.put(
  "/addreview",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { content, id, calification } = req.body;
      const token = req.headers.authorization.split(" ");
      const decodificado = jwt_decode(token[1]);
      const findUser = await userSchema.findOne({ email: decodificado.email });
      const review = { name: findUser.name, content: content };
      const addReview = await productSchema.findByIdAndUpdate(id, {
        $push: { reviews: review },
      });
      const addCalification = await productSchema.findByIdAndUpdate(id, {
        $push: { rating: calification },
      });
      res.send("Review agregada");
    } catch (e) {
      res.status(404).send({ message: "Ha ocurrido un error" });
    }
  }
);

router.put(
  "/addvarietal",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { productId, varietal } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const addVarietal = await productSchema.findByIdAndUpdate(productId, {
        $push: { varietal: varietal },
      });
      res.send("Se añadió el varietal");
    } else {
      res.status(401).send({ message: "No tiene permisos" });
    }
  }
);

router.put(
  "/removevarietal",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { productId, varietal } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const removeVarietal = await productSchema.findByIdAndUpdate(productId, {
        $pull: { varietal: varietal },
      });
      res.send("Se removió el varietal");
    } else {
      res.status(491).send({ message: "No tiene permisos" });
    }
  }
);

module.exports = router;
