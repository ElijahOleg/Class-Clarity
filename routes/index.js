'use strict';
var express = require('express');
var router = express.Router();
var cps = require('cps-api');

//Creating a CPS connection
var cpsConn = new cps.Connection(  process.env.CLARITYCONTROL_URL,  process.env.CLARITYCONTROL_DATABASE, process.env.CLARITYCONTROL_USERNAME,    process.env.CLARITYCONTROL_PASSWORD,    'document',    'document/id',     {account: process.env.CLARITYCONTROL_ACCOUNT});

// Debug
//cpsConn.debug = true;

var arrayObj = [{
  'id': 1,
  'user-type': 'student',
  'email': 'test@gmail.com',
  'password': 'password',
  'quantity': '12',
  'date': new Date().toLocaleString(),
  'question': '?'
}, {
  'id': 2,
  'user-type': 'student',
  'email': 'test@gmail.com',
  'password': 'password',
  'quantity': '48',
  'date': new Date().toLocaleString(),
  'question': '?'
}];
// var documents = arrayObj;
// cpsConn.sendRequest(new cps.InsertRequest(documents), function (err, resp) {
//    if (err) return console.error(err); // Handle error
//    console.log(resp);
// });

// var replace_request = new cps.PartialReplaceRequest(arrayObj);
// cpsConn.sendRequest(replace_request, function (err, replace_resp) {
//    if (err) return console.log(err); // Handle error
//    console.log(replace_resp)
// }, 'json');

// var id = { id: '3'},
//     id2 = { id: '4'};
// cpsConn.sendRequest(new cps.DeleteRequest([id, id2]), function (err, delete_resp) {
//   if (err) return console.log(err);
//   console.log(delete_resp);
// });


// var retrieve_req = new cps.RetrieveRequest(['3','4']);
// cpsConn.sendRequest(retrieve_req, function (err, retrieve_resp) {
//   if (err) return console.log(err);
//   if (retrieve_resp) {
//      console.log(retrieve_resp.results);
//   }
// }, 'json');


/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});

router.post('/users', function(req, res){
 var user = {
   'email': req.body.email,
   'isTeacher': req.body.userType,
   'name': req.body.name,
   'dateCreated': new Date().toLocaleString(),
   'sessions': [req.body.sessionId]
 };
 cpsConn.sendRequest(new cps.InsertRequest(user), function (err, resp) {
    if (err) return console.error(err); // Handle error
    console.log(resp);
 });
});

router.post('/:sessions', function(req, res){
 var questions = {
   'questionId': req.body.questionId,
   'studentsQuestions': [req.body]
 };
});

module.exports = router;
