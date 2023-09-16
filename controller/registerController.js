import user from '../model/registerModel.js'

const handleNewUser = async (req, res)=>{
    const email = req.body.username
    const password = req.body.password
    if(!email || !password) return res.json({"message": "Email and password is required"})
    const duplicate = await user.findOne({email: email}).exec();
    if(duplicate) res.json({'message': "Email already Taken!"})
    try{
        const newUser = await user.create({
            email: email,
            password: password
        })
       await newUser.save();
       console.log(newUser)
       res.json({"message": "Succesfully created new user!"})
    }catch(err){
        console.error(err)
    }
}

export default handleNewUser