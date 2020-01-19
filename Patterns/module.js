//Basic structure
//Module pattern
// (function(){
//     //Declare private vars and functions

//     return {
//         //Declare public vars and functions
//     }
// })();

// const UICtrl = (function(){
//     let text = 'Hello World';

//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText : function(){
//             changeText();
//         }
//     }
// })();

//UICtrl.callChangeText();

//Revealing module pattern
const ItemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
    }
    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add : add,
        get : get
    }
})();

ItemCtrl.add({id : 1, name : 'John'});
console.log(ItemCtrl.get(1));