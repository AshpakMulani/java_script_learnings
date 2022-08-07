// Adding event handler to button  <a class="clear-tasks btn black" href="#">Clear Tasks</a>

// select the button element and store in variable
let btnClearTasks = document.querySelector(".clear-tasks");
btnClearTasks.addEventListener("click", fnClearTasks);


// function to handle click on Clear Tasks button. this gets 'event'
// as default paramater
function fnClearTasks(clickEvent){
    let val;
    // get the target of the click event whihc is button
    val = clickEvent.target;
    //get list of class attached to target button
    val = clickEvent.target.classList;
    // update button text
    //clickEvent.target.innerText = "new button text";
    
    // type of event click, mouseover etc/
    val = clickEvent.type;

    //co-ordinates relative to window
    val = `X : ${clickEvent.clientX}, Y : ${clickEvent.clientY}`;

    //co-ordinates relative to target
    val = `X : ${clickEvent.offsetX}, Y : ${clickEvent.offsetY}`;

    
    
    console.log(val);
}

