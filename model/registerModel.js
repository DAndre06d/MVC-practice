import mongoose, { Schema } from "mongoose";
import passport from "passport";
import passportLocalMongoose from 'passport-local-mongoose'


const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
userSchema.plugin(passportLocalMongoose);
const user = mongoose.model('user', userSchema)
passport.use(user.createStrategy())
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())
export default user