// document object is used to process DOM 

let val ;
// selects whole document object
val= document;
//selects individual head tag in DOM
val = document.head;
// selects body tag in DOM
val = document.body;
// returns URL from browser
val= document.URL;
// returns domain or website
val = document.domain;

// access list of all images from DOM
val=document.images; // returns all image obhects in a list
// get list of all the scripts in <script> tag
scripts = document.scripts; 
// we can access individual item and its property frmo returned object 
//*************console.log(scripts[0].src)

// document.scripts returns HTMLCollection whihc cant be looped using foreach
// for looping converting colection to array
let scriptArr= Array.from(scripts);

// looping through individual items and accessing its attributes
scriptArr.forEach(function(script) {
  //*************console.log(script.getAttribute('src'));
});


//console.log(scripts);