//Function without Parameters:

function sayHello() {
    console.log("Hello!");
  }
  
  sayHello();  // Calling the function

  
//Function with Parameters:

function greet(name) {
    console.log("Hello, " + name );
  }
  
  greet("John");  // Calling the function with an argument
  
  // Function with Return Value:

  function addnumber(a,b){
    return a+b;
  }

  let result = addnumber(5,2);
  console.log(result);

function multiply(a,b){
    return a*b ;
}
let res = multiply(5,4);
console.log(res);

// Function Expression:

let multiplyno = function(a,b){
    return a*b;
}
let ret = multiply(7,4);
console.log(ret);

// Arrow Notation 

let subtract = (a,b) => a-b;
let resu = subtract(10,5);
console.log(resu);

let mul = (a,b) => a*b;
let restu = multiply(10,5);
console.log(restu);


// Arrays 

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);  
console.log(fruits[1]);  
console.log(fruits[2]);  

fruits[1] = "grape";
console.log(fruits);  

console.log(fruits.length);

fruits.push("kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Kiwi",'Apple');
console.log(fruits);

let citrus = fruits.slice(1,3)
console.log(citrus);


// Sum of two no 

const num1 = 20 
const num2 = 30 

const sum = num1 + num2 
console.log(sum);

// store input numbers
const nu = parseInt(prompt('Enter the first number '));
const nus = parseInt(prompt('Enter the second number '));

//add two numbers
const sums = nu + nus;

// display the sum
console.log(sums);

// Square root of no 

const a = prompt('Enter no');
const results = Math.sqrt(a);
console.log(results);


// Swap two no 

let a1 = 25
let b1 = 26 

a1=a1+b1;
b1=a1-b1;
a1=a1-b1;
console.log(a1);
console.log(b1);

// Factorial 

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);

// For loop
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);