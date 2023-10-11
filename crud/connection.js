const mysql = require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'3333',
    database:'crudwithnode'
}) 

mysqlConnection.connect((err)=>{
    if (err){
        console.log('Error while connection : '+JSON.stringify(err,undefined,2));
    }else{
        console.log('Connected successfully');
    }
})

module.exports=mysqlConnection