// variable
const age = 40

// function
function canVote() {  
}

// class
// - template to create an object
// - collection of properties and methods

class Person {
  // property
  // explicit declaration
  name: string
  age: number
  address: string

  // methods
  canVote() {  
    if (this.age >= 18) {
      console.log(`${this.name} is eligible`)
    } else {
      console.log(`${this.name} is NOT eligible`)
    }
  }

  printInfo() {
    console.log(`name : ${this.name}`)
    console.log(`age : ${this.age}`)
    console.log(`address : ${this.address}`)
  }
}

// creating an object of class Person
const p1 = new Person()

// setting the properties
p1.name = 'person1'
p1.address = 'pune'
p1.age = 30

// calling mtehods
p1.printInfo()
p1.canVote()