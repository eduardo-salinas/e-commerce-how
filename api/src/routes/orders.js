const { Router } = require("express");
const router = Router();
const orderSchema = require("../models/orders");
const invoiceSchema = require("../models/invoices");
const userSchema = require("../models/users");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwt_decode = require("jwt-decode");

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    try {
      const { id } = req.params;
      const orderById = await orderSchema
        .findById(id)
        .populate("user")
        .populate("invoice");
      res.send(orderById);
    } catch (err) {
      return res.status(404).send("Order not found");
    }
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const { user, date, state } = req.query;
    if (findUser.userStatus !== "Admin") {
      try {
        const ordersByUser = await orderSchema
          .find({ user: findUser._id })
          .populate("user")
          .populate("invoice");
        return res.send(ordersByUser);
      } catch (err) {
        return res.status(404).send("Order not found");
      }
    }
    if (date) {
      try {
        const ordersByDate = await orderSchema
          .find()
          .populate("user")
          .populate("invoice");
        const filter = ordersByDate.filter((order) =>
          order.date.toString().includes(date)
        );
        return res.send(filter);
      } catch (err) {
        return res.status(404).send("Date without orders");
      }
    }
    if (state) {
      try {
        const ordersByDate = await orderSchema
          .find({ state: state })
          .populate("user")
          .populate("invoice");
        return res.send(ordersByDate);
      } catch (err) {
        return res.status(404).send("Date without orders");
      }
    }
    if (user) {
      try {
        const ordersByUser = await orderSchema
          .find()
          .populate("user")
          .populate("invoice");
        const filtered = ordersByUser.filter(
          (order) => {
            if (order.user===null) return false;
            return order.user.name.toLowerCase().includes(user.toLowerCase())}
        );
        return res.send(filtered);
      } catch (err) {
        return res.status(404).send("Date without orders");
      }
    }
    const getAllOrders = await orderSchema
      .find()
      .populate("user")
      .populate("invoice");
    return res.send(getAllOrders);
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    try {
      const { invoice } = req.body;
      const invoiceData = await invoiceSchema.findById(invoice);
      const data = {
        user: findUser._id,
        invoice: invoiceData._id,
      };
      const newOrder = await new orderSchema(data);
      await newOrder.save();
      return res.send(newOrder);
    } catch (err) {
      return res.status(404).send(err);
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
      const { id, state } = req.body;
      const update = { state: state };
      const order = await orderSchema.findByIdAndUpdate(id, update);
      res.send(order._id);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }
);

module.exports = router;
