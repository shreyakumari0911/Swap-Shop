const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'swapshop_login',
    user: 'root',
    password: 'root123'
});

connection.connect(function(err){
    if(err){
        console.log("Error occurred while connecting ");
    }
    else{
        console.log("Connetion created with mysql!");
    }
});

