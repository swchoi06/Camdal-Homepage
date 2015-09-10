/**
 * Created by youngkim on 2015. 9. 10..
 */

'use strict';

exports.viewMainPage = function (req, res) {
    res.render('./mobile/main');
};

exports.viewNewsPage = function (req, res) {
    res.render('./mobile/news');
};

exports.viewCampusPage = function (req, res) {
    res.render('./mobile/campus');
};

exports.viewCoopPage = function (req, res) {
    res.render('./mobile/coop');
};

