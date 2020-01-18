const github = new Github();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;

    if (userText !== ''){
        //Make http call -- see github.js       
        github.getUser(userText)
              .then(data => {
                if (data.profile.message === 'Not Found'){
                    //Show alert
                } else {
                    //Show profile
                }
              }) 
    } else {
        //clear profile 
    }
});