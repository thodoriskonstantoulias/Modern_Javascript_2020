//1 -- REGEX intro

let re;
re = /hello/i;  // i = case insensitive
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