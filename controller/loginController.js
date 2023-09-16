import user from '../model/registerModel.js'

const handleLogin = async(req, res)=>{
    const email = req.body.username
    const password = req.body.password
    if(!email || !password) return res.json({"message": "Email and password is required"})
    const foundUser = await user.findOne({email:email, password: password})
    if(!foundUser){
        return res.json({"message": "Wrong email or password"})
    }else{
        res.render('secrets')
    }

}
export default handleLogin