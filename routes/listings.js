const express = require('express');
const request = require('request');
const router = express.Router();

// api auth
const key = process.env.API_KEY;
const secret = process.env.API_SECRET;
const params = `?ApiKey=${key}&ApiSig=${secret}ApiKey${key}`;

// router.post(`https://sparkapi.com/v1/session${params}`, function(req, res) {
//   res.send('initial post route reached');
// });

    // .then(function (response) {
    //   res.send(response)
    //   return response.json();
    // });
    
// router.post('/search', function(req, res, callback) {
//   console.log('post route on backend')
//   res.send('empty post to establish session');
// });


router.get('/listings/search', function(req, res){
  request({
    url: 'https://sparkapi.com/v1/listings',
  }, function(error, response, body){
    if(!error && response.statusCode == 200){
      var dataObj = JSON.parse(body);
      res.send(dataObj);
    }
  });

});





module.exports = router;