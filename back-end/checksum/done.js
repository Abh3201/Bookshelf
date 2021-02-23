const http = require('http');
const https = require('https');
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
router.post('/', urlencodedParser, (req, res) =>{

   var q = req.query;
   var keyName1 = req.body.STATUS;
   if (keyName1 == "TXN_SUCCESS") {
   console.log("this is ",keyName1);
   console.log("This is query", q['a'])
      }
      
  
      res.redirect('/for');
      res.send();


//    res.redirect( 'http://localhost:4200/afpay', 301 );
//    res.redirect()
   
})



module.exports = router;