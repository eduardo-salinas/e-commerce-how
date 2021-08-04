const mongoose = require("mongoose");

const VarietalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    relatedCategory : {
      type : String,
      required : true
    }
    
  },
  { versionKey: false }
);

const Varietal = mongoose.model("Varietal", VarietalSchema, "varietals");

module.exports = Varietal;
