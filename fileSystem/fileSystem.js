const fs = require("fs");
/// write in file
// sync  "Always expect call back function"
// fs.writeFileSync("./test.txt","Hellow from test file Async" );

//Async  "can return result in veriable"
// fs.writeFile("./test.txt","Hellow from test file Sync" ,(error) =>{} );

//read in file

//sync
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// //Async

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error found", err);
//   } else {
//     console.log("No error found and result is : ", result);
//   }
// });


// Append  data in same file 
// fs.appendFileSync("./test.txt", "\nAppended\n");

//copy current file into new file

// fs.cpSync("./test.txt","./copied.txt");
// fs.cpSync("./test.txt","./copied2.txt");

// delete or unlink current file

// fs.unlinkSync("./copied2.txt");

// statistic of file
// const stst = fs.statSync("./test.txt");
// console.log(stst);