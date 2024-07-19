import mongoose from "mongoose";

export function  connect () {
    mongoose.connect(process.env.MONGO_URI)
    .then((res) => console.log("conectado a mongo"))
    .catch((err)=> console.log(err))
}
