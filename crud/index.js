const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/crudwithnode',(req,res)=>{
    connection.query('SELECT * FROM students',(err,rows)=>{
        if(err){
            console.log('Error in the finding table.',err);
        }else{
            res.send('Here is the result \n',rows);
        }
    })
})



app.listen(3000, ()=> console.log("App is running on port : 3000"))




