//1 -- REGEX intro

//let re;
//re = /hello/i;  // i = case insensitive
//console.log(re.source);

//exec -- return result in an array or null
//const result = re.exec('hello world');
//console.log(result);

//test -- returns true or false if match
// const result = re.test('hello there');
// console.log(result);

//match -- returns result array or null
// const str = 'hello man';
// const result = str.match(re);
// console.log(result);

//replace -- replace regex string with new 
// const str = 'hello man';
// const result = str.replace(re,'hi');
// console.log(result);

//2 -- Metacharacters
let re;
//Literal chars
re =  /hello/;
re =  /hello/i;

//Metacharacters 
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /h.llo/i // Matches any ONE character
re = /h*llo/i // Matches any character 0 or more times

//Character sets
re = /gr[ae]y/i;  //Must be an a or an e 
re = /[GF]ray/; 
re = /[^GF]ray/i; //Match anything except G or F 
re = /[A-Z]ray/; //Match any uppercase letter 
re = /[A-Za-z]ray/; //Match any letter 
re = /[0-9]ray/; //Match any number 

//Quantifiers 
re = /Hel{2}o/i // l must occurs two times

//Parentheses - Grouping
re = /([0-9]x){3}/

//Shorthand char classes
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; //+ = one or more
re = /\d/; // match any digit

//Assertion
re = /x(?=y)/; // Match x only if followed by y

//const str = 'Hello world';
//const str = 'Gray';
//const str = '5x4x4x';
const str = 'xy';

const result = re.exec(str);
console.log(result);

function reTest(re,str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else {
        console.log(`${str} does not matches ${re.source}`)
    }
}

reTest(re,str);