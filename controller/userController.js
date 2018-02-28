var userinfo = require('../models/userinfo');
var mod = userinfo;

var BaseCRUD = {
  save: function(obj, callback){
    var newObject = new mod(obj);
    newObject.save(function (err, singleObject) {
        callback(err, singleObject);
        console.log(obj)
    });
  }
  // search: function(search, callback){
  //   userinfo.find({is_deleted:false}, function(err, list){
  //     callback(err, list);
  //   });
  // },
  //
  // fetchAll: function(search, callback){
  //   userinfo.find({}, function(err, list){
  //     callback(err, list);
  //   });
  // },
  //
  // view: function(id, callback){
  //   userinfo.findById(id, function(err, result){
  //     callback(err, result);
  //   })
  // },
  // delete: function(id, formData, callback){
  //   userinfo.findByIdAndUpdate(id, {$set: formData}, function(err, result){
  //     callback(err, result);
  //   });
  // },
  // update: function(id, formData, callback){
  //   userinfo.findByIdAndUpdate(id, {$set: formData}, function(err, result){
  //     callback(err, result);
  //   });
  // }
};

module.exports = BaseCRUD;
