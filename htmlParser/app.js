var express = require('express');
var path = require('path');
 
var consolidate = require("consolidate");

var app=express();
const port='3000';
var bodyParser = require("body-parser");
app.set('view engine', 'html')
.engine('html', consolidate.hogan);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function(req,res){
 res.render('index',{title:"Html demo"});

});
app.listen(port,function(){
  console.log(`we ready at port`);
});
