const { Router } = require("express");
const router = Router();
const VarietalSchema = require("../models/varietals");
const jwt_decode = require("jwt-decode");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userSchema = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const allVarietals = await VarietalSchema.find();
    return res.send(allVarietals);
  } catch (err) {
    return res.status(404).send("No se encontraron varietales.");
  }
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ");
      const decodificado = jwt_decode(token[1]);
      const findUser = await userSchema.findOne({ email: decodificado.email });
      if (findUser.userStatus === "Admin") {
        const { name, relatedCategory } = req.body;
        let data = {
          name: name,
          relatedCategory: relatedCategory,
        };
        const newVarietal = await new VarietalSchema(data);
        await newVarietal.save();
        return res.send("Post Ok");
      } else {
        return res.status(401).send({ message: "No tiene permisos" });
      }
    } catch (err) {
      return res.status(404).send("No se puede crear");
    }
  }
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.body;
      const deletedVarietal = await VarietalSchema.findByIdAndDelete({
        _id: id,
      });
      res.send(`se borró el varietal ${deletedVarietal.name}`);
    } else {
      res.status(401).send({ message: "No tiene permisos" });
    }
  }
);

module.exports = router;
