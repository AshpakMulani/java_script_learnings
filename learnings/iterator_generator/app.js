// ============== Iterators ======================

function citiIterator(cities){
    let index = 0;
    // creating return as object with property 'next'. This property
    // holds function whihc then returns next value from provided collection
    // and increment the counter
    let ret_val = {
        next : function(){            
                // check if we have still not reached end of collection then return 
                // next value or return done=false object
                return index < cities.length ?
                     { done : false, vaue : cities[index++]}
                     : {done : true}
                }                
            }
    return ret_val;
}

let citiList = ['Pune','Mumbai','Hyderabad','Bangalore'];

let myIterator = citiIterator(citiList);

console.log(myIterator.next());
console.log(myIterator.next());

//==> Pune,Mumbai


// ========================  Generator ========================

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
  
//   const g = gen();
  
//   console.log(g.next()); // ==> { value: 1, done: false }
//   console.log(g.next()); // ==> { value: 2, done: false }


  function* infinite() {
    let index = 0;
  
    while (true) {
      yield index++;
    }
  }
  
  const generator = infinite(); // "Generator { }"
  
  console.log(generator.next().value); // 0
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
