var express = require('express');
var app=express();


var rules = require('./routes/rules.js');

app.get('/', function(req, res){
  	res.send('hello world');
});

app.use('/v5',rules)


app.listen('8880',function(){
	console.log('app running at http://loaclhost:8880')
});