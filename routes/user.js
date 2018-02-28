var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');


// router.get('/', (res, req, next) =>{
//   userController.search({}, (err, result) =>{
//     var respond = {data: result};
//       res.send(respond);
//   });
// });
//
// router.get('/all', function(res, req, next){
//   userController.fetchAll({}, function(err, result){
//       var respond = {data: result};
//       res.send(respond);
//   });
// });
//
// router.post('/basic-search', function(res, req, next){
//   var data = req.body;
//   userController.find(data, function(err, results){
//     objectResponse = {result: "success", data: results };
//     res.send(objectResponse);
//   });
// });

//create data
router.post('/', function(req, res, next){
  var data = req.body;
  userController.save(data, function(err, result){
    var response = {data: result};
        res.send(JSON.stringify(response));
  });
});

//find by id
// router.get('/:id', function(req, res, next){
//     var id = req.params.id;
//     giftCertificateController.view(id, function(err, result){
//           var response = {data: result};
//       res.send(response)
//     });
// });
//
// router.delete('/:id', function(req, res, next){
//   var id = req.params.id;
//     giftCertificateController.delete(id, function(err, result){
//       var response = {data: result};
//       res.send(response)
//     })
// })
//
// //update thru id
//
// router.post('/:id', function(req, res, next){
//   var id = req.params.id;
//   var formData = req.body;
//     giftCertificateController.update(id, formData, function(err, result){
//         var response = {data: result};
//         res.send(response);
//     });
// });
module.exports = router;
