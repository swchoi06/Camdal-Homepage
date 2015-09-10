/**
 * Created by youngkim on 2015. 9. 10..
 */

'use strict';

//route start from '/mobile'

var express = require('express'),
    router = express.Router();

var mobileHandler = require(SOURCE_ROOT + '/mobileHandler');

router.use(function (req, res, next) {
    next();
});

router.get('/', mobileHandler.viewMainPage);
router.get('/news', mobileHandler.viewNewsPage);
router.get('/campus', mobileHandler.viewCampusPage);
router.get('/cooperation', mobileHandler.viewCoopPage);

module.exports = router;