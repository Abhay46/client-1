class Person {
    name: string
    age: number
    address: string
  
    // constructor
    constructor() {
      console.log('inside constructor')
      this.name = ''
      this.age = 0
      this.address = ''
    }
  
    printInfo() {
      console.log(`name: ${this.name}`)
      console.log(`age: ${this.age}`)
      console.log(`address: ${this.address}`)
    }
  }
  
  const p1 = new Person()
  p1.printInfo()
  console.log(p1)