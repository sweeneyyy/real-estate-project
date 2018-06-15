const express = require('express');
const rp = require('request-promise');
const router = express.Router();
// api access token for auth
const token = process.env.ACCESS_TOKEN;

// Create new session for api auth
router.post(`/`, (req, res) => {
  return rp({
    uri: `https://sparkapi.com/v1/`,
    method: 'POST',
    body: {},
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  })
  .then((response) => res.send(response))
  .catch(err => res.status(400).send(err))
});

// Featured listings from Agent - Active status
router.get('/search', (req, res) => {
  return rp({
    uri: `https://sparkapi.com/v1/my/listings`,
    qs: {
      _filter: 'StandardStatus Eq \'Active\'',
      _orderby: '-CurrentPrice',
      _expand: 'PrimaryPhoto'
    },
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  })
  .then((response) => res.send(response)) 
  .catch(err => res.status(400).send(`ERROR: ${err}`));
});

// Featured listings from Agent - Pending status
router.get('/search/pending', (req, res) => {
  return rp({
    uri: `https://sparkapi.com/v1/my/listings`,
    qs: {
      _filter: 'StandardStatus Eq \'Pending\'',
      _orderby: '-CurrentPrice',
      _expand: 'PrimaryPhoto'
    },
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  })
  .then((response) => res.send(response)) 
  .catch(err => res.status(400).send(`ERROR: ${err}`));
});

// Featured listings from Agent - Sold status
router.get('/search/sold', (req, res) => {
  return rp({
    uri: `https://sparkapi.com/v1/my/listings`,
    qs: {
      _filter: 'StandardStatus Eq \'Closed\' And PropertyClass Eq \'Residential\' And CloseDate Ge years(-2)',
      _orderby: '-CurrentPrice',
      _expand: 'PrimaryPhoto'
    },
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  })
  .then((response) => res.send(response)) 
  .catch(err => res.status(400).send(`ERROR: ${err}`));
});

// Highland Beach Oceanfront condos only
router.get('/neighborhoods', (req, res) => {
  return rp({
    uri: `https://sparkapi.com/v1/listings`,
    qs: {
      _filter: 'StandardStatus Eq \'Active\' And City Eq \'Highland Beach\' And PropertySubType Eq \'Condo/Coop\'',
      _pagination: 1
    },
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-SparkApi-User-Agent': 'sharon_caron'
    },
    json: true
  })
  .then((response) => res.send(response))
  .catch(err => res.status(400).send(`ERROR: ${err}`));
});


module.exports = router;