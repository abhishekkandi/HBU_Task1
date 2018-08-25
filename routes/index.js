var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { status: 'Success' });
});

router.get('/data',function(req,res,next){
  res.render('data', { })
})

router.post('/data',function(req,res,next){
  var bodyData = req.body.name
  res.render('data', { data: bodyData })
})



module.exports = router;
