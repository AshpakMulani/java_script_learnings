class httpLibrary{
    // get method implimentation. with introduction of async-awit things become very clean
    // and easy as we dont have to explicitely return promise and handle resolve, reject
    // implimentation also shows handle error if response from api is not success
    async get(url){
        // wait for api to return results using await
        let apiResult = await fetch(url);
        if(apiResult.ok){
            // wait for json conversion of results
            let res = await apiResult.json();
            // return results 
            return res
        }
        else{
            // return error by rejecting promise
            await Promise.reject(new Error(""));
        }
    }

    // post method implimentation. 
    async post(url, data){
      
        let apiResult = await fetch(url,{
            method : "POST",
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })

        let res = await apiResult.json();        
        return res;
    }

    // put method
    async put(url, data){
        let apiResult = await fetch(url,{
            method : "PUT",
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })

        let res = await apiResult.json();
        return res;      
    }
    
    // delete method
    async delete(url){        
        let apiResult = await fetch(url,{
            method : "DELETE",
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        
        let res = await apiResult.json();
        return 'record Deleted!!';
    }
}