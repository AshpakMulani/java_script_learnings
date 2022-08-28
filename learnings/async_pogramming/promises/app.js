
function getData(flag){
    // return a new promise object 
    return new Promise(
        // promise takes input as function and provides default two function references
        // resolve and reject
        function(resolve, reject){
            // setting 5 seconds delays in calling the function
            setTimeout(function(){
                // do some remote fetch or other time takign ops...
                
                // flag is just used to control if promise should be resolved or rejected
                if(flag){
                    // when resolve is called it sets promise in fullfilled state
                    resolve('new updated value');
                }
                else{
                    // when reject is called it sets promise in rejected state
                    reject('error in updating value');
                }                
            }, 5000);
        }
    )  
}

// here value of param 'val' is automatically set to return value from 'resolve'
function setData(val){        
    let header = document.querySelector(".container h1");
    header.textContent = val; 
}


// call long running function
getData(0)
// .then method is triggered when promise is in resolved/fullfilled state
.then(setData)
//.catch method is triggered when promise is in rejected state. We can also put function
// definition inside it rather thn providing reference as we did in .then
.catch(function(err){
    let header = document.querySelector(".container h1");
    header.textContent = err; 
})

// dont make this mistake of using setData() with round brackets inside 'then'
// else javascript will just call setData function immidiately as soon as that line is reached
// without waiting for promise to be full filled

/// xxxxx wrong ->  getData(1).then(setData());

// passing only function name as reference is correct way of calling function in .then