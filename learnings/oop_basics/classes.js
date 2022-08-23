
  /// ****************  CLASSES ***********************

  // This is just a easy to use syntactical suger on prototype based inheritance
  // what we have seen above

  class Person{
    //constructor to initialize properties
    constructor(name,age){
        this.name = name;
        this.age = age;
    }        

    //class methods which can be access by objects.
    // THESE METHODS WILL BE ADDED TO OBJECTS PROTOTYPE SAME AS PROTOTYPE
    // INHERITNACE WHICH WE HAVE SEEN ABOVE
    printIntroduction(){
        console.log(`My name is ${this.name}. I am ${this.age} years old`);
    }


    static getFullGender(gender){
        if (gender === 'm') return 'Male';
        if (gender === 'f') return 'Female';
    }

}

const newMe = new Person('Ashpak', 36);

newMe.printIntroduction();
//==> My name is Ashpak. I am 35 years old

console.log(newMe);
console.log(Person.getFullGender('m'));

// create a subclass by extending parent class
class Customer extends Person{
    constructor(name, age, phone, type){
        // need to call constructor from parent class
        super(name,age);
        // setting own class peoperties 
        this.phone = phone;
        this.type = type;
    }
    printCustomerInfo(){
        console.log(`I am ${this.name} a ${this.type} customer. My phone is ${this.phone}.`);
    }
}

const newCust = new Customer('Ashpak',37,99999999,'premium');

//call own class method
newCust.printCustomerInfo();

//call parent class method
newCust.printIntroduction();