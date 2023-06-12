// If statement
let x = 10;

if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}


// Switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is a different day");
}


// Nested if statements
let temperature = 30;
let weather = "sunny";

if (temperature > 25) {
  if (weather === "sunny") {
    console.log("It's hot and sunny");
  } else if (weather === "cloudy") {
    console.log("It's hot but cloudy");
  } else {
    console.log("It's hot");
  }
} else if (temperature <= 25) {
  console.log("It's not very hot");
}

// Check if a no is negative,positive and zero

let num = 5;

if (num>0) {
    console.log("positive");
} else if(num<0){
    console.log("negative");
} else {
    console.log("zero");
}


let marks = 0.8;

let student_score=0.6;

if (marks<student_score){
    console.log("Qualified");
} else {
    console.log("Not qualified");
}

//Check if a person is eligible to vote based on age

let age = 17; 

if (age>=18){
    console.log("eligible");
} else {
    console.log("Not eligible")
}

// Check if a no is even or odd

let num1 = 2;

if (num1%2==0){
    console.log("even");
}else {
    console.log("odd");
}

// Max of two No.

let a = 12;
let b = 5;

if (a>b){
    console.log("a is max");
}else {
    console.log("b is max");
}