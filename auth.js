const passport = require('passport');
const Person = require('./models/Person');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(async (username, password, done) => {
    // authentication logic here
    try {
        // console.log('Received credentials:', USERNAME, password);
        const user = await Person.findOne({username});
        if(!user){
            return done(null, false, {message: 'Incorrect username.'});
        }
        const isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch){
            return done(null, user);
        } else{
            return done(null, false, {message: 'Incorrect password.'});
        }
        
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;