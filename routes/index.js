var express = require('express');
var router = express.Router();
const controllers = require('../controllers/cardInfo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/game', controllers.searchPage)

module.exports = router;
