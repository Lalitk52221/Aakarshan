import mongoose,{Document, Model, Schema} from "mongoose";

interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    id: string; 
    role: string;
}

const UserSchema:Schema<IUser> = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: false,
    },
    role:{
        type: String,
        enum: ["Student", "Teacher", "Admin"],
        default: "Student",    }

})

const User:Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;