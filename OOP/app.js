// 1 -- Constructors and this keyword
// function Person(name,age){
//     this.name = name;
//     this.age = age;

// }

// let ted = new Person('Ted', 28);
// console.log(ted);

// 2 -- Build in constructors

//The following is a string
//const name1 = 'Ted';
//The following is an object
// const name2 = new String('Ted');

// console.log(name2);
// console.log(typeof name2);
//The same happens with numbers, boolean, functions, objects, arrays, regex

// 3 -- Prototypes
// function Person(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     // this.fullName = function(){
//     //     return this.firstName + ' ' + this.lastName;
//     // }
//}

// //We can move common code for instances in a Prototype
// Person.prototype.fullName = function(){
//     return this.firstName + ' ' + this.lastName;
// }

// let per = new Person('Ted','Kos',28);
// console.log(per);
// //We can use Object Prototypes too 
// console.log(per.hasOwnProperty('firstName'));