// things can be stored in local storage/session storage in broswer

// set local storage items. Data is stored as key value.
// below two examples create two keys and values
//************ localStorage.setItem('name', 'Ashpak');
//************ localStorage.setItem('age', '34');

// set session storage item
//************ sessionStorage.setItem('name', 'Mulani');

// remove data stored with key 'age' from storage
//************ localStorage.removeItem('age');

// read data from local storage
//************ const name = localStorage.getItem('name');

// clear local storage
//************ localStorage.clear();

// console.log(name, age);


let frmTask = document.getElementById('task-form');
frmTask.addEventListener("submit",handleSubmit);

function handleSubmit(e){

    let tasks = [];
    let taskItem = document.getElementById('task')

    if(localStorage.getItem('Tasks') === null){
        tasks.push(taskItem.value);
        // local storage stores data only in string format so we need to
        // stringify data beforeadding
        localStorage.setItem('Tasks',JSON.stringify(tasks));
    }
    else{
        // after reading string datafrmo local torage parse it to its
        // original form, in this case array
        tasks = JSON.parse(localStorage.getItem('Tasks'));

        // add new tasks item at the end of array filled with existing tasks
        // from local storage data
        tasks.push(taskItem.value);

        // add updated data to local storage 
        localStorage.setItem('Tasks',JSON.stringify(tasks));
        

    }
    
    alert("Task Updated");
    e.preventDefault();
}