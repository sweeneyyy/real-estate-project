const express = require('express');
const rp = require('request-promise');
const router = express.Router();
// api access token for auth
const token = process.env.ACCESS_TOKEN;

// create new session for api auth
router.post(`/`, function(req, res) {
  return rp({
    uri: `https://sparkapi.com/v1/`,
    method: 'POST',
    body: {},
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  }).then((response) => {
    res.send(response);
  }).catch(err => res.status(400).send(err))
});

// GET request for featured listings from Sharon & Caron - Active status only
router.get('/search', function(req, res){
  rp({
    uri: `https://sparkapi.com/v1/my/listings`,
    qs: {
      _filter: 'StandardStatus Eq \'Active\'',
      _expand: 'PrimaryPhoto'
    },
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  }).then((response) => {
      res.send(response)
  }).catch(err => console.log(err));
});


module.exports = router;