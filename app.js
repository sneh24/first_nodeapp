var express=require('express');//express is a framework
var bp=require('body-parser');//for parsing the sbmitted form in JSON format

var urlencodedparser=bp.urlencoded({extended:false});//memorise it. Makes a middleware function
var app=express();//initializing express
//routes-for making urls or end points
app.get('/', function(aaya,gaya){//aaya- request from client side, gaya- response from server side
    console.log(aaya);//server side print in terminal
    gaya.send('hi client');//sending response to the client in browser
})

app.get('/user', function(req,res){//accessible on localhost:3000/user
    res.end('Welcome User');//sending response to the client in browser
})

app.get('/profile/:userid', function(req,res){//here userid is parameter(params)(always declared after :)
    res.end('Welcome '+req.params.userid);//localhost:3000/profile/snehil
})

app.post('/data',urlencodedparser, function(req,res){//implementing middleware
    console.log(req.body);//filters the requests
})

// app.get('/data', function(req,res){
//     console.log(req.body);
// })

app.get('/home',function(req,res){//accessible on localhost:3000/home
    console.log(__dirname);//returns location of this directory
    res.sendFile(__dirname+'/index.html');//sends the form created in index.html
})

app.get('/contact', function(req,res){//accessible on localhost:3000/contact
    console.log(req.query);//it generates a query after contact. eg-> localhost:3000/contact?name=snehil&phone=kerer
    res.end('we will contact you soon '+ req.query.name);//returns the name(snehil in our example)
})

app.listen(3000,function(){//listening on port 3000 or starting http server on localhost:3000
    console.log('hello');
});
 

// JSON Format
// {
//     "key": "value",
//     "key2": {
            // "key21": "value21"
//     }
// }