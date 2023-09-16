import express from "express"
import handleLogin from "../controller/loginController.js";

const loginRouter = express.Router();

loginRouter.get('/', (req,res)=>{
    res.render('login')
})
loginRouter.post('/', handleLogin)
export default loginRouter