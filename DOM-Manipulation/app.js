// 1-- Document Object examination
// let val; 
// val = document.forms;
// val = document.links;
// val = document.scripts;

// console.log(val);

// 2 -- DOM selectors for single elements
// console.log(document.getElementById('task-title').id);
// const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = 'red';
// taskTitle.innerText = 'My tasks';

// document.querySelector('li').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'red';

// 3 -- DOM selectors for multiple elements
// const items = document.getElementsByClassName('collection-item');
// items[0].style.color = 'red';

// const items = document.querySelectorAll('li');
// items.forEach(function(item){
//     item.style.color = 'red'
// });
// console.log(items);

// 4 -- Traversing the DOM
// let val; 
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');

//val = listItem;
//Get child nodes
// val = list.childNodes;
// val = list.children;
// val = list.firstElementChild;

//Get parent nodes
//val = listItem.parentNode;

//Get siblings 
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// console.log(val);

// 5 -- Creating elements
// const li = document.createElement('li');
// li.className = 'collection-item';
// li.setAttribute('title','new title');
// li.appendChild(document.createTextNode('Hello'));

// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// 6a -- Replacing elements
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');
// cardAction.replaceChild(newHeading,oldHeading);

// 6b -- Remove elements
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();
// list.removeChild(lis[3]);

// 7 -- Event listeners
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Button pressed');
//     console.log(e.type);
//Prevent default behavior of a link that redirects to page
//     e.preventDefault();
// });

// 8 -- Mouse events 
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('mousedown', runEvent);
//clearBtn.addEventListener('mouseenter', runEvent);
// card.addEventListener('mousemove', runEvent);

// function runEvent(e){
//     console.log(`Event type : ${e.type}`)

//     heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
// }

// 9 -- Keyboard events
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');

//form.addEventListener('submit',runEvent);
//taskInput.addEventListener('keydown',runEvent);
//taskInput.addEventListener('focus',runEvent);
//taskInput.addEventListener('input',runEvent);

// function runEvent(e){
//     console.log(`Event type : ${e.type}`);
//     console.log(taskInput.value);
//     e.preventDefault();
// }

// 10a -- Event bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content');
// });

// 10b -- Event delegation
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){   
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     } 
// }

// 11 -- Local session storage
// localStorage.setItem('name','ted'); // Stays even borwser closes
// sessionStorage.setItem('name','kostas'); // Clears after session ends

// const name = localStorage.getItem('name');

// console.log(name);

document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value;
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    e.preventDefault();
});
