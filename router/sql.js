const mssql = require('mssql');

var mssqldb = {};
const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'sjj',
};


mssqldb.sql = function(sql, callBack) {
    var connection = new mssql.ConnectionPool(config, function (err) {
        if (err) {
            console.log(err)
            return
        }
        var ps = new mssql.PreparedStatement(connection)
        ps.prepare(sql, function (err) {
            if (err) {
                console.log(err)
                return
            }
            ps.execute('', function (err, result) {
                if (err) {
                    console.log(err)
                    return
                }

                ps.unprepare(function (err) {
                    if (err) {
                        console.log(err)
                        callback(err, null)
                        return
                    }
                    callBack(err, result)
                })
            })
        })
    })
}

module.exports=mssqldb;






