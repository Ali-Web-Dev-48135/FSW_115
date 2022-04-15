// resolve - .then()
// reject - .catch();
//
//thenable.
// const axios = require("axios");

// cors anywhere...

const toDoUlElement = document.getElementById("toDoUl");
const toDoContainerElement = document.getElementById("toDoContainer");


// grabbing all the inputs from the html file..
// const toDoInput = document.getElementById("toDoInput");
// const toDoPrice = document.getElementById("toDoPrice");
// const toDoDescription = document.getElementById("toDoDescription");




const getData = () => {
     axios.get("http://api.bryanuniversity.edu/<JohnDoeToDo>/list/")
     .then(response => {
         const respondedData = response.data;
         console.log(respondedData);
         displayToDo(respondedData);
     })
     .catch( error => {
         console.log(`Sorry there was an error and the error is ${error}`)
     });
    

}




const displayToDo = (arrayOfToDos) => {
    
    arrayOfToDos.forEach(element => {
        const toDoLi = document.createElement("li");
        const isCompleteToDo = element.isComplete;
        if(isCompleteToDo)
            toDoLi.className = "strikedThrough";
        toDoLi.innerHTML = ` ${element.description}`;
            toDoUlElement.append(toDoLi);
            toDoContainerElement.append(toDoUlElement);
    });

};

getData();

