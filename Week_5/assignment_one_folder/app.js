

const toDoContainerElement = document.getElementById("toDoContainer");
const formBtn = document.querySelector("#mainForm button");



const clearOutToDoContainer = () => {
    toDoContainerElement.innerHTML = "";
    document.querySelector("#mainForm #taskName").value = "";
    document.querySelector("#mainForm #taskDescription").value = "";
    document.querySelector("#mainForm #taskPrice").value = "";
}

const getData = () => {
    clearOutToDoContainer();
     axios.get("http://api.bryanuniversity.edu/<JohnDoeToDo>/list/")
     .then(response => {
         const respondedData = response.data;
         displayToDo(respondedData);
     })
     .catch( error => {
         console.log(`Sorry there was an error and the error is ${error}`);
     });
};

const postToDo = (e) => {
    e.preventDefault();
    const data = {
        name: document.querySelector("#mainForm #taskName").value,
        description: document.querySelector("#mainForm #taskDescription").value,
        price: document.querySelector("#mainForm #taskPrice").value,
        isComplete: false,
    }
    axios.post("http://api.bryanuniversity.edu/<JohnDoeToDo>/list/", data)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    clearOutToDoContainer();
    getData();
};

const isCompleteStatus = (isComplete) => {
    
    const completeToDo = {
        isComplete: false,
    }
    const unCompleteToDo = {
        isComplete: true,
    }
    if (isComplete === false)
    {
        return Object.assign(completeToDo, unCompleteToDo);
    }
    else if(isComplete === true)
    {
        return Object.assign(unCompleteToDo, completeToDo);
    }

};




const putToDo = (element) => {

    
    if(element.isComplete === false)
    {
        const completeToDo = isCompleteStatus(false);
        axios.put(`http://api.bryanuniversity.edu/<JohnDoeToDo>/list/${element._id}`,completeToDo)
        .then(response => console.log(response))
        .catch(error => console.log(error))

        

    } 
    else if(element.isComplete === true)
    {
        const unCompleteToDo = isCompleteStatus(true);
        axios.put(`http://api.bryanuniversity.edu/<JohnDoeToDo>/list/${element._id}`,unCompleteToDo)
        .then(response => console.log(response))
        .catch(error => console.log(error))

    }
}

const deleteTask = (toDoId) => {
    axios.delete(`http://api.bryanuniversity.edu/<JohnDoeToDo>/list/${toDoId._id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

const displayToDo = (arrayOfToDos) => {
    
    arrayOfToDos.forEach(element => {
        const toDoElementDiv = document.createElement("div");
        toDoElementDiv.className = "toDoElementDiv";
        toDoElementDiv.innerHTML = `
            <h4>${element.name}</h4>
            <p>${element.description}</p>
            <p>Price: ${element.price}</p>
            <input type="checkbox"/>
            <button>Delete</button>
            <p class="hideIsComplete">${element.isComplete}</p>
            `;
            toDoElementDiv.querySelector("button").addEventListener("click", () => {
                deleteTask(element)
                clearOutToDoContainer();
                getData();
            });
            toDoElementDiv.querySelector("input").addEventListener("click", putToDo.bind(null, element));
            if(element.isComplete === true)
                toDoElementDiv.querySelector("p").className = "completeToDoStyle";
            toDoContainerElement.append(toDoElementDiv);
    });

};
document.getElementById("latestBtn").addEventListener("click", getData);
formBtn.addEventListener("click", postToDo);

getData();
