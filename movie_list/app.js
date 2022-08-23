// variables
const localstorageListKey = 'movieList';
let storedList =  []

// base constructor for movies objects
function Movies(name,director,year,rating){
    this.name = name;
    this.director = director;
    this.year = year;
    this.rating = rating;
}

// constructor for UI operaitons
function UI(){}

// addition of movie functionality on UI consturctor
UI.prototype.addNewMovie =  function(movie){
    const list =  document.getElementById("movie-list");
    
    // create a movie list item to be added in table row format
    const newMovieElement = document.createElement("tr");
    newMovieElement.innerHTML = `<td> ${movie.name} </td>
                                <td> ${movie.director} </td>
                                <td> ${movie.year} </td>
                                <td> ${movie.rating} </td>`

    // append newly created element in list on page
    list.appendChild(newMovieElement);
}

UI.prototype.clearForm = function(){
    document.getElementById('title').value = '';
    document.getElementById('releasedate').value = '';
    document.getElementById('director').value = '';
    document.getElementById('rating').value = ' ';
}

UI.prototype.showAlert = function(message,type){
    // create new element div to show message
    const messagePop = document.createElement('div');
    // add alert and error/success class to message. CSS contain the class
    // details for display
    messagePop.className = `alert ${type}`;
    // add text to message div
    messagePop.appendChild(document.createTextNode(message));
    // get parent container to insert
    const container = document.querySelector('.container');
    // get form element so that alert can be show on top of it
    const movieForm = document.getElementById('movie-form');
    // insert message pop on top of form
    container.insertBefore(messagePop,movieForm);
    
    // create timeout to remove display of pop message after 4 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
   },4000)
}

// submit action handler on form for addition of new movie
document.getElementById("movie-form").addEventListener("submit",
    (e) => {
        // get values from respective input fields
        const name =  document.getElementById('title').value,
              releaseDate =  document.getElementById('releasedate').value,
              director =  document.getElementById('director').value,
              rating =  document.getElementById('rating').value;

        // create a movie object using value provided in UI
        const newmovie = new Movies(name,releaseDate,director,rating);

        const ui = new UI();

        if(name === '' || releaseDate === '' || director === ''
            || rating === ''){
                ui.showAlert('Please provide value for all fields','error');            
        }else{
        // add new movie to list
            ui.addNewMovie(newmovie);
            Store.insertMovieStorage(newmovie);
            ui.clearForm();
            ui.showAlert('Bookd added successfully','success');
        }
        // preveting default behaviour of redirecting to index on submit action from library
        e.preventDefault();
    }
);

// all the methods here were just lying around in open as seperate normal
// functions so lets create a seperate EC5 class/constructor for them to group
// them together and mark them as static methods so that we can access them 
// directly without instanciating class object
function Store(){}

//this is how static method is added in ES5. Static methods are not added to
// prototype and directly added to class/function.
Store.getStoredMovies = function(key){
        let list = localStorage.getItem(key);
        if(list === null){
            return [];        
        }
        return JSON.parse(list);
    
    }

// display movie list from local storage     
Store.displayMovieList = function(list){
        const ui = new UI();
        list.forEach(element => {
            console.log(element);
            ui.addNewMovie(element);
        });
    }
    
// display movie list from local storage     
Store.insertMovieStorage = function(movie){    
        storedList.push(movie);
        localStorage.setItem(localstorageListKey,JSON.stringify(storedList));
    }


/// ******** Initial call to get storage list and display on page load/refesh    
storedList = Store.getStoredMovies(localstorageListKey);
Store.displayMovieList(storedList);