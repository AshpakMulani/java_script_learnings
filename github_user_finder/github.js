class GitHub{
    constructor(client_id=null, client_secret=null){
        this.baseURL = "https://api.github.com/users"
        // these two variables comes from keys.js whihc is not committed in git
        // as both the keys are secret. Before running the code both the keys in
        // mentioned variables needs to be added in app.js
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUserProfile(user){        
        // get the user profile details
        let userProfile = await fetch(this.baseURL + `/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);   
        
        //get user latest repositories 
        const userRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // get profile details
        let userProfileData = await userProfile.json();
        console.log(userProfileData)

        // get repo details
        let userRepoList = await userRepo.json();
        console.log(userRepoList)
        
        // return profile details in object {profile : <<details>>}
        return {
            profile : userProfileData,
            repo : userRepoList
        }

    }
}