import passport from 'passport'
import session from 'express-session'
import passpostLocalMongoose from 'passport-local-mongoose'

const middlewareSession = session({
    secret: `${process.env.SECRET}`,
    resave: false,
    saveUninitialized: false,
})
 export default middlewareSession
