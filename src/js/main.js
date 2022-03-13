const selecListPoke = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.card-pokemon');

selecListPoke.forEach(pokemon => {

  pokemon.addEventListener('click', () => {
    
    const openPokeCard = document.querySelector('.open');
    openPokeCard.classList.remove('open');

    const idChosenPoke = pokemon.attributes.id.value;

    const idPokeCardToOpen = 'card-' + idChosenPoke;
    const openToPokeCard = document.getElementById(idPokeCardToOpen);
    openToPokeCard.classList.add('open');

    const pokeAtivoList = document.querySelector('.ativo');
    pokeAtivoList.classList.remove('ativo');

    const ChosenPokeList = document.getElementById(idChosenPoke);
    ChosenPokeList.classList.add('ativo');
  })
})





