const { Router } = require("express");
const router = Router();
const userSchema = require("../models/users");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwt_decode = require("jwt-decode");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bcrypt = require("bcrypt");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const returnedUser = {
      _id: findUser._id,
      address: findUser.address,
      orders: findUser.orders,
      userStatus: findUser.userStatus,
      name: findUser.name,
      lastName: findUser.lastName,
      email: findUser.email,
      wishlist: findUser.wishlist,
      subscribed: findUser.subscribed,
    };
    res.json(returnedUser);
  }
);

router.get(
  "/allusers",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const allUsers = await userSchema.find();
      res.send(allUsers);
    } else {
      res.status(401).send({ message: "No está autorizado" });
    }
  }
);

router.post("/signup", async (req, res) => {
  const { name, lastName, email, address, password } = req.body;
  console.log(req.body);
  const data = {
    resetPass: false,
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    orders: [],
    wishlist: [],
    subscribed: false,
  };
  try {
    const newUser = await new userSchema(data);
    await newUser.save();
    return res.status(201).send({ message: "Se creo correctamente" });
  } catch (err) {
    return res.status(404).send({ message: "No se creo correctamente" });
  }
});

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.params;
      const user = await userSchema.findById(id);
      res.send(user);
    } else {
      res.status(401).send({ message: "No tiene permisos" });
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userEmail = await userSchema.findOne({ email: email });
  if (!userEmail) {
    return res.status(401).send({ message: "off" });
  }
  const validate = await userEmail.isValidPassword(password);
  if (!validate) {
    return res.status(401).send({ message: "off" });
  }
  if (userEmail.userStatus === "Bloqueado") {
    return res.status(401).send({ message: "Acceso denegado" });
  }
  if (userEmail.resetPass) {
    let code = (Math.floor(Math.random() * 90000) + 10000).toString();
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: "houseOfWinesHr@gmail.com",
          pass: "googleputo",
        },
      })
    );
    var mailOptions = {
      from: "houseOfWinesHr@gmail.com",
      to: `${userEmail.email}`,
      subject: "Restablecimiento de contraseña",
      text: "Este codigo es para restablecer tu contraseña",
      html: `<h2>House Of Wines</h2>
      <h3>Codigo de recuperacion: ${code}</h3>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.message);
      }
    });
    return res.send({ message: "reset pass", code: code });
  }

  const jwtToken = jwt.sign(
    {
      id: userEmail._id,
      email: userEmail.email,
    },
    "secret",
    { expiresIn: "1d" }
  );
  if (userEmail.userStatus === "Admin")
    return res.send({ token: jwtToken, message: "on", admin: "on" });
  return res.send({ token: jwtToken, message: "on" });
});

router.put(
  "/upgradeuser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { userEmail } = req.body;
      const user = await userSchema.findOneAndUpdate(
        { email: userEmail },
        { userStatus: "Admin" }
      );
      res.send("Actualizado");
    } else {
      res.send("No tiene permisos ");
    }
  }
);

router.put(
  "/resetPass",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.body;
      const userDeleted = await userSchema.findByIdAndUpdate(id, {
        resetPass: true,
      });
      res.send("Usuario debe restablecer password");
    } else {
      res.status(401).send({ message: "No tiene acceso" });
    }
  }
);

router.put("/upgradePassword", async (req, res) => {
  try {
    console.log("****************body", req.body);
    const { userEmail, newPassword } = req.body;
    const hash = await bcrypt.hash(newPassword, 10);
    const user = await userSchema.findOneAndUpdate(
      { email: userEmail },
      { password: hash, resetPass: false }
    );
    res.send("Actualizado");
  } catch (e) {
    res.status(404).send("No tiene permisos ");
  }
});

router.put(
  "/blockuser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.body;
      const userDeleted = await userSchema.findByIdAndUpdate(id, {
        userStatus: "Bloqueado",
      });
      res.send("Usuario bloqueado");
    } else {
      res.status(401).send({ message: "No tiene acceso" });
    }
  }
);

router.put(
  "/addorder",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { orderId } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const addOrder = await userSchema.findByIdAndUpdate(findUser._id, {
      $push: { orders: orderId },
    });
    res.send("Correcto");
  }
);

router.put(
  "/addwishlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { productId } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const addWish = await userSchema.findByIdAndUpdate(findUser._id, {
      $push: { wishlist: productId },
    });
    res.send("Correcto");
  }
);

router.put(
  "/removewishlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { productId } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const removeWish = await userSchema.findByIdAndUpdate(findUser._id, {
      $pull: { wishlist: productId },
    });
    res.send("Correcto");
  }
);

router.put(
  "/subscription",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { subscribed } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const removeWish = await userSchema.findByIdAndUpdate(findUser._id, {
      subscribed: subscribed,
    });
    res.send("Correcto");
  }
);

router.put(
  "/precheckout",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { name, lastName, address } = req.body;
      const token = req.headers.authorization.split(" ");
      const decodificado = jwt_decode(token[1]);
      const findUser = await userSchema.findOne({ email: decodificado.email });
      const update = {
        name: name,
        lastName: lastName,
        address: address,
      };
      const updateUser = await userSchema.findByIdAndUpdate(
        findUser._id,
        update
      );
      res.send({ message: "Update ok" });
    } catch (e) {
      res.status(404).send({ message: "Ha ocurrido un error", error: e });
    }
  }
);

module.exports = router;
