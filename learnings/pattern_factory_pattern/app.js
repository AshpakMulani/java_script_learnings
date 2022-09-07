let subscription = function(userName, subscriptionType){

    let membership;
    
    // take help from other function/classes to create
    // reuqired object 

    
    if(subscriptionType === 'basic'){
        membership = new basicSubscription(userName);  
                    
    }else if(subscriptionType === 'regular'){
        membership = new regularSubscription(userName);   
                
    }else if(subscriptionType === 'premium'){
        membership = new premiumSubscription(userName);   
    }

    // add custom properties to final custom object being created
    membership.type = subscriptionType;

    // add common methods to final custom object being created
    membership.getDetails = function(){
        console.log(`User name is ${this.userName}. 
                    Subscription type is ${this.type}
                    with monthly cost ${this.cost}`)
    }

    // now we have constructed required final object with the help of other objects
    // and custom logic we can return it  
    return  membership
}

// following are requried functions/classes whihc have their specific functionality.
let basicSubscription = function(name){
    this.userName = name;
    this.cost = "10$";
}

let regularSubscription = function(name){
    this.userName = name;
    this.cost = "15$";
}

let premiumSubscription = function(name){
    this.userName = name;
    this.cost = "20$";
}



//now lest create objects

let userA = new subscription('Ashpak','basic');
let userB = new subscription('John','regular');
let userC = new subscription('Rohit','premium');

let users = [];

users.push(userA);
users.push(userB);
users.push(userC);

// call methods to display detail on individual object
users.forEach(user =>{
    user.getDetails();
})