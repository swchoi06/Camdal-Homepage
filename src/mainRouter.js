/**
 * Created by youngkim on 2015. 9. 7..
 */

'use strict';

//route start from '/'

var express = require('express'),
    router = express.Router();

var mainHandler = require(SOURCE_ROOT + '/mainHandler');

router.use(function (req, res, next) {
    next();
});

router.get('/', mainHandler.viewMainPage);

module.exports = router;