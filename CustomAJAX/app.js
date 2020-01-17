// 1 -- Custom HTTP Library
const http = new easyHTTP;

//Get posts 
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
//     if (err){
//         console.log(err);
//     }else {
//         console.log(response);
//     }  
// });

//Post posts
const posts = {
    title : 'Custom post',
    body : 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', posts, function(err,post){
//     if (err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }  
// });

//Update post 
// http.put('https://jsonplaceholder.typicode.com/posts/1', posts, function(err,post) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }  
// });

//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,post){
    if (err){
        console.log(err);
    }else {
        console.log(post);
    } 
});

