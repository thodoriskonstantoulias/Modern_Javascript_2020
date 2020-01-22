// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

//Test the module 

//CommonJS Module Syntax
// const person = require('./mymodule'); 

//ES2015 Module
import {person} from './mymodule2';

console.log(person.name);