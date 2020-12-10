// create an object by using an Object
const car = new Object()
// properties
car.model = "i20"
car.company = "hyundai"
car.price = 7.5

// methods (property pointing to a function)
car.printInfo = function() {
  console.log(`model: ${this.model}`)
  console.log(`company: ${this.company}`)
  console.log(`price: ${this.price}`)
}

// overriding the toString function
car.toString = function() {
  return `Car [model = ${this.model}, company: ${this.company}, price: ${this.price}]`
}

console.log(`car = ${car}, type = ${typeof(car)}`)
car.printInfo()


// create an object by using JSON

const person = {
  // properties
  name: 'person1',
  age: 40,
  email: 'person1@test.com',

  // methods
  printInfo: function() {
    console.log(`name: ${this.name}`)
    console.log(`age: ${this.age}`)
    console.log(`email: ${this.email}`)
  },

  // overriding toString
  toString: function() {
    return `Person [name: ${this.name}, age: ${this.age}, email: ${this.email}]`
  }
}

console.log(`person = ${person}, type = ${typeof(person)}`)
person.printInfo()


// create an object by using constructor function

// mobile: model, price, company, methods: canAfford, printInfo

// constructor function
function Mobile(model, price, company) {
  this.model = model
  this.price = price
  this.company = company
}

Mobile.prototype.canAfford = function() {
  if (this.price < 10) {
    console.log(`${this.model} is affordable`)
  } else {
    console.log(`${this.model} is NOT affordable`)
  }
}

Mobile.prototype.printInfo = function() {
  console.log(`model = ${this.model}`)
  console.log(`company = ${this.company}`)
  console.log(`price = ${this.price}`)
}

const m1 = new Mobile('iPhone 12 Pro Max', 156000, 'Apple')
m1.canAfford()
m1.printInfo()