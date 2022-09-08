// in observer we basically create a list of functions when they subscribe and
// we call individual function by going through list when fire is triggered.

let eventObserver = function(){
    this.observer = [];
}

eventObserver.prototype ={
    // subscribe method just add provided call back function to list
    // so that it can be called later when requried
    subcribe : function(fn) {
        this.observer.push(fn);
        console.log(`Subscribed to : ${fn.name}`)
    },
    // unsubscribe method just remove provided call back function from list
    // so that it wont be part of calling list
    unsubscribe : function(fn) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list.
        // The filter returns a new list and reassigns the list of observers.
        this.observer = this.observer.filter(element => {           
            if(element!==fn){
                return element;
            }
        });
    },
    // fire method calls one by one functions from list
    fire : function(){
        this.observer.forEach(element => {
            element.call();                        
        });
    }
}


// create instance of customer event observer so that we can subscribe
// and unsubscribe to events
let customClickObserver = new eventObserver();

// -----------------------------------------------------------
// add event handlers on button clicks to subscribe/unsubscribe and fire events
// -----------------------------------------------------------

// subscribe to custom event when subscribe millisecnds button clicked
document.querySelector(".sub-ms").addEventListener('click', function(){
    customClickObserver.subcribe(printMiliSeconds);
});
// un-subscribe from custom event when unsubscribe millisecnds button clicked
document.querySelector(".unsub-ms").addEventListener('click', function(){
    customClickObserver.unsubscribe(printMiliSeconds);
});

// subscribe from custom event when subscribe seconds button clicked
document.querySelector(".sub-s").addEventListener("click", function(){
    customClickObserver.subcribe(printSeconds);
});
// un-subscribe from custom event when unsubscribe seconds button clicked
document.querySelector(".unsub-s").addEventListener("click", function(){
    customClickObserver.unsubscribe(printSeconds);
});

// fire or call all subscriber event from array
document.querySelector(".fire").addEventListener('click', function(){
    customClickObserver.fire();
});


// -----------------------------------------------------------
// following are functions which are subscribing to custom events
// -----------------------------------------------------------
function printMiliSeconds(){
    console.log(`current milliseconds are ${new Date().getMilliseconds()}`)
}

function printSeconds(){
    console.log(`current seconds are ${new Date().getSeconds()}`)
}