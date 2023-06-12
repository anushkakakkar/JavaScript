// callback

function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Calling the greet function and passing the sayGoodbye function as a callback
  greet('John', sayGoodbye);


//Promise

const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve('Data retrieved successfully');
    }, 2000);
  });
  
  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
// Async/Await

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function greet1() {
    await delay(2000);
    console.log('Hello, world!');
  }
  
  greet1();
  
  
// Event loop

console.log('Start');

setTimeout(() => {
  console.log('Timer 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');
