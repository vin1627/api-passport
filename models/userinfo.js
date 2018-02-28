var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bCrypt = require('bcrypt');
var userinfoSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userinfoSchema.pre('save', function(next)  {
  var user = this;
  if(this.isModified('password')|| this.isNew){
    bCrypt.genSalt(10, function(err,salt)  {
      if(err){
        return next(err);
      }
      bCrypt.hash(user.password, salt, function(err, hash) {
      if(err){
        return next(err);
      }
      user.password= hash;
      next()
      });
    });
  } else{
    return next();
  }
});

userinfoSchema.methods.comparePassword = function(passw, cb) {
  bCrypt.compare(passw, this.password, (err, isMatch)=>{
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  });
};



module.exports = mongoose.model('userinfo', userinfoSchema);
