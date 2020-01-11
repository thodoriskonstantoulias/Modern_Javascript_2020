// 1 -- If we want to log somenthing on console (for debug)
//console.log({a:1,b:2}); 

// 2 -- Declaring variables
//var, let, const
//const is a constant so we cannot reassign its value after its initialize
//var name = 'Ted Kos';
//console.log(name);

// 3 -- Data types
// Primitive types : string, number, boolean, null, undefined, symbol
const name = 'Ted';
const sym = Symbol();
console.log(typeof name);
console.log(typeof sym);
//Reference types : array, object literal, date
const array = [1,2,3];
const address = {
    city : 'Athens',
    country : 'Greece'
};
console.log(typeof array);
console.log(typeof address);
