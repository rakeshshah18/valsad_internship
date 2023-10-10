async function showData(){
    let data = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Showing Data")
        },5000);
    })

    let data2 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Showing Data 2")
        },3000);
    })

    let x = await data;
    let y2 = await data2

    console.warn(x,y2);


}
showData();

/**
 * Core node modules (Refer Node.js official docs)
 * JWT - JSON Web token Authorization 
 * SQL - CRUD app Node.js with MySQL (Use JWT token to authorize all APIs) # Task
 *    
 */
