              
// explicit variable declaration [with data type]

// c code
// int num = 10;

// number
const num: number = 10
console.log(`num = ${num}, type = ${typeof(num)}`)

// string
const str: string = 'typescript'
console.log(`str = ${str}, type = ${typeof(str)}`)

// boolean 
const canVote: boolean = false
console.log(`canVote = ${canVote}, type = ${typeof(canVote)}`)

// undefined
let myVar: undefined = undefined
console.log(`myVar = ${myVar}, type = ${typeof(myVar)}`)

// object
const person1: object = {name: "person1", age: 30}
console.log(`person1 = ${person1}, type = ${typeof(person1)}`)

// object
const mobile: {model: string, price: number} = {model: 'iPhon 12 Pro Max', price: 156000}
console.log(`mobile = ${mobile}, type = ${typeof(mobile)}`)


// union of string and number
let myVar2: string|number = 'test'
myVar2 = 200
// myVar2 = true
// myVar2 = {name: 'person1'}

let myVar3: number | string | boolean | object | undefined = 100
myVar3 = 'test'
myVar3 = false
myVar3 = {name: 'person2'}
myVar3 = undefined

let myVar4: any = 100
myVar4 = 'test'
myVar4 = false
myVar4 = {name: 'person2'}
myVar4 = undefined