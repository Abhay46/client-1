class Person {
    // properties
    private name: string
    private age: number
    private address: string
  
    // constructor
    public constructor(name: string = '', age: number = 0, address: string = '') {
      this.name = name
      this.age = age 
      this.address = address
    }
  
    // getter 
    public getName() { return this.name } 
    public getAddress() { return this.address } 
    public getAge() { return this.age } 
  
    // setter
    public setName(name: string) { this.name = name }
    public setAddress(address: string) { this.address = address }
    public setAge(age: number) {
      if ((age > 0) && (age < 100)) {
        this.age = age
      }
    }
  
    // facilitator
    public printInfo() {
      console.log(`name: ${this.name}`)
      console.log(`age: ${this.age}`)
      console.log(`address: ${this.address}`)
    }
  }
  
  const p1 = new Person('person1', 30, 'pune')
  p1.printInfo()
  
  p1.setName('name changed')
  p1.setAddress('another planet')
  p1.setAge(-100)
  
  // p1.name = 'name changed'
  // p1.age = -100
  // p1.address = 'another planet'
  
  // p1.printInfo()
  console.log(`name: ${p1.getName()}`)
  console.log(`address: ${p1.getAddress()}`)
  console.log(`age: ${p1.getAge()}`)