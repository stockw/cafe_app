// passport (and other libraries use "strategies")
const User = require('../models/user.js');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = async function(passport) {
    // 1 use the local strategy
    // email and password checking 
    passport.use(
        new localStrategy({usernameField: "email"}, async (email, password, done) => {
            // check if user with this email exists
            const user = User.findOne({email: email});
            if (!user) {
                return done(null, false, {message: "Email or password incorrect"});
            }
            // if yes, check if passwords match
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    // if yes, return that user
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Email or password incorrect"})
                }
            })
    
        })
    )

    // 2. add seralize function to passport library
    // place use in a session
    // callback function - a function that runs after another function (or at a specific trigger)
    passport.serializeUser((user, cb) => {
        // do stuff here
        cb(null, user)
    });
    // 3. add deserialize function to passport library
    // take out of session
    passport.deserializeUser(async (id, cb) => {
        return cb(null, await User.findById(id))
    });
}