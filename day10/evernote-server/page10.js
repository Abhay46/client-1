// association
// - Company has-a Employee
var Employee = /** @class */ (function () {
    // constructor
    function Employee(id, name, email) {
        this._id = id;
        this._name = name;
        this._email = email;
    }
    Object.defineProperty(Employee.prototype, "name", {
        // getter
        get: function () { return this._name; },
        // setter
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "email", {
        get: function () { return this._email; },
        set: function (email) { this._email = email; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "id", {
        get: function () { return this._id; },
        set: function (id) { this._id = id; },
        enumerable: false,
        configurable: true
    });
    // facilitator
    Employee.prototype.printInfo = function () {
        console.log("id: " + this._id);
        console.log("name: " + this._name);
        console.log("email: " + this._email);
        console.log('------------------------------------');
    };
    return Employee;
}());
var Company = /** @class */ (function () {
    // constructor
    function Company(name, address) {
        this._employees = [];
        this._name = name;
        this._address = address;
    }
    // facilitators
    Company.prototype.addEmployee = function (id, name, email) {
        var empployee = new Employee(id, name, email);
        this._employees.push(empployee);
    };
    Company.prototype.printEmployees = function () {
        for (var _i = 0, _a = this._employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            employee.printInfo();
        }
    };
    Company.prototype.printInfo = function () {
        console.log("name: " + this._name);
        console.log("address: " + this._address);
    };
    return Company;
}());
var c1 = new Company('company1', 'pune');
c1.addEmployee(1, 'emp1', 'emp1@test.com');
c1.addEmployee(2, 'emp2', 'emp2@test.com');
c1.addEmployee(3, 'emp3', 'emp3@test.com');
c1.addEmployee(4, 'emp4', 'emp4@test.com');
c1.printInfo();
c1.printEmployees();
