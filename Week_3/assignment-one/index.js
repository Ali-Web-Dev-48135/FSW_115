let pokemonWrapper = document.getElementById("pokemonWrapper");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();



xhr.onreadystatechange = (event) => {
    if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
        let pokemonData = JSON.parse(xhr.responseText);
        let pokemonDataList = pokemonData.results;
        showPokemon(pokemonDataList);
        
    }

};

const showPokemon = (pokemonArrayUrl) => {
    for(const pokemon of pokemonArrayUrl) {
        let pokemonContainerElement = document.createElement("div");
        pokemonContainerElement.className = "pokemon";
        let pokemonNameElement = document.createElement("p");
        pokemonNameElement.innerText = `Name: ${pokemon.name.toUpperCase()}`;
        pokemonContainerElement.append(pokemonNameElement);
        pokemonWrapper.append(pokemonContainerElement);
    }

}


