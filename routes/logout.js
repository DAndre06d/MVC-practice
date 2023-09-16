import express from "express"

const logoutRouter = express.Router();

logoutRouter.get('/', (req, res)=>{
    res.render('home')
})

export default logoutRouter