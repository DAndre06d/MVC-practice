import express from "express"
import handleNewUser from "../controller/registerController.js";

const registerRouter = express.Router();

registerRouter.get('/', (req, res)=>{
    res.render("register")
});
registerRouter.post('/', handleNewUser)

export default registerRouter