let express = require("express");
let mysql=require('mysql');
const {clearCookie} = require("express/lib/response");
const { futimesSync } = require("fs");

var connection = mysql.createConnection({
    host    :'localhost',
    user    :'dong',
    password :'dong',
    database :'scott'
});

var app = express();
connection.connect(function(err){
    if(!err) {
        console.log("서버가 DB와 잘 연동되었습니다. \n\n");

    }
    else{
        console.log("서버 DB 연동 오류! \n\n");
    }
});

let data = []

connection.query(sql,data, (err,row,fields) => {
    if(err){
        return console.error(err.message);
    }
    console.log("데이터"+rows.affectedRows+"이 잘 삽입되었습니다")
});

connection.end();

// describe member;
