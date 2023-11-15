const express = require('express');
const app     = express();
const port    = process.env.port || 3000;

app.get('/', function(req, rest){
  rest.send('hello world!');
});

app.listen(port, err => {
    if(err) throw err;
    console.log(`Running on port ${port}`);
});