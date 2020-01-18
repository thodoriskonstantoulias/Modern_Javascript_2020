class Github {

    constructor(){
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user){
        //Fetch the users
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        //Fetch their repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile : profileData,
            repos : repos
        }
    }
}