import passport from "passport";
import passportLocalMongoose from 'passport-local-mongoose'

const handleLogout = (req, res) =>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}  

export default handleLogout