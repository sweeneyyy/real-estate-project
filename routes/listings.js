import express from 'express';

const router = express.Router();

const key = process.env.API_KEY;
const secret = process.env.API_SECRET;
const params = `?ApiKey='${key}&ApiSig=${secret}ApiKey${key}`;


router.post('/search', function(req, res, callback) {
  console.log('post route on backend')
  res.send('empty post to establish session');
});








export default router;