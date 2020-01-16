// 1 -- XHR

// readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

// document.getElementById('button').addEventListener('click', loadData);

// function loadData(){

//     //Create an XHR object
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','data.txt',true);

//     xhr.onload = function(){
//         if (this.status === 200){
//             //console.log(this.responseText);
//             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     xhr.onerror = function(){
//         console.log('Request error');
//     }

//     xhr.send();
// }

// 2 -- JSON 
// document.getElementById('button1').addEventListener('click', loadCustomer);
// document.getElementById('button2').addEventListener('click', loadCustomers);

// // JSON with one object
// function loadCustomer(e){
//      //Create an XHR object
//      const xhr = new XMLHttpRequest();
//      xhr.open('GET','customer.json',true);

//         xhr.onload = function(){
//         if (this.status === 200){
//             //console.log(this.responseText);
//             const customer = JSON.parse(this.responseText);

//             const output = `
//                 <ul>
//                     <li>ID : ${customer.id}</li>
//                     <li>NAME : ${customer.name}</li>
//                     <li>COMPANY : ${customer.company}</li>
//                     <li>PHONE : ${customer.phone}</li>
//                 </ul>
//             `;

//             document.getElementById('customer').innerHTML = output;
//          }
//         }

//      xhr.send();
// }
// //JSON with array of objects
// function loadCustomers(e){
//     //Create an XHR object
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','customers.json',true);

//        xhr.onload = function(){
//        if (this.status === 200){
//            //console.log(this.responseText);
//            const customers = JSON.parse(this.responseText);

//            let output = '';
//             customers.forEach(function(customer){
//                 output += `
//                 <ul>
//                     <li>ID : ${customer.id}</li>
//                     <li>NAME : ${customer.name}</li>
//                     <li>COMPANY : ${customer.company}</li>
//                     <li>PHONE : ${customer.phone}</li>
//                 </ul>
//             `;
//             });

//            document.getElementById('customers').innerHTML = output;
//          }
//        }

//     xhr.send();
// }