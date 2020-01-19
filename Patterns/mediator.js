const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send : function(message,to){
        this.chatroom.send(message,this,to);
    },
    receive : function(message,from){
        console.log(`${from.name} to ${this.name} : ${message}`);
    }
}

const Chatroom = function(){
    let users = {};

    return {
        register : function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send : function(message,from,to){
            if (to){
                to.receive(message,from);
            }else {
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message,from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const ted = new User('Ted');
const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(ted);

brad.send('Hello Ted',ted);