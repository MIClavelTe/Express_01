const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send('<h1 style="font-family:Trebuchet MS,Helvetica,sans-serif;color:#a74fff;text-align:center">Hello World!<h1>');
});
app.listen(3000);