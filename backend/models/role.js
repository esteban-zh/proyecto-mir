import  mongoose  from "mongoose";
const  {Schema} = mongoose;

export const ROLES = ["user", "admin"];

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default mongoose.model('Role', roleSchema);