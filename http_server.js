const express = require('express');
const app     = express();
const port    = process.env.PORT || 5000;

app.get('/', function(req, rest){
  rest.send('hello world!');
});

app.listen(port, err => {
    if(err) throw err;
    console.log(`Running on port ${port}`);
});