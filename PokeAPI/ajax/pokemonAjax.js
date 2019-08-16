//Picture of pokemon does not show up. 


function addToPokemonIndex(event) {
    event.preventDefault();
    let name = event.target.pokemon.value;
    let description = event.target.description.value;
  
    let pokemonContainer = document.createElement('div');
    pokemonContainer.id = name.toLowerCase();
    let pokemonContent = document.createElement('p');
    pokemonContent.innerHTML = `${name} - ${description}`;
    pokemonContainer.appendChild(pokemonContent);
  
    let list = document.getElementById('pokemon-list');
    list.appendChild(pokemonContainer);
  
    let loadingIndicator = createLoadingIndicator();
    pokemonContainer.appendChild(loadingIndicator);
  }
  
  function clearForm() {
    document.getElementById('pokemonIndex').reset();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('pokemonIndex');
    form.addEventListener('submit', function() {
      addToPokemonIndex(event);
      clearForm();
    });
  });
  
  
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/1/');
  httpRequest.send();
  
  httpRequest.onreadystatechange = function() {
    // Process the response here
  };
  
  function createLoadingIndicator() {
    let loading = document.createElement('p')
    loading.id = 'loading';
    loading.innerHTML = 'Loading...';
    return loading;
  }
  
  function removeLoadingIndicator() {
    let loading = document.getElementById('loading');
    loading.remove();
  }
  
  function fetchPokemon(event) {
    let pokemon = event.target.pokemon.value.toLowerCase();
  
    let request = new XMLHttpRequest();
    // let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    let url = 'https://pokeapi.co/api/v2/pokemon-form/1/';
    request.open('GET', url);
    request.send();
  
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let response = JSON.parse(request.responseText);
  
        } else {
          console.log('There was a problem with the request.');
        }
      }
    };
  
    function placePokemonImage(pokemonData) {
  
      removeLoadingIndicator();
  
      let path = pokemonData.sprites.front_default;
      let name = pokemonData.name;
    
      let image = document.createElement('img');
      image.src = path;
      image.alt = name;
    
      let pokemonListItem = document.getElementById(name.toLowerCase());
      pokemonListItem.appendChild(image); 
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('pokemonIndex');
    form.addEventListener('submit', function() {
      addToPokemonIndex(event);
      fetchPokemon(event);
    });
  });