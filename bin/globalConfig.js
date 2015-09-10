/**
 * Created by youngKim on 2015. 9. 7..
 */
var path = require('path'),
    debug = require('debug');

//if (process.env.SERVER_SETTING === 'undefined' || process.env.SERVER_SETTING === undefined) {
//    throw new Error('export SERVER_SETTING (local or production) required.');
//}

SETTING = {};

PROJECT_ROOT = path.dirname(__dirname);
SOURCE_ROOT = path.join(PROJECT_ROOT, 'src');
TEST_ROOT = path.join(PROJECT_ROOT, 'test');

info = debug('info:');
info.log = console.log.bind(console);
error = debug('error:');
error.log = console.error.bind(console);

SETTING = {
    flag: 'production',
    mysqlConfig: {
        host: 'www.shadal.kr',
        port: 3306,
        user: 'shadal',
        password: 'shadal',
        database: 'shadal'
    }
};

//(function () {
//    var env = process.env.SERVER_SETTING;
//
//    var local = {
//        flag: 'local',
//        mysqlConfig: {
//            host: 'localhost',
//            port: 3306,
//            user: 'root',
//            password: 'kim312555',
//            database: 'shadal'
//        },
//        url : 'localhost:3000'
//    };
//
//    var production = {
//        flag: 'production',
//        mysqlConfig: {
//            host: 'www.shadal.kr',
//            port: 3306,
//            user: 'shadal',
//            password: 'shadal',
//            database: 'shadal'
//        },
//        url : '52.68.248.249'
//    };
//
//    switch (env) {
//        case 'local' :
//            SETTING = local;
//            break;
//        case 'production' :
//            SETTING = production;
//            break;
//        default :
//            throw new Error('export SERVER_SETTING (local or production) required.');
//    }
//})();

module.exports = SETTING;