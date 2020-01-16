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