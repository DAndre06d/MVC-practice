import user from '../model/registerModel.js'
import bcrypt from "bcrypt"

const handleNewUser = async (req, res)=>{
    const email = req.body.username
    const password = req.body.password     
    if(!email || !password) return res.json({"message": "Email and password is required"})
    const duplicate = await user.findOne({email: email}).exec();
    if(duplicate) res.json({'message': "Email already Taken!"})
    try{
        const hashPasword = await bcrypt.hash(password, 10)
        const newUser = await user.create({
            email: email,
            password: hashPasword
        })
       await newUser.save();
       res.json({"message": "Succesfully created new user!"})
    }catch(err){
        console.error(err)
    }
}

export default handleNewUser