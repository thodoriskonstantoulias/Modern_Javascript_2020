//Iterator-Generator mini project
const data = [
    {
        name : 'John Doe',
        age : 32,
        gender : 'male',
        location : 'Boston MA',
        image : 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name : 'Jehn Doe',
        age : 44,
        gender : 'female',
        location : 'Boston MA',
        image : 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name : 'William Jones',
        age : 45,
        gender : 'male',
        location : 'Miami FL',
        image : 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile to display when entering page
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group"> 
                <li class="list-group-item">Name : ${currentProfile.name}</li>
                <li class="list-group-item">Age : ${currentProfile.age}</li>
                <li class="list-group-item">Gender : ${currentProfile.gender}</li>
                <li class="list-group-item">Location : ${currentProfile.location}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    } else {
        //No more profiles
        window.location.reload();
    }
}

function profileIterator(profiles){
    let nextIndex = 0;
    return {
        next : function(){
            return nextIndex < profiles.length ? {value : profiles[nextIndex++] , done : false} : {done : true}
        }
    };
}