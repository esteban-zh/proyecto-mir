import  mongoose  from "mongoose";

const schema = {
    name: String,
    type: String,
    capacity: String,
    price: Number
};

export const Cars = mongoose.model("cars", schema)