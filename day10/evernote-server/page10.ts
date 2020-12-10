// association
// - Company has-a Employee

class Employee {
    // properties
    private _name: string
    private _id: number
    private _email: string
  
    // constructor
    public constructor(id: number, name: string, email: string) {
      this._id = id
      this._name = name
      this._email = email
    }
  
    // setter
    public set name(name: string) { this._name = name }
    public set email(email: string) { this._email = email }
    public set id(id: number) { this._id = id }
  
    // getter
    public get name(): string { return this._name }
    public get id(): number { return this._id }
    public get email(): string { return this._email }
  
    // facilitator
    public printInfo() {
      console.log(`id: ${this._id}`)
      console.log(`name: ${this._name}`)
      console.log(`email: ${this._email}`)
      console.log('------------------------------------')
    }
  }
  
  class Company {
    // properties
    private _employees: Employee[]
    private _name: string
    private _address: string
  
    // constructor
    public constructor(name: string, address: string) {
      this._employees = []
      this._name = name
      this._address = address
    }
  
    // facilitators
    public addEmployee(id: number, name: string, email: string) {
      const empployee = new Employee(id, name, email)
      this._employees.push(empployee)
    }
  
    public printEmployees() {
      for (const employee of this._employees) {
        employee.printInfo()
      }
    }
  
    public printInfo() {
      console.log(`name: ${this._name}`)
      console.log(`address: ${this._address}`)
    }
  }
  
  
  const c1 = new Company('company1', 'karad')
  
  c1.addEmployee(1, 'emp1', 'emp1@test.com')
  c1.addEmployee(2, 'emp2', 'emp2@test.com')
  c1.addEmployee(3, 'emp3', 'emp3@test.com')
  c1.addEmployee(4, 'emp4', 'emp4@test.com')
  
  c1.printInfo()
  c1.printEmployees()
  
