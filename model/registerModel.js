import mongoose, { Schema } from "mongoose";
import md5 from "md5";
import encrypt from 'mongoose-encryption';

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const user = mongoose.model('user', userSchema)
export default user