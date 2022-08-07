const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.getElementById('task');

console.log(heading);

// mouse click event on button
//************ clearBtn.addEventListener('click', handleEvent);
// mouse double click event on button
//************ clearBtn.addEventListener('dblclick', handleEvent);
// Mousedown event
//************ clearBtn.addEventListener('mousedown', handleEvent);
//  event
//************ clearBtn.addEventListener('mouseup', handleEvent);
// Mouseenter inside the card
//************ card.addEventListener('mouseenter', handleEvent);
// Mouseleave the card
//************ card.addEventListener('mouseleave', handleEvent);
// Mouseover trigger when mouse is over card, when mouse goes over clild element inside the
// card the mouse out event is trggered, which means mouse is no more over the card.
//************ card.addEventListener('mouseover', handleEvent);
// Mouseout
//************ card.addEventListener('mouseout', handleEvent);
// Mousemove
//************ card.addEventListener('mousemove', handleEvent);

// Event Handler
function handleEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.value= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

}