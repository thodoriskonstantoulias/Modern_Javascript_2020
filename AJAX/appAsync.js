//1st example of async/await
// async function Hello(){
//     //return 'Hello';

//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Hello')
//         }, 1000);
//     });

//     const res = await promise;
//     return res;
// }

// Hello().then(res => console.log(res));

//2nd example of async/await

async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
}

getUsers().then(users => console.log(users));