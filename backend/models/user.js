import  mongoose  from "mongoose";
const  {Schema} = mongoose;
import bcrypt from 'bcryptjs';

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles:[{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamp: true,
    versionKey: false
}
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword);
}

export default mongoose.model('User', userSchema);

