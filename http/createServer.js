const http = require('node:http');

http.createServer((request,response)=>{
    response.write("Hello and How are you");
    response.end();
}).listen(4500);

//    OR 
//  Function as parameter 

// function dataControl(req,res){
//     res.write("<h1>This is from Function as parameter</h2>");
//     res.end();
// }

// http.createServer(dataControl).listen(4500); 