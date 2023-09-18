//jshint esversion:6
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import connnectDB from "./config/dbconn.js"
import mongoose, { mongo } from 'mongoose';
import rootRouter from './routes/root.js'
import session from 'express-session'
import passport from 'passport'
import passpostLocalMongoose from 'passport-local-mongoose'
import middlewareSession from './middleware/sessionPass.js'
import registerRouter from './routes/register.js'
import loginRouter from './routes/login.js'
import logoutRouter from './routes/logout.js'
import secretRouter from './routes/secrets.js'


dotenv.config();
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(middlewareSession)
app.use(passport.initialize())
app.use(passport.session())
connnectDB();
//ROUTES

app.use('/', rootRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/secrets', secretRouter)

//DB CONNECTION
mongoose.connection.once('open', ()=>{
    console.log("Connected to mongoDB")
    app.listen(port, ()=>{
        console.log(`Running on port: ${port}.`)
    })
})
