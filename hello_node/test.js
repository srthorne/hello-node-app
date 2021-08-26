const express = require('express');
const { allowedNodeEnviromentFlags } = require('process');
const app = express();

app.get('/helloNode', function(req,res){
    res.send('hello node world');
});

app.get('/', 
    function(req, res)
    {
        res.sendFile('index.html', {root: __dirname});
    }   

);

app.listen(3000);

console.log('hello node');