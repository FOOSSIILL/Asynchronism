//Fetch
const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/1');

    pokemons.then((res) =>{ // El primer then captura la respuesta y lo pasa a JSON
        
        return res.json();
    }).then((data) =>{ //El segundo then  recorre la respuesta y me entrega esos datos
        console.log(data.name);
    }).catch((error) => console.error(error));

//Más desglosado
const pokes = fetch('https://pokeapi.co/api/v2/pokemon/12');

const respuesta = pokes.then(res =>{
    return res.json();
});

respuesta.then(data => {
    console.log(data.name);
});

respuesta.catch((error) => console.error(error));

//Async await
function obtener_pokemon(id){
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        return fetch(url).then(res => {
            return res.json();
        })
    } catch (error) {
        console.error(error);
    }
    
}

/*async function call_pokemons () {
    for(let i = 1; i < 6; i++) {
        const poke = await obtener_pokemon(i);
        console.log(poke.name);
    }
}*/

//call_pokemons ();


const myArray = [];

async function call_pokemons () {
    for(let i = 1; i < 6; i++) {
        const poke = await obtener_pokemon(i);
        myArray.push(poke.name);  
    }
    console.log(myArray);
}

call_pokemons ();
