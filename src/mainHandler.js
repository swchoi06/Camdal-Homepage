/**
 * Created by youngkim on 2015. 9. 7..
 */

'use strict';

var mysqlConn = require(SOURCE_ROOT + '/module/mysql').getConnection();

exports.viewMainPage = function (req, res) {
    res.render('main');
};

exports.stashRequest = function (req, res) {
    var userCampus = req.body.userCampus,
        userContact = req.body.userContact,
        userInvoice = req.body.userInvoice,
        userType = req.body.userType;

    var data = {
        user_campus: userCampus,
        user_contact: userContact,
        user_invoice: userInvoice,
        user_type: userType
    };

    mysqlConn.query('INSERT INTO open_request SET ?', data, function (err, result) {
        if (err) {
            error(err);
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    });
};