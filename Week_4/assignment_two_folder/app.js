const apikey =  "c6713b7c7bc7477f958b99d2bd6f1425";
const submitBtn = document.getElementById("submitBtn");

const getData = () => {
     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=8`)
     .then( response => {
         const responseData = response.data.recipes;
         console.log(responseData);
         responseData.forEach(element => {
             console.log(element.title)
         });
         displayData(responseData);
     })
     .catch(error => console.log(error))
};

const displayData = (arrayOfData) => {
    const mainDataWrapper = document.querySelector(".dataWrapper");
    arrayOfData.forEach((element) => {
        let dataHolder = document.createElement("div");
        dataHolder.className = "dataHolder";
        dataHolder.innerHTML = `
            <p>${element.title}</p>
            <img src="${element.image}"/>
        `;
        mainDataWrapper.append(dataHolder);
    });
};

submitBtn.addEventListener("click", getData);