/**
 * Created by recover39 on 2015. 9. 7..
 */

'use strict';

var extractConnection = (function () {
    var mysql = require('mysql');
    var conn;

    var getConnection = function () {
        conn = mysql.createConnection(SETTING.mysqlConfig);
        return conn;
    };

    return {
        getConnection: getConnection
    };
}());

module.exports = extractConnection;