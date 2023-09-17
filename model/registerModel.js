import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const user = mongoose.model('user', userSchema)
export default user