// const pokemonContainer = document.querySelector('.pokemon-container');

// Petición al Api
// function fetchPokemon(id) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// fetchPokemon(1);


// MÉTODO QUE VIMOS EN CLASES:

async function getPokemones(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`); //el fetch es asíncrono porque en el fondo de su corazón es una promesa.
    const data = await response.json(); //el json también es asíncrono.
    console.log('3', data.name);
}

async function main() {
    console.log('1');
    console.log('2');
    await getPokemones(1)
    console.log('4');
}
main();



