import  mongoose  from "mongoose";

const schema = {
    name: String,
    type: String,
    capacity: Number,
    price: Number
};

export const Cars = mongoose.model("cars", schema)