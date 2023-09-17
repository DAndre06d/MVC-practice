import user from '../model/registerModel.js'
import bcrypt from 'bcrypt'

const handleLogin = async(req, res)=>{
    const email = req.body.username
    const password = req.body.password
    if(!email || !password) return res.json({"message": "Email and password is required"})
    const foundUser = await user.findOne({email:email})
    const match = await bcrypt.compare(password, foundUser.password)
    if(!match){
        return res.json({"message": "Wrong email or password"})
    }else{
        res.render('secrets')
    }

}
export default handleLogin