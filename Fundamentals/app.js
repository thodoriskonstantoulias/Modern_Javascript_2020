// 1 -- If we want to log somenthing on console (for debug)
//console.log({a:1,b:2}); 

// 2 -- Declaring variables
//var, let, const
//const is a constant so we cannot reassign its value after its initialize
//var name = 'Ted Kos';
//console.log(name);

// 3 -- Data types
// Primitive types : string, number, boolean, null, undefined, symbol
// const name = 'Ted';
// const sym = Symbol();
// console.log(typeof name);
// console.log(typeof sym);
//Reference types : array, object literal, date
// const array = [1,2,3];
// const address = {
//     city : 'Athens',
//     country : 'Greece'
// };
// console.log(typeof array);
// console.log(typeof address);

// 4 -- Type conversion
// let val;
// Number to String
// val = String(5);
// val = (7).toString();

// Strings to numbers
// val = Number('6');
// val = parseInt('44');

// console.log(val);

// 5 -- Math 
// const num1 = 100;
// const num2 = 50;
// let val;

// val = Math.PI;
// val = Math.round(2.4); // --> 2
// val = Math.pow(7, 2);
// val = Math.random();

// console.log(val);

// 6 -- Template literals

// const name = 'Ted';
// const age = 28;
// const job = 'Software Engineer';
// let html;

// Without template strings (es5) 
// html = '<h4>Name : ' + name + '</h4>';

// With template strings (es6) 
// html = `
//     <h4>My name is ${name}</h4>
// `;

// document.body.innerHTML = html;

// 7 -- Object literals
// const person = {
//     firstname : 'Ted',
//     lastname : 'Kos'
// };

// console.log(person.firstname);

// 8 -- Dates
// let val; 
// const date = new Date();
// val = date.getDate();
// val = date.getDay();
// val = date.getFullYear();

// console.log(date);
// console.log(val); 

// 9 -- Functions
//Function declarations
// function greet(firstname = 'Ted'){
//     console.log('Hello ' + firstname);
// }
// greet('John');

//Function expressions
// const square = function(x){
//     console.log(x*x);
// };
// square(3);

//Imidiately invokable function expressions
// (function(){
//     console.log('IIFE running');
// })();

// 10 -- Window Object
// const input = prompt();
// alert(input);
// let val; 
// val = window.outerHeight;
// val = window.location;
// val = window.location.href = 'http://google.com';
// val = window.history.length;
// val = window.navigator;

// console.log(val);

// 11 -- Scope 
var a = 1; 
let b = 2;
const c = 3;

function test(){
    var a = 4; 
    let b = 5;
    const c = 6;
    console.log('Function score : ' + a,b,c);
}
//test();

//Block scope 
if (true){
    var a = 4; 
    let b = 5;
    const c = 6;
}

console.log('Global scope : ' + a,b,c);