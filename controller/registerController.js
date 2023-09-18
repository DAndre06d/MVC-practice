import user from '../model/registerModel.js'
import bcrypt from "bcrypt"
import passport from 'passport'
import passportLocalMongoose from 'passport-local-mongoose'

const handleNewUser = async (req, res)=>{


    user.register({username:req.body.username}, req.body.password, function(err, user){
        if(err){
            console.error(err)
            res.redirect('register')
        }else{
            passport.authenticate("local")(req,res, function(){
                res.redirect('secrets')
            })
        }
    })
//     const email = req.body.username
//     const password = req.body.password     
//     if(!email || !password) return res.json({"message": "Email and password is required"})
//     const duplicate = await user.findOne({email: email}).exec();
//     if(duplicate) res.json({'message': "Email already Taken!"})
//     try{
//         const hashPasword = await bcrypt.hash(password, 10)
//         const newUser = await user.create({
//             email: email,
//             password: hashPasword
//         })
//        await newUser.save();
//        res.json({"message": "Succesfully created new user!"})
//     }catch(err){
//         console.error(err)
//     }
}

export default handleNewUser