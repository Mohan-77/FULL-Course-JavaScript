// This Keyword

// Implicit Binding

const student = {
    name: "Cade",
    age: 24,
    sayHello: function() {
        return `hi my name is ${this.name}`
    }
}

// console.log(student.sayHello())

// New Binding
function Person(greeting, name) {
    this.name = name;
    this.greeting = greeting;
    this.speak = function() {  // Method
        return`${this.greeting}, my name is ${this.name}`
    }
}

// const mohamed = new Person('Hello', 'Mohamed')
// console.log(mohamed.speak())


// -------------------------------- Prototype -------------------------

// Prototype amd Constructor Function
// This is old method, nobody uses prototype anymore


function Animal(name, ability) {
    this.name = name;
    this.ability = ability;
    // this.speak = function() {  // Method
    //     return`${this.name}, can ${this.ability}`
    // }

    Animal.prototype.speak = function() {  // Method
            return`${this.name}, can ${this.ability}`
        }
}
 const lion = new Animal("lion", 'Run')
 console.log(lion.speak())

 