import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema ({
    username: String,
    email: String,
    password: String
})

export const UserModel = mongoose.model("User", UserSchema)