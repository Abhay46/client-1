var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// superclass
var Person = /** @class */ (function () {
    // constructor
    function Person(name, address, age) {
        if (name === void 0) { name = ''; }
        if (address === void 0) { address = ''; }
        if (age === void 0) { age = 0; }
        console.log('inside Person class constructor');
        this.name = name;
        this.address = address;
        this.age = age;
    }
    // facilitator
    Person.prototype.printInfo = function () {
        console.log('called from Person class');
        console.log("name: " + this.name);
        console.log("address: " + this.address);
        console.log("age: " + this.age);
        console.log('``````-------```````');
    };
    return Person;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Player;
}(Person));
// subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // constructor
    function Employee(id, company, name, address, age) {
        var _this = _super.call(this, name, address, age) || this;
        _this.id = id;
        _this.company = company;
        return _this;
    }
    // Employee is overriding printInfo()
    Employee.prototype.printInfo = function () {
        console.log('called from Employee class');
        console.log("id: " + this.id);
        console.log("company: " + this.company);
        // console.log(`name: ${this.name}`)
        // console.log(`address: ${this.address}`)
        // console.log(`age: ${this.age}`)
        // call the Person's printInfo() to get the values of name, address and age
        _super.prototype.printInfo.call(this);
        console.log('``````-------```````');
    };
    return Employee;
}(Person));
var p1 = new Person('person1', 'pune', 20);
p1.printInfo();
// console.log(p1)
console.log('------------');
var e1 = new Employee(1, 'comapny1', 'employee1', 'mumbai', 30);
e1.printInfo();
// console.log(e1)
