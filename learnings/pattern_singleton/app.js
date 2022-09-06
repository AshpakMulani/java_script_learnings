let singletonPattern = function(){

    let getObject = function(){
        console.log("singleton method!!")
        return true;
    }

    // having provate variable in function so that it can be hold getObject instance 
    let object;

    return{
        getMyObject : function(){
            // check if object already exists. Create new object only
            // if there is no existing object.
            if (!object){
                object = getObject();
                return  object;
            }        
            return object;
       }
    }
};


let sp = new singletonPattern();

//even if we create multiple objects it will return single object
// and it will print 'singleton method' only once.
let objectA = sp.getMyObject();
let objectB = sp.getMyObject();

// this will return true as both pbjects are same 
console.log(objectA===objectB);