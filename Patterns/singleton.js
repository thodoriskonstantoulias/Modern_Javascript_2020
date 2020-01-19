//Singleton 

const Singleton = (function(){
    let instance;

    function createInstance(){
        const obj = new Object('Object instance!!!');
        return obj;
    }

    return {
        getInstance : function(){
            if (!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);