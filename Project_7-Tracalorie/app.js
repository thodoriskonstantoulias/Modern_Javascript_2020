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
        logData : function(){
            return data;
        }
    }
})();

//UI Controller
const UICtrl = (function(){

})();

//App Controller
const App = (function(ItemCtrl,UICtrl){
    return {
        init : function(){

        }
    }
})(ItemCtrl,UICtrl);