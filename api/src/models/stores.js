const mongoose = require("mongoose");

const StoresSchema = new moongose.Schema(
    {
        name: {
            type: Number,
            required: true,
        },
        addres: {
            type: Number,
            required: true,
        },
        product_name: {
            type: String,
            required: true,
        },
        pick_up: {
            type: Date,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

const Stores = mongoose.model("Stores", StoresSchema, "stores");

module.exports = Stores;
