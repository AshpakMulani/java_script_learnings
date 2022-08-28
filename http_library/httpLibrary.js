// This is going to be function prototype based lirary

function httpLibrary(){
    this.http = new XMLHttpRequest();
}

// Get method
httpLibrary.prototype.get = function(url, cbfunction){
    
    this.http.open('GET', url, true);  
    
    // storing the contect of current function in seperate variable so that it can be referred 
    // in child function there contect will be different
    let self = this;
    this.http.onload = function(){    
        
        // using 'self' stored variable in parent to check status because inside new function
        // new context is there and using on 'this.status' is not going to refer to 'this' object
        // from parent function.        
        if(self.http.status === 200) {
            
            console.log(self.http.responseText);
            // triggering a callback function on data load with first param as 
            // error and second param as returned data 
            cbfunction(null, self.http.responseText);
        }else{
            
            cbfunction('Error : ' + self.status);
        }
    }
    
    this.http.send();
}



// POST method
httpLibrary.prototype.post = function(url, data, cbfunction) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    
    // store current contect in variable so that it can be used in 
    // child function
    let self = this;
   
    // function to run after post operation complete
    this.http.onload = function() {
        cbfunction(null, self.http.responseText);
    }
  
    // while sending data to server convert to json string 
    this.http.send(JSON.stringify(data));
  }
  



// Make an HTTP PUT Request
httpLibrary.prototype.put = function(url, data, cbfunction) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
  
    let self = this;
    this.http.onload = function() {
        cbfunction(null, self.http.responseText);
    }
  
    this.http.send(JSON.stringify(data));
  }
  
  // Make an HTTP DELETE Request
httpLibrary.prototype.delete = function(url, cbfunction) {
    this.http.open('DELETE', url, true);
  
    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200) {
        cbfunction(null, 'Post Deleted');
      } else {
        cbfunction('Error: ' + self.http.status);
      }
    }
  
    this.http.send();
  }