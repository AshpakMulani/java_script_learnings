///============= destructuring =============

let a, b, rest;

[a,b] = [1,2];

console.log(`value of a = ${a}`); //-> 1
console.log(`value of b = ${b}`); //-> 2

/// rest spreading
[a,b, ...rest] = [1,2,3,4,5,6,7]

console.log(`value of a ${typeof(a)}= ${a}`); //-> 1
console.log(`value of b ${typeof(b)}= ${b}`); //-> 2
console.log(`value of rest ${typeof(rest)}= ${rest}`); //-> [3,4,5,6,7]


/// rest spreading on objects

({a,b} = {a:1, b:2, c:3, d:4, e:5, f:6});

console.log(a); //-> 1
console.log(b); //-> 2

({a,b, ...rest} = {a:1, b:2, c:3, d:4, e:5, f:6});

console.log(rest); //-> {c: 3, d: 4, e: 5, f: 6} 



///  object destructuring : directly accessing required keys fron object using destructuring

const employee = {
    name : 'Ashpak',
    age: 36,
    city : 'Pune',
    id : 1212
}


let {name, age} = employee;

console.log(name, age);  //->  Ashpak 36
