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