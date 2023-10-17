import mongoose from "mongoose";
import userSchema from "../schemas/userSchema";
import { User } from "../../types/models/user.type";

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
