var Person = /** @class */ (function () {
    // constructor
    function Person() {
        console.log('inside constructor');
        this.name = '';
        this.age = 0;
        this.address = '';
    }
    Person.prototype.printInfo = function () {
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("address: " + this.address);
    };
    return Person;
}());
var p1 = new Person();
p1.printInfo();
console.log(p1);
