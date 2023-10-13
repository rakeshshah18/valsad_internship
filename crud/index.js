const connection = require('./connection');
// const mysqlConnection=require('mysqlConnection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())
// if you need to access specific user, just hit id number at last of the url
app.get('/crudsql', (req, res) => {
    // app.get('/crudsql/:id',(req,res)=>{
    //     connection.query('SELECT * FROM students WHERE id=?',[req.params.id],(err,rows)=>{
    connection.query('SELECT * FROM students', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
            // console.log(rows);
        }
    })
})

// DELETE record from database 
//just change the method 'DELETE' 

app.delete('/crudsql/:id', (req, res) => {
    connection.query('DELETE FROM students WHERE id=?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
            // console.log(rows);
        }
    })
})

// INSERTING VALUES INTO DATABSE

app.post('/crudsql', (req, res) => {
    var std = req.body
    var stdData = [std.name, std.salary]
    connection.query('INSERT INTO students(name,salary) values(?)', [stdData], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
            // console.log(rows);
        }
    })
})

// update 
app.patch('/crudsql', (req, res) => {
    var std = req.body
    connection.query('UPDATE students SET ? WHERE id=' + std.id, [std], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
            // console.log(rows);
        }
    })
})

// PUT method (it is more power ful than patch method)

app.put('/crudsql', (req, res) => {
    var std = req.body
    connection.query('UPDATE students SET ? WHERE id=' + std.id, [std], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            if (rows.affectedRows == 0) {
                var stdData = [std.name, std.salary]
                connection.query('INSERT INTO students(name,salary) values(?)', [stdData], (err, rows) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(rows);
                        // console.log(rows);
                    }
                })
            } else {
                res.send(rows);
            }
            // console.log(rows);
        }
    })
})


app.listen(3000, () => console.log("App is running on port : 3000"));




