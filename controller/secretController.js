import user from '../model/registerModel.js'
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import passportLocalMongoose from 'passport-local-mongoose'

const handleSecret = (req, res)=>{
    if(req.isAuthenticated()){
        res.render('secrets')
    }else{
        res.redirect('/login')
    }
}


export default handleSecret