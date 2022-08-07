let test = document.querySelector(".hide")
//console.log(test);

let testAll = document.querySelectorAll(".hide")

//console.log(testAll);

// return is nodelist from queryselectorAll so we can loop directly
// without converting to array and add attribute selection to find what we need.
// Ex. in below code we are finding image src URL's for all returned items
testAll.forEach(function(item){
    // we can now process individual item having class as .hide.
    // get list of child elements of item having class as .hide
//*************console.log(item.childNodes);
    // in child elements item at position 3 is <p> so we can access it
    // and change its attributes of colour to anything
//*************console.log(item.childNodes[3].style.color= 'red');
    // we can also read value of any attribute from items
//*************console.log(item.childNodes[1].getAttribute("src"));    
})



//instead of updating item style as mentioned in above code by hardcoding item position
//we can directly get all the required <p> tags and update the style without hardcoding it
// below selector is getting <p> tags fron parents with class name *_container
let elements = document.querySelectorAll('div[class*="_container"] p');

elements.forEach(function(item){
    item.style.color= 'blue';
})


// There are different ways as well we can select DOM using name, Id etc.
// and perform different operations
let newval = document.getElementsByName("second_container_name")
//newval[0].innerHTML = "<h1> Changed Text </h1>";


// instead of childNodes we can use children method as well to get
// child elements
let elementAll = document.querySelectorAll(".hide")

elementAll.forEach(function(element){
    let val = element.children;
    // this returns HTMLCollection and notNodeList like childNodes function   
    //console.log(val[1].innerHTML);  
    // item at position 1 is <p> so we have changed its internal text to 'ipdated text'
    val[1].innerHTML = "<h2> updated text </h2>";

    // get next element in DOM. 
//*************console.log(`Next Sibling: ${element.nextSibling.innerHTML}`); // returns text 
//*************console.log(`Next Element Sibling: ${element.nextElementSibling.innerHTML}`); // return actual element 

    //  get previous element in DOM. 
//*************console.log(`Previous Sibling: ${element.previousSibling.innerHTML}`); // returns text 
//*************console.log(`Previous Element Element: ${element.previousElementSibling.innerHTML}`); // return actual element 



    // like child we can also get parent element details using ParentNode or ParentElement 
//*************console.log(`Parent Element: ${element.parentNode.firstElementChild.innerHTML}`);
//*************console.log(`Parent Element: ${element.parentElement.innerHTML}`);
})

