
// async function returns promise
async function sayHello(){
    // creating a new promise because we need mimic long funning 'fetch'
    // operation whihc returns promise
    const mypromise =  new Promise((resolve, reject) =>{        
        // wait for 3 secs to return/resolve the promise
        setTimeout(() => {
            // reslve the promise and return hello
            resolve("Hello There !!!!");
        }, 3000);        
    })
    // await is only used inside async function. wait for promise to be resolved/rejected.
    let ret =  await mypromise;
    //return the return value from fullfilled promise
    return ret;
}

// call async function and wait for it to be fullfilled using .then()
sayHello().
then(res => console.log(res));



async function getUsers(){    
    let ret =  await fetch("https://jsonplaceholder.typicode.com/users/11");

    if(ret.ok){
        let users = await ret.json();
        // normal return is treated as promise resolved with api results
        return users;
    }
    else{
        // return explicit promise.reject object to reject the promise
        await Promise.reject(new Error("Error in API !!")); 
    }
}

getUsers()
.then(data => console.log(data))
.catch(err => console.log(err));