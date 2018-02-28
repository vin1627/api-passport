var userinfo = require('../models/userinfo');
var passport = require('passport');
var config = require('../config/application-settings');
var express = require('express');
var jwt = require('jwt-simple');
var router = express.Router();
require('../config/passport')(passport);

router.post('/sign-up', function(req, res){
    if(!req.body.username || !req.body.password){
      res.json({sucess: "please pass Name and password"});
    }else{
      var newUser = new userinfo({
        username: req.body.username,
        password: req.body.password
      });
      newUser.save((err)=>{
        if(err){
          res.json({success:false, msg: "username already exist"});
          console.log(err)
        }else{
          res.json({success:true, msg: "Sucessful create user"});
        }
      });
    }
});


router.post('/authenticate', (req, res)=>{
  userinfo.findOne({
    username: req.body.username
  }, (err, user) =>{
    if(err)
    throw err;
    if(!user){
      return res.status(403).send({success:false, msg:"Authentication failes. User not found."});
    }
    else{
      userinfo.comparePassword(req.body.password, (err, isMatch) => {
        if(isMatch && !err){
          var token = jwt.encode(user, config.secret);
          res.json({success: true, token: 'bearer ' + token});
        }else {
          return res.status(403).send({success:false, msg:"Authentication failed. Wrong Password."});

        }
      })
      res.send(JSON.stringify(req.body.password));
    }
  });
});






module.exports = router;
