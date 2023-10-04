const http  = require('http');//http module
const fs = require('fs');
const path = require('path');
//creating a server 
const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server!');
    console.log(req);
    console.log(req.method);
    console.log(req.url);
    //creating responds from server when a request is made
    res.setHeader('Content-Type','text/html');
    // res.write("Hello From first server!");
    // res.write("<h1>Hello From first server!</h1>");
    // res.write("Welcome to SwapShop!");

    let path = './';

    switch(req.url){
        case '/':
            path+='/index.html'
            break;
        case '/aboutus':
            path+='/aboutus.html'
            break;
        case '/blog':
            path+='/blog.html'
            break;
        case '/cart':
            path+='/cart.html'
            break;
        case '/contact':
            path+='/contact.html'
            break;
        default:
            path+='/404.html'
            break;

    }
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            // res.write(fileData);
            res.end(fileData);
        }
    });

});

//port numnber and host
server.listen(3000,'localhost',()=>{
    console.log("server is running on port 3000");
});


