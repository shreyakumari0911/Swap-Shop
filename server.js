const mysql = require('mysql');
const cors = require("cors");
const express = require("express")
const app = express();



app.use(express.json());
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'swapshop_login',
    user: 'root',
    password: 'root123'
});

app.use('/login',(req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;


    connection.query("INSERT INTO login(id,FullName,Email,Block,Room,Num) VALUES(?,?,?)",[Name,Email,Password],
        (err,result)=>{
            if(result){
                res.send(result);
            }
            else{
                res.send({message: "Enter Form Correctly"})
            }
        }
    )
})

app.use('/signup',(req,res)=>{
    const Name = req.body.Name;
    const Password = req.body.Password;


    connection.query("SELECT * FROM login WHERE Name = ? AND Password = ? ",[Name,Password],
        (err,result)=>{
            if(err){
                req.setEncoding({err: err});
            }
            else{
                if(result.length>0){
                    res.send(result);
                }
                else{
                    res.send(message, "Wrong credentials");
                }
            }
        }
    )
})
connection.connect(function(err){
    if(err){
        console.log("Error occurred while connecting ");
    }
    else{
        console.log("Connetion created with mysql!");
    }
});

