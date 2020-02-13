const express = require('express');
const mssqldb = require('./sql');
const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'sjj',
}

var router = express.Router();

router.get('/check.html',function (req,res) {
    var id=req.query.id;

    mssqldb.sql(`select id,name from [dbo].[address] where id=${id}`,function (err,result) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(result.recordset[0]);
        res.render('check.html',{address:result.recordset[0]});
    });
});

module.exports=router;