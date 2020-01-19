//ES6 Maps

const map1 = new Map();

const key1 = 'some string';
const key2 = {};

map1.set(key1,'Value of key1');
map1.set(key2,'Value of key2');

//console.log(map1.get(key1));

// Loop using for...of to get keys and values 
// for(let [key,value] of map1){
//     console.log(`${key} = ${value}`);
// }

//Convert to Array
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

//ES6 Sets -Store unique values of any type
const set1 = new Set();

set1.add(100);
set1.add('A string'); 
set1.add({name : 'John'});

// console.log(set1);

// set1.delete(100);
// console.log(set1);

// //Iteration
// for (let value of set1){
//     console.log(value);
// }

//Convert to Array
const setArray = Array.from(set1);
console.log(setArray);