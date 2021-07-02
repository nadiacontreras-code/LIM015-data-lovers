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
  pokemonNumber = elem.num;
  pokemonName = elem.name;
  

  let allNumbers = document.createElement("p");
  allNumbers.innerHTML = pokemonNumber;
  document.getElementById("allNumbers").appendChild(allNumbers);


  let allNames = document.createElement("p");
  allNames.innerHTML = pokemonName;
  document.getElementById("allNames").appendChild(allNames);

  let allPics = document.createElement("p");
  allPics.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
  document.getElementById("allPics").appendChild(allPics);

})
