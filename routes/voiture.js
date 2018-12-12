
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Voiture/index', {title: 'Voitures'});
});
/* GET car listing. */
router.get('1/view', function(req, res, next) {
	res.render('cars/view', {

	});
});
module.exports = router;
