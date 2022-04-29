

// promise chaining assignment.

let mainContainer = document.createElement("div");
mainContainer.className = "starWarsWrapper";

const getData = async () => {
    let response;
    let responseMoviesData;
    let responseVehiclesData;
    try
    {
        response = await axios.get("https://swapi.dev/api/people/1");
        console.log(response);
        displayCharacterName(response); // displays the name (Luke Skywalker).
        
        responseMoviesData = await (response.data.films);
        displayMovies(responseMoviesData); // displays the list of movies.

        responseVehiclesData = await (response.data.vehicles);
        displayVehicles(responseVehiclesData); // displays the list of vehicles.
    }
    catch(error)
    {
        console.log(error);
    } 

};



const displayCharacterName = (dataToWorkWith) => 
{
    let h3 = document.createElement("h3");
    h3.textContent = dataToWorkWith.data.name;
    mainContainer.append(h3);

};

const displayVehicles = (dataToWorkWith) => 
{
    let promiseAllArray = [];
    let vehicleHeader = document.createElement("p");
    vehicleHeader.className = "vehicle_header";
    vehicleHeader.innerText = "Luke Skywalker Vehicles";
    let ul = document.createElement("ul");
    ul.className = "vehicles_ul";
    ul.append(vehicleHeader);

    for(let i = 0; i < dataToWorkWith.length; i++)
    {
        promiseAllArray.push(axios.get(dataToWorkWith[i]));
    }
    Promise.all(promiseAllArray)
    .then( res => {
        res.forEach(element => {
            let newLi = document.createElement("li");
            newLi.innerText = element.data.name;
            ul.append(newLi);
        });
        mainContainer.append(ul);
    })
    .catch(error => console.log(error));

};

const displayMovies = (dataToWorkWith) => {
    let promiseAllArray = [];
    let movieHeader = document.createElement("p");
    movieHeader.className = "movie_header";
    movieHeader.innerText = "Luke Skywalker Movies";
    let ul = document.createElement("ul");
    ul.className = "movies_ul";
    ul.append(movieHeader);

    for(let i = 0; i < dataToWorkWith.length; i++)
    {
        promiseAllArray.push(axios.get(dataToWorkWith[i]));
    }
    Promise.all(promiseAllArray)
    .then( res => {
        res.forEach(element => {
            let newLi = document.createElement("li");
            newLi.innerText = element.data.title;
            ul.append(newLi);
        });
        mainContainer.append(ul);
    })
    .catch(error => console.log(error));    
};



getData();

document.body.append(mainContainer);
