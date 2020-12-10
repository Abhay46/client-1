class Person {
    name: string
    age: number
    address: string
  
    // constructor
    constructor(name: string = '', age: number = 0, address: string = '') {
      this.name = name
      this.age = age 
      this.address = address
    }
  
    printInfo() {
      console.log(`name: ${this.name}`)
      console.log(`age: ${this.age}`)
      console.log(`address: ${this.address}`)
    }
  }
  
  const p1 = new Person('person1', 30, 'pune')
  p1.printInfo()
  
  const p2 = new Person()
  p2.printInfo()
  