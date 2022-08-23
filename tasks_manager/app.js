// create element  variabels 
const btnAddTask = document.getElementById('add');
const txtNewTask =  document.getElementById('task');
const colTasks = document.querySelector(".collection");
const btnClearTask = document.querySelector(".clear-tasks");
const txtFilter = document.getElementById('filter');
const taskListStorageKey = 'TaskList';

initiateEventHandlers();

//first time data load on page refresh
fnRefreshData(true);

// register click event listners
function initiateEventHandlers(){
    btnAddTask.addEventListener("click", fnAddNewTask);
    colTasks.addEventListener("click", fnTaskDeligateEvent);
    btnClearTask.addEventListener("click", fnClearTasks)
    txtFilter.addEventListener("keyup", fnFilterTask);
}

// delegate event function on task list parent 
function fnTaskDeligateEvent(e){
    // check if event target's parent is 'a' tag hosting delete button
    // and call the delete task function 
    if(e.target.parentElement.classList.contains('delete-item')){
        fnDeleteTask(e);
    }
}


// function toadd new Task item
function fnAddNewTask(e){
    // avoiding redirection to index file on form submit as default behaviour.
    e.preventDefault();
    
   let taskText = txtNewTask.value;
   // make sure input value in task details is not blank
   if (taskText.length > 0){
    //add task item to list display 
    fnAddTaskItem(taskText);
    // update item in local storage
    fnRefreshData(false,taskText);    
   }
   else{
    alert("Please add task details !!");
   }
   
   txtNewTask.value = '';   
}

// function to add element just to task list display on page. Created this seperate function
// because it comes handly in multiple places like loading initial data, adding single item etc...
function fnAddTaskItem(taskDetails){
    /* We need to create a new element like below and add to colTasks as child
        Ref : https://materializecss.com/collections.html

        <li class="collection-item">
        <div>
            Alvin
            <a href="#!" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
            </a>
        </div>
        </li>
    */

    //create new element li and add class name as suggested in above reference sample
    let newTaskItem =  document.createElement('li');
    newTaskItem.className = "collection-item";

    // create div element as suggested in sample and add its text value to text set in
    // Task input text box
    let div = document.createElement('div');
    div.innerText = taskDetails;

    //create new link tag and add details including inner html
    let anc = document.createElement('a');
    anc.className = "delete-item secondary-content";
    anc.innerHTML = '<i class="fa fa-remove"></i>';

    // go on adding newly created child elements till task collection UL element
    div.appendChild(anc);
    newTaskItem.appendChild(div);
    colTasks.appendChild(newTaskItem);    

    return true;
}

// function to delete individual tasks
function fnDeleteTask(e){
    console.log(`Event Passed in fnDeleteTask : ${e}`)
    // move upto parent until we reach li tag
    let listElement = e.target.parentElement.parentElement.parentElement;
    
    if(listElement.classList.contains("collection-item")){
        // remove from display DOM
        listElement.remove();
    }   
    // update data in locat storage by removing it from array
    fnRefreshData(false, listElement.innerText ,'remove')
}


// function to clear all tasks
function fnClearTasks(e){
    console.log(`Event Passed in fnClearTasks : ${e}`)
    // this is the easiest way to clear the list but not the fastest
    //*********colTasks.innerHTML = '';

    // faster way to clear the list is loop through tasks collection
    // and delete individual tasks from collection
    while(colTasks.firstElementChild){
        colTasks.removeChild(colTasks.firstElementChild);
    }

    // removing add items frmo task array and updating local storage as empty
    storageTaskList.splice(0, storageTaskList.length)
    localStorage.setItem(taskListStorageKey,JSON.stringify(storageTaskList));

    alert("all tasks cleared!!")
}


// function to apply filter
function fnFilterTask(e){

    // using .children method to avoid getting #text, #comments elements in return
    // we just needs real child task elements. .childNodes returns other elements as well.
    // .children method returns HTMLcollection which cant be looped using forEach
    // so we need to cnvert to array using Array.from() method to make it ready for looping
    let arrChildTasks = Array.from(colTasks.children);
    //read filter value and covert to lower case for comparision
    let filterVal = txtFilter.value.toLowerCase();

    //loop through each child element
    arrChildTasks.forEach(function(taskElement){   
        //check each child element has substring as entered filter value
        // if nto available then set display to none for hiding it.
        if(taskElement.textContent.toLowerCase().includes(filterVal)){
                taskElement.style.display = 'block';
        }
        else{
            taskElement.style.display = 'none';
        }        
    });
}

// read task list from storage and return task list as array
function gettaskListfromStorage(key){
    let arrExistingTasks = [];
    
    if(localStorage.getItem(key)){
        // convert data got from local storage (string) to array using JSON.parse
        arrExistingTasks = JSON.parse(localStorage.getItem(key));
    }    
    return arrExistingTasks;
}

//function load task frmo storage, add task to storage, remove task from array and update storage
// depending on input parameters 
function fnRefreshData(flgPageRefresh, taskDetails ='' , operation='add')
{
    
    if(flgPageRefresh){
        // for page regresh just read existing data from local storage and load it
        // we cna also use addEventListener('DOMContentLoaded', fn) to call this function
        // for loading data after all elements on webpage are loaded
        storageTaskList = gettaskListfromStorage(taskListStorageKey);
        //load each element in display after reading from local storage
        storageTaskList.forEach(function(task){
            fnAddTaskItem(task);
        });
    }
    else  // for instaces other than page load or refresh 
    {
        // for addition of new element add element to array and store updated array in LS
       if (taskDetails.length > 0 && operation==='add'){
            storageTaskList.push(taskDetails);
            localStorage.setItem(taskListStorageKey,JSON.stringify(storageTaskList));
        }
        // for deletion of element remove that element fmro array using its value 
        // and store updated array in LS
        else if (operation === 'remove'){
            var index = storageTaskList.indexOf(taskDetails);
                if (index !== -1) {
                    storageTaskList.splice(index, 1);
                }
            localStorage.setItem(taskListStorageKey,JSON.stringify(storageTaskList));
            } 
    }
    return true;    
}