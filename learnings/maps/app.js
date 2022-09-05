
// map can store key-value pair of any type of data

//create new map instance
const myMap= new Map();

//initial keys by storing different type of data in them
const key1 = "string key 1",
    key2 = {},
    key3 = function() {console.log("this is my function");}

// set key-value in map. we are storing different types of objects
// in value against each key
myMap.set(key1, ()=> console.log("function sored in key1"));
myMap.set(key2, { subkey1 : "val1", subkey2 : "val2"});
myMap.set(key3, "string value stored in key2");

myMap.get(key1)();
// above thing will return lambda function stored in key1 in map and since we are 
// executing it using (); it will log 'function sored in key1'

//if we loop through map using for..of lool then we can access values
// from individual keys and theu map values.
for(let [key, value] of myMap){
    console.log(`key : ${key}`)
    console.log(`value : ${value}`)
}
 // -->>
// key : string key 1
// value : ()=> console.log("function sored in key1")
// key : [object Object]
// value : [object Object]
// key : function() {console.log("this is my function");}
// value : string value stored in key2