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
        addBtn : '.add-btn',
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
        clearInput : function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        showTotalCalories : function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
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

        document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);
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

    return {
        init : function(){
            const items = ItemCtrl.getItems();
            UICtrl.populateItemList(items);
            loadEventListeners();
        }
    }
})(ItemCtrl,UICtrl);

App.init();