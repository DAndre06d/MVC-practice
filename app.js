//jshint esversion:6
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import connnectDB from "./config/dbconn.js"
import mongoose, { mongo } from 'mongoose';
import rootRouter from './routes/root.js'
import registerRouter from './routes/register.js'
import loginRouter from './routes/login.js'
import logoutRouter from './routes/logout.js'
import encrypt from 'mongoose-encryption';


dotenv.config();
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

connnectDB();
//ROUTES
app.use('/', rootRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
mongoose.connection.once('open', ()=>{
    console.log("Connected to mongoDB")
    app.listen(port, ()=>{
        console.log(`Running on port: ${port}.`)
    })
})
