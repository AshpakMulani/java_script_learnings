// *************EVENT BUBBLING*********************

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// ******************EVENT DELGATION******************

// instead of adding eveent hadler on all child elements we can add event handler on body
// and check of child element name is there to understand if it was generated from child element

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
// add check to find details on target and check if is has details like perticular class 
// of a child element we want and perform respective operation
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}