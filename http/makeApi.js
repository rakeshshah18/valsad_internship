var http = require('http');
// var data = {name:"Rakesh",age:20,address:"Surat"}

// Array of data
var data = 
[
    {name:"Rakesh",age:20,address:"Surat"},
    {name:"Saurabh",age:22,address:"Vapi"},
    {name:"Pradip",age:21,address:"Kawas"}
]
http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'application/json'})
    res.write(JSON.stringify(data));
    res.end();

}).listen(3900);