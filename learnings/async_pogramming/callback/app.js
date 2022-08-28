//************ normal execution **************/
function greet() {
    console.log('Hello world'); 
  }
  
  // callback function
  function sayName(name) {
    console.log('Hello' + ' ' + name);
  }
  
  // calling the function after 2 seconds
  setTimeout(greet,2000);
  sayName('Ashpak');

  // output here is first 'Hello Ashpak' and then 'Hello world' because
  // execution of 'SayName' function doesnt wait for gree function to finish 
  // after two seconds




//********* Callback Function Example ***********c:

// if we want 'SayName' function to wait for greet function to finish then
// we can pass 'SayName' function as callback to greet whihc then internally
// execulte call back function
function greet(name, myFunction) {
    console.log('Hello world');
  
    // callback function
    // executed only after the greet() is executed
    myFunction(name);
  }
  
  // callback function
  function sayName(name) {
    console.log('Hello' + ' ' + name);
  }
  
  // calling the greet function after 2 seconds and 
  // passing sayName as callback function 
  setTimeout(greet, 2000, 'John', sayName);

  //-> 'Hello world' follwed by 'Hello John'