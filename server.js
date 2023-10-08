
// Requiring in-built https for creating 
// https server 
const https = require("https"); 
  
// Express for handling GET and POST request 
const express = require("express"); 
const app = express(); 

// Requiring file system to use local files 
const fs = require("fs"); 
const path = require('path');

const port = 8000;

// Configuring express to use body-parser 
// as middle-ware 
const mime = require('mime');
// Serve static files (e.g., HTML, CSS, JavaScript) from a directory
app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res)=>{
    console.log(__dirname+"/public/index.html");
    const filePath = path.resolve(__dirname, 'index.html');
    res.sendFile(filePath);
})

app.get("/cart", (req, res)=>{
    console.log(__dirname+"/public/cart.html");
    res.sendFile(__dirname + "/public/cart.html");
})

app.get("/login", (req, res)=>{
    console.log(__dirname+"/public/login.html");
    res.sendFile(__dirname + "/public/login.html");
})

app.get("/shop", (req, res)=>{
    console.log(__dirname+"/public/shop.html");
    res.sendFile(__dirname + "/public/shop.html");
})

app.get("/contact", (req, res)=>{
    console.log(__dirname+"/public/contact.html");
    res.sendFile(__dirname + "/public/contact.html");
})

app.get("/login_google", (req, res)=>{
    console.log(__dirname+"/public/login_google.html");
    res.sendFile(__dirname + "/public/login_google.html");
})

app.get("/signup", (req, res)=>{
    console.log(__dirname+"/public/signup.html");
    res.sendFile(__dirname + "/public/signup.html");
})

app.get("/blog", (req, res)=>{
    console.log(__dirname+"/public/blog.html");
    res.sendFile(__dirname + "/public/blog.html");
})

app.get("/404", (req, res)=>{
    console.log(__dirname+"/public/404.html");
    res.sendFile(__dirname + "/public/404.html");
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});