var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/userinfo');
var config = require('./application-settings');

module.exports = (passport) => {
  var opts ={};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.find({id: jwt_payload.id}, (err, user)=>{
      if(err){
        return done(err, false);
      }
      if(user){
        done(null, user);
      }else {
        done(null, false);
      }
    })
  }));

}
