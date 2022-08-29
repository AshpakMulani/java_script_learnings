const gitUsersURL = "https://api.github.com/users1"

function getGitUsers(){
    // call api in async way
    fetch(gitUsersURL)
    // since fetch returns promise wait for it to resolve using .then and convert
    // returned data from api in json object
    .then((res) => {
        // we need to explicitly throw error while using fetch by checking return code 
        // of api call else return json object
        if(!res.ok){
            throw new Error(res.error);
        }
        return res.json()
    })
    // .json method also returns a promise so wait for its results in .then and process
    // returned data
    .then((data) => console.log(data))
    // handle error in catch
    .catch((err) => console.log(`error occure invalid api url : ${err}`))
    .finally(() => console.log("This is going to execute always"))
}

getGitUsers();



