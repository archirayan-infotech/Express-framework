const hostname ="127.0.0.1";
const port ="300";
var express=require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app=express();

var todoItem =[{id:1 , desc :'foo'},{id:2 , desc:'boo'},{id:3 , desc :'doo'}];
//configure app
app.set('view engine','ejs');
app.set('views',path.join (__dirname , 'view'));

//use now
app.use(bodyParser());

app.get('/',function(req,res){
   res.render('index',{
title : 'My App',
items:todoItem});
});
app.post('/add',function(req,res){
  console.log(req.body.item)
  todoItem.push({
    id:todoItem.length+1
    ,
    desc:req.body.item
  });
  res.redirect('/');
});

app.listen(port,function(){
   console.log(`ready on port`);
});
