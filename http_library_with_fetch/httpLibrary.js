class httpLibrary{
    // get method implimentation
    // here we are returning a promise so that calling method can direcly get the
    // processed data fomr this method and have ability to use .then as well
    get(url){
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        // resolve the promise while returnign success results
        .then(data => resolve(data))
        // reject promise while returning error
        .catch(err => reject(err));
        })
    }

    // post method implimentation. Post methid also need input data and requets payload method, header, data
    post(url, data){
        return new Promise((resolve, reject) => {
        fetch(url,{
            method : "POST",
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        })
    }


    put(url, data){
        return new Promise((resolve, reject) => {
        fetch(url,{
            method : "PUT",
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        })
    }
    

    delete(url){
        return new Promise((resolve, reject) => {
        fetch(url,{
            method : "DELETE",
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve("Data deleted !!"))
        .catch(err => reject(err));
        })
    }
}