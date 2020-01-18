//Error handling chapter

const user = {name : 'Ted'};

try{
    //Reference error
    //myFunction();

    //Syntax error
    //eval('Hello World');

    //Custom error
    if(!user.email){
        //throw 'User has no email';
        throw new SyntaxError('User has no email');
    }
} catch(e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
} finally {
    console.log('In finally block');
}

console.log('Program continues');