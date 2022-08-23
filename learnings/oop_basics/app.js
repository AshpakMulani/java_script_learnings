
// constructor function definition 
function Employee(name, doj){

    this.name = name;
    this.doj = new Date(doj);
    this.experience = function(){
        // standrd logic to get the number of years in perticular date and now.

        //date.now returns miliseconds so we have also converted doj to milliseconds 
        // starting 1 Jan 1970
        // https://www.w3schools.com/jsref/jsref_gettime.asp
        const diff =  Date.now() - this.doj.getTime();
        // convert time different in date format
        const experience = new Date(diff);
        
        // since all calculation were done frmo 1970, we need to substract 1970
        // to get actil number of years
        return Math.abs(experience.getUTCFullYear() - 1970);
    }
    
}

// can not directley add property to constructor like below. This wont
// give error but when property is access it will have value as 'undefined'
Employee.address = 'Pune';

Employee.prototype.address = 'Mumbai'; // This works

// create new instance of constructor
const emp = new Employee('Ashpak','2018-12-18',1)
console.log(`address of emp : ${emp.address}`)
console.log(emp.experience());
console.log(emp);


/// ****************  BUILT IN CONSTRUCTORS  ***********************

// Javascript has built-in constructors like below, but it is not recommended to use
// them as they cause perfromance issues.
var a = new Object(); 

var b = new String();
var c = new String('Bob')

var d = new Number();
var e = new Number(25);

var f = new Boolean();
var g = new Boolean(true);

// it is recommended to use premitive type directely rather than using through
// built-in constructros 

var a = 'Bob';
var b = 25
var c = true;



/// ****************  PROTOTYPE  ***********************

function animal(){ 
    this.eats= function(){ return true};
};

animal.prototype.breath  = function(){return true;}

function rabbit(){
    this.jumps= function(){ return true};
};

// set rabits prototype same as animal prototype so that is any of missing
// property is referred in rabbit then it will look into its prototype which is same
// as animal prototype
rabbit.prototype = animal.prototype;

let an = new animal();
let rab = new rabbit();
  
// we can find both properties in rabbit now:
console.log(rab.jumps());
console.log(rab.breath());


/// ****************  PROTOTYPE INHERITANCE  ***********************
const person = {
    age: 20,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. I am ${this.age} years old`);
    }
  };
  
  // creating new object and inheriting all properties in prototype
  const me = Object.create(person);
  
  me.name = 'Ashpak'; // "name" is a property set on "me", but not on "person"
  me.age= 35; // inherited properties can be overwritten
  
  me.printIntroduction();
  //==> My name is Ashpak. I am 35 years old



