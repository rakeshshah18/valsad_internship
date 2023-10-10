// let data = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("executed nicely")
//         //object 
//        // resolve({name:"Rakesh", age : 20, address:"Surat"})

//     },7000)
// }) 
// // jab resolve hoga tab then block chalega and jab reject hoga tab catch block chalega 
// data.then((data)=>{
//     console.warn(data);
// }).catch((err)=>{
//    console.warn("Any error",err)
//})
// Finally block will always run and give outputs even if then block or catch block will not run 
//data.finally((item)=>{
//    console.warn("Finally block",item)
//})

let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
data.then((item)=>{
    return item.json()
}).then((result)=>{
    console.warn("Final result using api",result)
})