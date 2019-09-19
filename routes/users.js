var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
	if(req.body['account'] == "admin" && req.body['password'] == "admin"){
		res.send("success")
	}else{
		res.send("failed")
	}
});
router.get('/test', function (req, res, next) {
	res.send("hi")
});

module.exports = router;
