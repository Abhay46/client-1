class Person {
    // properties
    private _name: string
    private _age: number
    private _address: string
  
    // constructor
    public constructor(name: string = '', age: number = 0, address: string = '') {
      this._name = name
      this._age = age 
      this._address = address
    }
  
    // getter
    public get name() { return this._name }
    public get address() { return this._address }
    public get age() { return this._age }
  
    // setter
    public set name(name: string) {
      console.log('inside name property')
      this._name = name 
    }
  
    public set address(address: string) {
      console.log('inside address property')
      this._address = address
    }
  
    public set age(age: number) {
      console.log('inside age property')
      if ((age > 0) && (age < 100)) {
        this._age = age
      }
    }
  
  
    // facilitator
    public printInfo() {
      console.log(`name: ${this._name}`)
      console.log(`age: ${this._age}`)
      console.log(`address: ${this._address}`)
    }
  }
  
  const p1 = new Person('person1', 30, 'pune')
  p1.name = 'person2'
  p1.age = -100
  // p1.setName('person2')
  
  console.log(`name : ${p1.name}`)
  console.log(`address : ${p1.address}`)
  console.log(`age : ${p1.age}`)
  