const express = require('express');
const rp = require('request-promise');
const helpers = require('./helpers/createSession.js');
const router = express.Router();

// api auth
const key = process.env.API_KEY;
const secret = process.env.API_SECRET;
const sessionSig = helpers.md5Hash(`${secret}ApiKey${key}`);
const params = `?ApiKey=${key}&ApiSig=${sessionSig}`;

// create new session for api auth
router.post(`/sparkSession`, function(req, res) {
  return rp({
    uri: `https://sparkapi.com/v1/session${params}`,
    method: 'POST',
    body: {},
    headers: {
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  }).then((response) => {
    res.send({ token: response.D.Results[0].AuthToken});
  }).catch(err => res.status(400).send(err))
});


router.get('/search', function(req, res){
  rp({
    uri: 'https://sparkapi.com/v1/listings',
    method: 'GET',
    headers: {
      'X-SparkApi-User-Agent': 'sharon_caron'
    }
  }).then((response) => {
    // console.log(res);
    // var dataObj = JSON.parse(body);
    // res.send(dataObj);
    res.send(JSON.parse(response))
  }).catch(err => console.log(err));
});


module.exports = router;