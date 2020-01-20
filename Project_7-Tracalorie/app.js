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
        logData : function(){
            return data;
        }
    }
})();

//UI Controller
const UICtrl = (function(){
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
            document.querySelector('#item-list').innerHTML = html;
        }
    }
})();

//App Controller
const App = (function(ItemCtrl,UICtrl){
    return {
        init : function(){
            const items = ItemCtrl.getItems();
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl,UICtrl);