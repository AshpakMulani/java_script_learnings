const localstorageListKey = 'movieList';
let storedList =  []


class Movies{
    constructor(name,director,year,rating){
    this.name = name;
    this.director = director;
    this.year = year;
    this.rating = rating;
    }
}

class UI{
    addNewMovie(movie){
        const list =  document.getElementById("movie-list");
                
        const newMovieElement = document.createElement("tr");
        newMovieElement.innerHTML = `<td> ${movie.name} </td>
                                    <td> ${movie.director} </td>
                                    <td> ${movie.year} </td>
                                    <td> ${movie.rating} </td>`
           
        list.appendChild(newMovieElement);
    }

    clearForm(){
        document.getElementById('title').value = '';
        document.getElementById('releasedate').value = '';
        document.getElementById('director').value = '';
        document.getElementById('rating').value = ' ';
    }

    showAlert(message,type){        
        const messagePop = document.createElement('div');        
        messagePop.className = `alert ${type}`;       
        messagePop.appendChild(document.createTextNode(message));       
        const container = document.querySelector('.container');        
        const movieForm = document.getElementById('movie-form');
        container.insertBefore(messagePop,movieForm);

        setTimeout(function(){
          document.querySelector('.alert').remove();
       },4000)
    }    
}

class Store{
    static getStoredMovies = function(key){
        let list = localStorage.getItem(key);
        if(list === null){
            return [];        
        }
        return JSON.parse(list);
    }

    static displayMovieList = function(list){
            const ui = new UI();
            list.forEach(element => {
                console.log(element);
                ui.addNewMovie(element);
            });
        }
   
    static insertMovieStorage = function(movie){    
        storedList.push(movie);
        localStorage.setItem(localstorageListKey,JSON.stringify(storedList));
    }
}


document.getElementById("movie-form").addEventListener("submit",
    (e) => {
        const name =  document.getElementById('title').value,
              releaseDate =  document.getElementById('releasedate').value,
              director =  document.getElementById('director').value,
              rating =  document.getElementById('rating').value;

        const newmovie = new Movies(name,releaseDate,director,rating);

        const ui = new UI();

        if(name === '' || releaseDate === '' || director === ''
            || rating === ''){
                ui.showAlert('Please provide value for all fields','error');            
        }else{
            ui.addNewMovie(newmovie);
            Store.insertMovieStorage(newmovie);
            ui.clearForm();
            ui.showAlert('Bookd added successfully','success');
        }
        
        e.preventDefault();
    }
);


storedList = Store.getStoredMovies(localstorageListKey);
Store.displayMovieList(storedList);