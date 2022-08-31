const github = new GitHub(git_client_id, git_client_secret);
const ui = new UI;
const searchBox =  document.getElementById("searchUser");

// event listener for key up. Search operiton will be performed on each key stroke
searchBox.addEventListener("keyup",getuserProfile)

// call wo show no data in UI on first load
ui.showNoProfile("No Data");

function getuserProfile(e){
    if(e.target.value !== ''){  
        // start getting user details  
        github.getUserProfile(e.target.value)
        .then(data => 
            {
                // on successfull call we get 'url' and other keys in result
                if('url' in data.profile){
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repo);
                }
                // if user profile is not present then 'not found' message is returned
                else if(data.profile.message.includes("Not Found")){
                    ui.showNoProfile("Matching user profile not found");
                }
                // check rate limit error 
                else if(data.profile.message.includes("rate limit")){
                    ui.showNoProfile(data.profile.message);
                }         
            }           
            );
    }
    else{
        ui.showNoProfile("No Data");
    }
}