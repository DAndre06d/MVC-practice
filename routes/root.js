import express from "express"


const rootRouter = express.Router();

rootRouter.get('^/$|/home',(req,res)=>{
    res.render('home')
})

export default rootRouter