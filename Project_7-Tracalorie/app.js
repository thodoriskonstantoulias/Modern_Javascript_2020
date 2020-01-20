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
        itemCaloriesInput : '#item-calories'
    }

    return {
        populateItemList : function(items){
            let html = '';

            items.forEach(function(item){
                html += `
                    <li id="item-${item.id}" class="collection-item"><strong>${item.name}</strong><em>${item.calories}</em>
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