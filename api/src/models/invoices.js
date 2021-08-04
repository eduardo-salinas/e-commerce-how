const mongoose = require("mongoose");

const InvoicesSchema = new mongoose.Schema(
  {
    items: [Object], //{name,price,quantity}
    totalAmount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: false,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
  }
);

const Invoices = mongoose.model("Invoice", InvoicesSchema, "invoices");

module.exports = Invoices;
