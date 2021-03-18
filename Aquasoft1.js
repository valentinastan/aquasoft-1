//1. metode de ES6 -  sa stiti care sunt si ce presupune fiecare 
//Arrow functions
[1, 15, 30].map((item, index) => console.log(item * 2))
//Clase, import/export, promises

//2. Var/let/const
//var = scop global si functional
//let si const = scop per bloc
//const = constant, nemodificabil

//3.exemplu spread operator
var numbers = [2,3,4,5,6,7]
var copyOfNumbers = [...numbers] // spread operator
numbers.push(8)
console.log(copyOfNumbers)
var newArr = [...numbers, ...copyOfNumbers]
console.log(newArr)

//4.1.deep copy
let myObj = {
  first: {
    newKey: 1
  },
  second: 2
}

let copy = Object.assign({}, myObj) //shallow copy
let copy2 = {...myObj} //shallow copy 
let copy3 = JSON.parse(JSON.stringify(myObj)); //deep copy

myObj.first.newKey = "Hello"
// console.log("Shallow copy:", copy, copy2)
// console.log("Deep copy: ", copy3)

//4.2.Iterare obiect
for(let number of numbers) {
  console.log("Current number is = ", number)
}
for(let key in myObj) {
  console.log("The key: ", key, " : ", myObj[key])
}

//5. arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc)
let message = ["You", "have", 3, "unread", "messages."]
console.log(message.join(' '))
console.log("No of messages: ", ...message.slice(2,3))

//accesor
var person = {
  firstName: "Gigi",
  lastName : "Popescu",
  language : "ro",
  get lang() {
    return this.language;
  },
  set lang(language) {
    return this.language = language
  }
};

//iteration
message.forEach(el => console.log("- ", el))
let infos = message.map(el => el.toString().toUpperCase())
console.log(infos)

//6. promise, callback 
const promise = new Promise(function(resolve, reject) {
  console.log("Promise callback");
  resolve()
}).then(function(result) {
  console.log("Promise callback (.then)")
})

//7. async, await 
async function myFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1500)
  })

  let result = await promise
  console.log(result)
}
myFunction();

//8. closures
function outer() {
  var b = 10;
  function inner() {
    var a = 20; 
    console.log(a+b);
   }
  return inner;
}

let x = outer()
console.log(x)
x()