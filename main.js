const pokemonContainer = document.querySelector(".pokemon-container");

//Fetch al API que trae un pokemon
async function getPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`); //el fetch es asíncrono porque en el fondo de su corazón es una promesa.
    const pokemonData = await response.json(); //el json también es asíncrono.
    // const pokemon = data;
    // console.log(pokemonData);
    createCard(pokemonData);

    return pokemonData
}

//For para traer varios pokemones // cambiarlo por un for each
// async function getPokemons(number) {
//     for (let i = 1; i <= number; i++) {
//        await getPokemon(i);
//     }
// } //como que haciendo la lectura dado lo que dice la función pienso que debería traer 3 pokemones. Revisar. 

// i++ = sumar 1
// Preguntas: 
// (linea 17) Por qué se usa <= y no solo =



//NUEVA FUNCIÓN PARA TRANSFORMARLO EN ARRAY DE PASO
const pokemonsToRender = [];
async function getPokemons(number) {
    for (let i = 1; i <= number; i++) {
        const pokemonData = await getPokemonData(i);
        if (i === 1) console.log(JSON.stringify(pokemonData));
        pokemonsToRender.push(pokemonData);
    }
    console.log('variable para crear el array', pokemonsToRender);
}


function createCard(pokemon) {
    // console.log(pokemon);

    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');

    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default

    imageContainer.appendChild(image);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(imageContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

getPokemons(151);


//FILTRADO DE POKEMONES
//ARRAY METHOD: FILTER

function getPokemonsByType(pokemon, type) {
    const {types} = pokemon;

    if (pokemon.types.type.name = type) {
        createCard(pokemon)
    }
}


//Función main
// async function main() {
//     console.log('1');
//     console.log('2');
//     await getPokemon(1)
//     console.log('4');
// }
// main();


