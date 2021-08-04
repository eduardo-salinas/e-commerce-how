const mongoose = require("mongoose");

const NewsLettersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const Newsletters = mongoose.model(
  "Newsletter",
  NewsLettersSchema,
  "newsletters"
);

module.exports = Newsletters;
