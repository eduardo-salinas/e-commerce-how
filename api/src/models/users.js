const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsersSchema = new mongoose.Schema(
  {
    resetPass: false,
    name: {
      required: true,
      type: String,
      // lowecase: true,
    },
    lastName: {
      required: true,
      type: String,
      // lowercase: true,
    },
    //SE DEBE HACER LA VALIDACIÓN
    email: {
      unique: true,
      required: true,
      type: String,
    },
    subscribed: false,
    userStatus: {
      required: false,
      type: String,
      enum: ["Premium", "Regular", "Admin", "Bloqueado"],
      default: "Regular",
    },
    address: {
      required: false,
      type: String,
      default: "",
    },
    //SE DEBE SETEAR EL CRYPTO
    password: {
      required: true,
      type: String,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    versionKey: false,
  }
);

UsersSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UsersSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const User = mongoose.model("User", UsersSchema, "users");

module.exports = User;
