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

// 4 -- Prototype inheritance
// function Person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.fullName = function(){
//     return this.firstName + ' ' + this.lastName;
// }

// function Customer(firstName,lastName,phone){
//      Person.call(this,firstName,lastName);
//      this.phone = phone;
// }

// Customer.prototype = Object.create(Person.prototype);
// //Also if we want we can overwrite the inherited function by declaring it with the same name ...
// const cust = new Customer('Ted','Konst',444);
// console.log(cust.fullName());
// 5 -- Classes and Subclasses
// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     fullName(){
//         return `Hello there ${this.firstname} ${this.lastname}`;
//     }

//     static addNumbers(x,y){
//         return x + y;
//     }
// }

// class Customer extends Person{
//     constructor(firstname,lastname,phone){
//         super(firstname,lastname);
//         this.phone = phone;
//     }
// }

// const ted = new Person('Ted','Kos');
// const cust = new Customer('Kostas', 'Kos', 444);
// console.log(ted.fullName());
// console.log(Person.addNumbers(1,2));
// console.log(cust.phone);
// console.log(cust.fullName());
