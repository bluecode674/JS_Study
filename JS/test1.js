var express = require("express");
const {clearCookie} = require("express/lib/response");
const { futimesSync } = require("fs");

var mysql=require('mysql');
var connection = mysql.createConnection({
    host    :'localhost',
    user    :'hong',
    password :'hong',
    database :'scott'
});

var app = express();
connection.connect(function(err){
    if(!err) {
        console.log("서버가 DB와 잘 연동되었습니다. \n\n");

    }
    else{
        console.log("서버 DB 연동 오류! \n\n");
        console.log(err);
    }
});

app.get("/",function(request, response){
    connection.query('select hakbun, irum, dept from scott.MEMBER where sex = "남"', function(err,rows, fileds){
        connection.end();
        if(!err){
            response.send(rows);
            console.log('member table 데이터:', rows);
        }
        else
            console.log('member Table Query Error!.');
    });
});

app.listen(8000, ()=>{
    console.log("Server is running at http://127.0.0.1:8000")
});