let person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding']
  };

  console.log(person.name);         
  console.log(person['age']);      
  
  let person1 = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log('Hello, ' + this.name);
    }
  };
  person1.sayHello();    
  

// Object Prototypes

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
  };
  
  // Creating objects using the constructor function
  let person12 = new Person('John', 30);
  let person21 = new Person('Jane', 25);
  
  // Accessing properties and invoking methods
  console.log(person12.name);         
  console.log(person21.age);           
  
  person12.sayHello();                 
  person21.sayHello();                 
  

// OOPS 

// Define a class using ES6 class syntax
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // Instance method
    getColor() {
      return this.color;
    }
  
    // Static method
    static info() {
      console.log('This is a shape class.');
    }
  }
  
  // Create instances of the Shape class
  let shape1 = new Shape('red');
  let shape2 = new Shape('blue');
  
  // Access instance methods and properties
  console.log(shape1.getColor());      
  console.log(shape2.getColor());      
  
  // Access static method
  Shape.info();                      
  

// Iterate over object

const p = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let key in p) {
    console.log(key + ': ' + p[key]);
  }
  

  const p1 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const keys = Object.keys(p1);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key + ': ' + p1[key]);
}
  

const p2 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const values = Object.values(p2);
  for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
  }
  

  const p3 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const entries = Object.entries(p3);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    console.log(key + ': ' + value);
  }
  
// Classes
  class Person100 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const john = new Person100('John', 30);
  john.greet(); 

  // Inheritance
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const animal = new Animal('Animal');
  const dog = new Dog('Dog');
  
  animal.speak(); 
  dog.speak();


  
// Destructuring


const person23 = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructuring assignment
const { name, age, city } = person23;

console.log(name); 
console.log(age);
console.log(city);  


  
  