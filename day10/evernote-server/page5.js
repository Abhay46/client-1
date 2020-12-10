// variable
var age = 40;
// function
function canVote() {
}
// class
// - template to create an object
// - collection of properties and methods
var Person = /** @class */ (function () {
    function Person() {
    }
    // methods
    Person.prototype.canVote = function () {
        if (this.age >= 18) {
            console.log(this.name + " is eligible");
        }
        else {
            console.log(this.name + " is NOT eligible");
        }
    };
    Person.prototype.printInfo = function () {
        console.log("name : " + this.name);
        console.log("age : " + this.age);
        console.log("address : " + this.address);
    };
    return Person;
}());
// creating an object of class Person
var p1 = new Person();
// setting the properties
p1.name = 'person1';
p1.address = 'pune';
p1.age = 30;
// calling mtehods
p1.printInfo();
p1.canVote();
