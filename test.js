// What is the result of the following JavaScript code?

let message = 'Hello!'; 
setTimeout(() => {
 message = 'Goodbye!'; 
}, 0); 
console.log(message);


// What is the output of the following JavaScript code using async/await?

async function myFunction() {
 return "Hello";
}
myFunction().then(console.log);


let x = 1;
let intervalId = setInterval(() => {
 console.log(x++);
 if (x > 3) clearInterval(intervalId);
}, 1000);




// What will the following code output with respect to the JavaScript event loop?



console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");



// What is the output of the following JavaScript code using try, catch, and finally?

try {
 console.log("Start");
 throw new Error("Error occurred");
} catch (err) {
 console.log(err.message);
} finally {
 console.log("End");
}