// superclass
class Person {
    // properties
    protected name: string
    protected address: string
    protected age: number
  
    // constructor
    public constructor(name: string = '', address: string = '', age: number = 0) {
      console.log('inside Person class constructor')
      this.name = name
      this.address = address
      this.age = age
    }
  
    // facilitator
    public printInfo() {
      console.log('called from Person class')
      console.log(`name: ${this.name}`)
      console.log(`address: ${this.address}`)
      console.log(`age: ${this.age}`)
      console.log('``````-------```````')
    }
  }
  
  class Player extends Person {
    
  }
  
  // subclass
  class Employee extends Person {
    // property
    protected id: number
    protected company: string
  
    // constructor
    public constructor(id: number, company: string, name: string, address: string, age: number) {
      super(name, address, age)
      this.id = id
      this.company = company
    }
  
    // Employee is overriding printInfo()
    public printInfo() {
      console.log('called from Employee class')
      console.log(`id: ${this.id}`)
      console.log(`company: ${this.company}`)
      // console.log(`name: ${this.name}`)
      // console.log(`address: ${this.address}`)
      // console.log(`age: ${this.age}`)
  
      // call the Person's printInfo() to get the values of name, address and age
      super.printInfo()
      console.log('``````-------```````')
    }
  }
  
  const p1 = new Person('person1', 'pune', 20)
  p1.printInfo()
  // console.log(p1)
  
  console.log('------------')
  
  const e1 = new Employee(1, 'comapny1', 'employee1', 'mumbai', 30)
  e1.printInfo()
  // console.log(e1)