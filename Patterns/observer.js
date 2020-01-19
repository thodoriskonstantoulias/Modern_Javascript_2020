//Observer Pattern 
function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe : function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe : function(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        }); 
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire : function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver();
document.querySelector('.sub-ms').addEventListener('click',function(){
    click.subscribe(getCurMillisec);
});
document.querySelector('.unsub-ms').addEventListener('click',function(){
    click.unsubscribe(getCurMillisec);
});
document.querySelector('.fire').addEventListener('click',function(){
    click.fire();
});

const getCurMillisec = function(){
    console.log(`Current milliseconds : ${new Date().getMilliseconds()}`);
}