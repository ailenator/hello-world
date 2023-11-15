const express = require('express');
const app     = express();

app.get('/', function(req, rest){
  rest.send('hello world!');
});

app.listen(3000, function(){
  console.log('Running on port 3000');
});