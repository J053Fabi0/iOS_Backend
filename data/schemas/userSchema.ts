import { Schema } from "mongoose";
import { User } from "../../types/models/user.type";

const userSchema = new Schema<User>({
  name: String,
  enabled: { type: Boolean, default: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.index({ username: 1 }, { unique: true });

export default userSchema;
