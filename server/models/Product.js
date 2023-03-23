import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const productSchema = new Schema({
    price: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    },
    expense: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    },
    transactions: [
        {
            type: mongoose.Schema.type.ObjectId,
            ref: "Transaction",
        }
    ],
},
{
    timestamps: true,toJSON: { getters: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;