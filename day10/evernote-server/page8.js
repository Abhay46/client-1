var Person = /** @class */ (function () {
    // constructor
    function Person(name, age, address) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        if (address === void 0) { address = ''; }
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // getter 
    Person.prototype.getName = function () { return this.name; };
    Person.prototype.getAddress = function () { return this.address; };
    Person.prototype.getAge = function () { return this.age; };
    // setter
    Person.prototype.setName = function (name) { this.name = name; };
    Person.prototype.setAddress = function (address) { this.address = address; };
    Person.prototype.setAge = function (age) {
        if ((age > 0) && (age < 100)) {
            this.age = age;
        }
    };
    // facilitator
    Person.prototype.printInfo = function () {
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("address: " + this.address);
    };
    return Person;
}());
var p1 = new Person('person1', 30, 'pune');
p1.printInfo();
p1.setName('name changed');
p1.setAddress('another planet');
p1.setAge(-100);
// p1.name = 'name changed'
// p1.age = -100
// p1.address = 'another planet'
// p1.printInfo()
console.log("name: " + p1.getName());
console.log("address: " + p1.getAddress());
console.log("age: " + p1.getAge());
