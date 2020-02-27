var express = require('express');
var router = express.Router();

// GET Request
router.get('/', function(req, res, next) {
    res.render('cool1', {title: 'Cool Guy Club'})
});

// POST Request
router.post('/', function (req, res, next) {

    const str = req.query.title;
    const len = str.length;

    res.render('cool2', {title: str, len: len});

});

module.exports = router;
