import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema({
    date: String,
    prevenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    }})