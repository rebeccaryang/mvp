var router = require('express').Router();

router.post('/tests', function(req,res){
	console.log('post request ON /tests')
});

module.exports = router;