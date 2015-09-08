/**
 * Created by youngkim on 2015. 9. 7..
 */

'use strict';

exports.viewMainPage = function (req, res) {
    res.render('main');
};

exports.stashRequest = function (req, res) {
    var userInfo = req.body.userInfo,
        userCampus = req.body.userCampus,
        userType = req.body.userType;
};