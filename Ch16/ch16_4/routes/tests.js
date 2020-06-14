var express = require('express');
var router = express.Router();

/* GET Test網頁. */
router.get('/', function(req, res) {
  res.render('test', { title: 'Test' });
});          

module.exports = router;
