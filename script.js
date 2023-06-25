

async function obtenerPokemones() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const pokemones = response.data.results;

  
    const contenedor = document.getElementById('contenedor');

    
    pokemones.forEach(pokemon => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('card');
      const imagen = document.createElement('img');
      imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.match(/\/(\d+)\//)[1]}.png`;
      imagen.alt = pokemon.name;
      imagen.classList.add('card-img-top');

      const nombre = document.createElement('p');
      nombre.textContent = pokemon.name;
      nombre.classList.add('card-title');


      tarjeta.appendChild(imagen);
      tarjeta.appendChild(nombre);
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error('Error al obtener los pokémones:', error);
  }
}

obtenerPokemones();