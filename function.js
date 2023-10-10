// function message() {
//     console.log("Hello World!");
    
// };
// message();

// Accessing variable outside form function.....

// let userName = 'Rakesh';
// function showMessage(){
//     let message = 'Hello, ' + userName;
//     console.log(message);
    
// };
// showMessage();

let sayHi = (firstName) => {
    firstName = "Rakesh";
    console.log(`Hello, ${firstName}, Welcome to arrow function`);
};
sayHi();