const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

//bucle for que itera desde 1 hasta el valor de pokemon_count. Este bucle se encargará de obtener los datos de cada Pokémon individualmente.
const initPokemon = async () => {
    for (let i = 1; i <= pokemon_count; i++){
        await  getPokemon(i);
     };
};
async function getPokemon(id) {
    
    let endPoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response =  await fetch(endPoint);
    let data = await response.json();
    //console.log(data);
    createPokemonCard(data);

    function createPokemonCard (pokemon) {
   
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon');

        const pokemonImgContainer = document.createElement('div');
        pokemonImgContainer.classList.add('img-container');

        const pokemonImg = document.createElement('img');
        pokemonImg.src = `${data.sprites.front_default}`

        const pokemonInfo = document.createElement('div');
        pokemonInfo.classList.add('info');

        const pokemonId = document.createElement('span');
        pokemonId.classList.add('id');
        pokemonId.innerHTML = `${data.order}`;

        const pokemonName = document.createElement('h3');
        pokemonName.classList.add('name');
        pokemonName.innerHTML = `${data.name}`.toUpperCase();

        const pokemonType = document.createElement('h5');
        pokemonType.classList.add('type');
        pokemonType.innerHTML = `Type: ${data.types[0].type.name}`;
        const type = data.types[0].type.name;

        const color = colors[type];
        pokemonCard.style.backgroundColor= color;
        
        poke_container.appendChild(pokemonCard);
        pokemonCard.appendChild(pokemonImgContainer);
        pokemonCard.appendChild(pokemonInfo);
        pokemonImgContainer.appendChild(pokemonImg);
        pokemonInfo.appendChild(pokemonId);
        pokemonInfo.appendChild(pokemonName);
        pokemonInfo.appendChild(pokemonType);

    };


}

initPokemon();