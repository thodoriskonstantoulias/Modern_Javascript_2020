//Project implemented with Module Pattern -- so what we return will be public -- all others will be private

//Item Controller
const ItemCtrl = (function(){
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this.calories = calories; 
    }

    const data = {
        items : [],
        currentItem : null,
        totalCalories : 0
    }

    return {
        getItems : function(){
            return data.items;
        },
        addItem : function(name,calories){
            let ID;
            //Create ID
            if (data.items.length > 0){
                ID = data.items[data.items.length -1].id + 1; 
            } else {
                ID = 0;
            }

            //Calories to number
            calories = parseInt(calories);

            //Create new Item
            newItem = new Item(ID,name,calories);
            data.items.push(newItem);

            return newItem;
        },
        getItemById : function(id){
            let found = null;
            data.items.forEach(function(item){
                if (item.id === id){
                    found = item;
                }
            });
            return found;
        },
        updateItem : function(name,calories){
            calories = parseInt(calories);
            let found = null;
            data.items.forEach(function(item){
                if (item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem : function(id){
            //Get ids
            const ids = data.items.map(function(item){
                return item.id;
            });
            //Get index
            const index = ids.indexOf(id);

            //Remove item
            data.items.splice(index,1);
        },
        clearAllItems : function(){
            data.items = [];
        },
        setCurrentItem : function(item){
            data.currentItem = item;
        },
        getCurrentItem : function(){
            return data.currentItem;
        },
        getTotalCalories : function(){
            let total = 0;
            data.items.forEach(function(item){
                total += item.calories;
            });
            data.totalCalories = total;
            return data.totalCalories;
        },
        logData : function(){
            return data;
        }
    }
})();

//UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList : '#item-list',
        listItems : '#item-list li',
        addBtn : '.add-btn',
        updateBtn : '.update-btn',
        deleteBtn : '.delete-btn',
        backBtn : '.back-btn',
        clearBtn : '.clear-btn',
        itemNameInput : '#item-name',
        itemCaloriesInput : '#item-calories',
        totalCalories : '.total-calories'
    }

    return {
        populateItemList : function(items){
            let html = '';

            items.forEach(function(item){
                html += `
                    <li id="item-${item.id}" class="collection-item"><strong>${item.name}: </strong><em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    </li>
                `; 
            });

            //Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput : function(){
            return {
                name : document.querySelector(UISelectors.itemNameInput).value,
                calories : document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem : function(item){
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li);
        },
        updateListItem : function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Convert NodeList to Array
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem){
                const itemId = listItem.getAttribute('id');

                if (itemId === `item-${item.id}`){
                    document.querySelector(`#${itemId}`).innerHTML = `
                         <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    `;
                }
            });
        },
        deleteListItem : function(id){
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },        
        clearInput : function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm : function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        clearItems : function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Convert NodeList to Array
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem){
                listItem.remove();
            });
        },
        showTotalCalories : function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        showEditState : function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        clearEditState : function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        getSelectors : function(){
            return UISelectors;
        }
    }
})();

//App Controller
const App = (function(ItemCtrl,UICtrl){
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();
        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);

        //Display submit on enter
        document.addEventListener('keypress',function(e){
            if (e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        }); 

        //Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);

        //Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);

        //Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);

        //Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState);

        //Clear items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItems);
    }

    const itemAddSubmit = function(e){
        //Check form input values 
        const input = UICtrl.getItemInput();
        if (input.name !== '' && input.calories !== ''){
            //Add item
            const newItem = ItemCtrl.addItem(input.name,input.calories);
            //Add item to UI
            UICtrl.addListItem(newItem);

            //Get total calories 
            const totalCalories = ItemCtrl.getTotalCalories();
            //Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            //Clear fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }   

    const itemEditClick = function(e){

        if (e.target.classList.contains('edit-item')){
            const listId = e.target.parentNode.parentNode.id;
            //ex id = item-0 - so we must split the id to get the number
            const listIdArr = listId.split('-');
            const id = parseInt(listIdArr[1]);

            //Get item
            const itemToEdit = ItemCtrl.getItemById(id);
            //Set current item
            ItemCtrl.setCurrentItem(itemToEdit);
            //Add item to form 
            UICtrl.addItemToForm();

        }
        e.preventDefault();
    }

    const itemUpdateSubmit = function(e){
       //Get item input
       const input = UICtrl.getItemInput();
       
       //Update item
        const updatedItem = ItemCtrl.updateItem(input.name,input.calories);

        //Update UI
        UICtrl.updateListItem(updatedItem);

        //Get total calories 
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    const itemDeleteSubmit = function(e){
       //Get current item
       const currentItem = ItemCtrl.getCurrentItem();

       //Delete from data structure
       ItemCtrl.deleteItem(currentItem.id);

       //Delete from UI
       UICtrl.deleteListItem(currentItem.id);

       //Get total calories 
       const totalCalories = ItemCtrl.getTotalCalories();
       //Add total calories to UI
       UICtrl.showTotalCalories(totalCalories);

       UICtrl.clearEditState();

        e.preventDefault();
    }

    const clearAllItems = function(){
        //Delete all items from data structure
        ItemCtrl.clearAllItems();

        //Remove items from UI
        UICtrl.clearItems();

        //Get total calories 
       const totalCalories = ItemCtrl.getTotalCalories();
       //Add total calories to UI
       UICtrl.showTotalCalories(totalCalories);
    }

    return {
        init : function(){
            //Clear edit state 
            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();
            UICtrl.populateItemList(items);
            loadEventListeners();
        }
    }
})(ItemCtrl,UICtrl);

App.init();