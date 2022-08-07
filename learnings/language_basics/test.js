// Premitive types
//string
const name =  'Ashpak';

//number
const age = 34;

//boolean
const isMarried = true;

//null
const superRich = null;

//undefined. This cant be if type const.
let wealth;

//symbol
const sym = Symbol();

// REFERENCE TYPE - objects
//array
const skills = ['python','terraform','javascript','aws']

//object
const address = {house : 'M23', city: 'pune'}

//date
const today = new Date()

function sayhello(){
    return 'Hello Everyone!!'
}

let myname ='ashpak';
let myage = 36;
let html = `<div>
                <h1> ${myname} </h1>
                <p> ${sayhello()}</p>
                <p> ${age>30 ? 'over 30' : 'below 30'} </p>
            </div>`


const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);

const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

const num = [43,56,33,23,44,36,5];
// Get array length -> returns 7 total number of items
val = num.length;
// Check if num is array
val = Array.isArray(num);
// Get single value using index
val = numb[3]; //--> return 23
val = numb[0]; // -> return 43
// Insert into array
numbers[2] = 100;
// Find index of perticular value 
val = numbers.indexOf(36); // -> returns 5

const num = [43,56,33,23,44,36,5];
//Add item on to end of array
num.push(250); //--> makes array [43,56,33,23,44,36,5,250]
//Add on to front if array
num.unshift(120); //--> makes array [120,43,56,33,23,44,36,5,250]
// Remove item from end of the array. Opposit to push.
num.pop();  //--> makes array [120,43,56,33,23,44,36,5]
// Remove item from front of array
num.shift();  //--> makes array [43,56,33,23,44,36,5]
// Splice/remove values mentioned in range (start index, number of items)
num.splice(1,3); //--> makes array [43,44,36,5] by removing 3 items starting index 1
//Reverse items in array. Last item will be first and first will be last
 num.reverse(); //--> makes array [5,36,44,43]
// sort the array. If it is strings then orted alphabetically
num.sort();
// if array is number then sort work differetnly 
let newarr = [100,55,44,43,36,23,5]
newarr.sort()  //-> returns [100,23,36,43,44,5,55] which is not correct
// for nuymber array return we need to give direction of sort using 
// 'compare function
// returns --> [5,23,36,43,44,55,100]
val = numbers.sort(function(x, y){
   return x - y;
});

// Reverse sort returns --> [100,55,44,43,36,23,5]
val = numbers.sort(function(x, y){
   return y - x;
});




const person = {
    firstName: 'Ashpak',
    lastName: 'Mulani',
    age: 34,
    email: 'ashpaklmulani@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'Pune',
      state: 'MH'
    },
    getBirthYear: function(){
      return 2022 - this.age;
    }
  }

// Get specific value
val = person.firstName;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


const todey = new Date();
let birthday = new Date('9-10-1981 11:25:00');
// there can be multiple ways initial value ford ate object can be passed

val = todey.getMonth(); 
val = todey.getDate();
val = todey.getDay();
val = todey.getFullYear();
val = todey.getHours(); // same for mimuts, secs, miliseconds


val = today.getTime(); // return time part of date

birthday.setMonth(2); // same for date, year, hours, minuts etc...


if(true){
    do something
}
else{
    do something else
}

// condition chek
if(a==b) 
// checks if a and b are equal, it doesnt check type though. if a=5 and b='5' we will still get true
if(a===b)
//checks if value of a is equal to b and it will also check if type are equal. if one is string 
// another is integer then it will return false
if(a!=b)
// checks not equality in value but not type. !== checks value as well as type.
// we cna also check >, < greater thans or less than values 


if(name==='abc' && age < 10){
    console.log("abc is a kid")
}else if(name='abc' && age<20)
{
    console.log("abc is teenager")
}else{
    console.log("abc is adult")
}

// OR operator is used as ||  (two lines)

let val =5;

val==5 ? 'if executed' : 'else executed'


let color = 'red';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is default');
        break;
}


// Function declaration 

// default value can be mentioned in function declaration.
function fullname(firstName='abc', lastName='xyz'){
    return `${firstName} ${lastName}`;
}

console.log(fullname('ashpak','mulani'))
//-> outputs 'ashpak mulani'
console.log(fullname('ashpak'))
//-> outputs 'ashpak xyz'


const square = function(x){
    return x*x;
}

square(5);

// Immidiately invokable function expression - IIFEs
// This pattern helps invoking function directley where we define it.
//check ('ashpak') at the end whihc is involing the fumction by providing params 

(function hello(name){
    console.log(`Hello ${name} !!!`)
})('ashpak');
// result 'Hello ashpak'



// PROPERTY METHOD

const todo = {
    add : function(){
        console.log('inside add function')
    },
    edit : function(id){
        console.log(`inside edit function ${id}`)
    }
}

todo.delete = function(){
    console.log('inside delete')
}

todo.add();
todo.edit(10);
todo.delete();


/// Loops

//for

for(let i=0; i<10; i++){
    console.log(`current value is ${i}`)
    continue;
}

//while

let i=0;
 do{
    console.log(`current value ${i}`);
    i++;
 }
 while(i<10);


 let cars= ['Jaguar', 'Farrari', 'Totota', 'Suzuki']

 cars.forEach(function(car){
    console.log(car);
 })




let cars = {car1 : "suzuki", car2 : "honda"}

for(car in cars){    
    console.log(car) //-> outputs car1, car2
    console.log(cars[car]) //-> outputs suzuki, honda
}

// notice use of cars[car] and we have not used cars.car to access items in
// cars object because it will fail if we do so, since JS will try to access
// .car key from cars object whihc doesnt exists. We want to access key fmor cars object
// with value insude car variable so we have used cars[car]