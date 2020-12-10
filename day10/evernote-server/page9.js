var Person = /** @class */ (function () {
    // constructor
    function Person(name, age, address) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        if (address === void 0) { address = ''; }
        this._name = name;
        this._age = age;
        this._address = address;
    }
    Object.defineProperty(Person.prototype, "name", {
        // getter
        get: function () { return this._name; },
        // setter
        set: function (name) {
            console.log('inside name property');
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () { return this._address; },
        set: function (address) {
            console.log('inside address property');
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) {
            console.log('inside age property');
            if ((age > 0) && (age < 100)) {
                this._age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    // facilitator
    Person.prototype.printInfo = function () {
        console.log("name: " + this._name);
        console.log("age: " + this._age);
        console.log("address: " + this._address);
    };
    return Person;
}());
var p1 = new Person('person1', 30, 'pune');
p1.name = 'person2';
p1.age = -100;
// p1.setName('person2')
console.log("name : " + p1.name);
console.log("address : " + p1.address);
console.log("age : " + p1.age);
