// module pattern structure 
// let test = (function(){
//         // declare private variables and functions        
//         return{
//             // declare public variables and functions 
//         }
//     }
// )();

//============= Standard module pattern ======================
// let UIHandler = function(){
//     // This is a provate function
//     let setText = function(newText){
//         let txtElement = document.querySelector(".txtBlock");
//         txtElement.textContent = newText;
//     }

//     return{
//         // returning new function whihc is publiccally accessible. This
//         // function calls provate function requried.
//         updateText(newText){
//             setText(newText);                                    
//         }
//     }
// }

// // using object we can call public functions exposed.
// let ui = new UIHandler();
// ui.updateText("Hello this is new text !!!")


//============= Revealing module pattern ======================

let UIHandler = function(){
    // This is a provate function
    let setText = function(newText){
        let txtElement = document.querySelector(".txtBlock");
        txtElement.textContent = newText;
    }

    return{
        // returning private function reference whihc then can be accessed
        //  publiccally through object. This is different from normal module approach
        // where we call private functions rather than returning their reference        
            updateText : setText            
    }
}

// using object we can call public functions exposed.
let ui = new UIHandler();
ui.updateText("Hello this is new text !!!")