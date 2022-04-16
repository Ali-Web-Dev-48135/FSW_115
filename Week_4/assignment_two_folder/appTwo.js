
const submitBtn = document.getElementById("submitBtn");

const getData = () => {
    for(let i = 0; i < 8; i++){
        axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then( response => {
            const responseData = response;
            displayData(responseData);
        })
        .catch(error => console.log(error))
   };
   
    }

const displayData = (arrayOfData) => {

    const mainDataWrapper = document.querySelector(".dataWrapper");
        let dataHolder = document.createElement("div");
        dataHolder.className = "dataHolder";
        dataHolder.innerHTML = `
            <img src="${arrayOfData.data.message}"/>
        `;
        mainDataWrapper.append(dataHolder);
};

submitBtn.addEventListener("click", getData);

