var express = require('express');
var multer = require('multer');
var upload = multer({ dest: '../media/' });
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/**
 * Upload File POST END POINT
 */
router.post('/', upload.single('avatar'), function(req, res, next) {

});

module.exports = router;