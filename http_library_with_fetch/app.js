let http =  new httpLibrary;
const url = "https://jsonplaceholder.typicode.com/";


// http.get(url + "users")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// let data = {
//     email: "xyz@abcd.biz",    
//     name: "Ashpak Mulani",
//     phone: "123456789",
//     username: "Ashpak"
// }

// http.post(url + "users", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// http.put(url + "users/2", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


http.delete(url + "users/2")
.then(data => console.log(data))
.catch(err => console.log(err));

