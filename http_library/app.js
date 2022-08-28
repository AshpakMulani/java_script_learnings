const http = new httpLibrary;
const url = "https://jsonplaceholder.typicode.com/";

//***************** GET *********************/
// defining function on top since where we are passing these functions as callback
// then javascript should already have them defined first
function getPostscb(err, data){
    console.log("inside get")
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    
    
}
// call get from library with callback function when data is loaded
// commenting actual request for testing next functionality
//http.get(url + 'posts', getPostscb);


//******************* POST ****************/
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
  };

  /// post callback function
function createPostcb(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }    
}

// invoke post request 
// commenting actual request for testing next functionality
//http.post(url + 'posts',data,createPostcb)


//******************* PUT ****************/
const data1 = {
    title: 'Custom Post',
    body: 'This is a custom post'
  };

  /// post callback function
function createPostcb(err, data){
    if(err){
        
        console.log(err);
    }else{
        console.log(data);
    }    
}

// invoke put request for updating record at id 99
// commenting actual request for testing next functionality
//http.put(url + 'posts/1009',data1,createPostcb)

//******************* DELETE ****************/

function deletePostcb(err, data){
    if(err){        
        console.log(err);
    }else{
        console.log(data);
    }    
}

// invoke delete request 
// commenting actual request for testing next functionality

http.delete(url + 'posts/1', deletePostcb);