//DOM
//Importando de data.js
import { example } from './data.js';
import { anotherExample } from './data.js';


//BASE DE DATOS, carpeta DATA
import data from './data/pokemon/pokemon.js';

let pokemonNumber = "";
let pokemonName ="";

//Extrayendo num, name, img (en base a num)
  data.pokemon.map(function(elem){
 
  pokemonNumber = elem.num ;
  pokemonName = elem.name;

 let cards2 = document.createElement('section');
 cards2.innerHTML = pokemonNumber
 
 document.getElementsByClassName('cards').appendChild(number);

 let name = document.createElement('section');
 name.innerHTML = pokemonName;
 document.getElementsByClassName('cards').appendChild(name);

 let image = document.createElement('section');
 image.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
 document.getElementsByClassName('cards').appendChild(image);
}); 


  /*let cards = document.createElement('section');
  cards.innerHTML = `${'<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>'} ${pokemonNumber} ${pokemonName}`;
  document.getElementById('cards').appendChild(cards);
  });*/
  /*let allNumbers = document.createElement("p");
  allNumbers.innerHTML = pokemonNumber;
  document.getElementById("allNumbers").appendChild(allNumbers);


  let allNames = document.createElement("p");
  allNames.innerHTML = pokemonName;
  document.getElementById("allNames").appendChild(allNames);

  let allPics = document.createElement("p");
  allPics.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
  document.getElementById("allPics").appendChild(allPics);

})*/

/*const pokemonContainer = document.getElementById('pokemonContainer');
//const totalPokemons = 251;
function createPokemonCard() {
  for (let i = 0; i < data.pokemon.length; i++) {

  const name = `${data.pokemon[i].name}  ${data.pokemon[i].num}`;

  // console.log(name);
  const pokemonEl = document.createElement('section');
  pokemonEl.classList.add('pokemon');

  const pokemonInnerHTML = name;

  pokemonEl.innerHTML = pokemonInnerHTML;

  //pokemonContainer.appendChild(pokemonEl);

 
}

  }
createPokemonCard()*/
