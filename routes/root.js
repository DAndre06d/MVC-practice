import expres from "express"


const rootRouter = expres.Router();

rootRouter.get('^/$|/home',(req,res)=>{
    res.render('home')
})

export default rootRouter