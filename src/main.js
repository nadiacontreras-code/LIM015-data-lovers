//DOM
//Importando de data.js
import {
  example
} from './data.js';
import {
  filterType
} from './data.js';
//import { anotherExample } from './data.js';
//
//BASE DE DATOS, carpeta DATA
import data from './data/pokemon/pokemon.js';
//import * as data from './data.js';

const buttonGeneralSearch = document.getElementById('buttonGeneralSearch');
buttonGeneralSearch.addEventListener('click', getResult => {
  const generalSearch = document.getElementById("generalSearch").value;

  if (generalSearch == "") {
    alert("Please write a Pokemon number or name")
  } else if (generalSearch > 251) {
    alert("Please write a number between 1 to 251")
  } else {
    function getResult() {
      document.getElementById("displayAllPokemons").style.display = "none";
      document.getElementById("searchResult").style.display = "block";
    }
  }
})
//Para guardar los items dentro de array
const allPokemons = [];
//Para ubicar items dentro de una sec
const card = document.querySelector('#card')
data.pokemon.forEach(item => {
  //Creando nodos numero
  const number = document.createElement('p')
  number.textContent = item.num;
  number.className = "pokemonNumber"; //clase, para dar estilos css
  //Creando nodos imagen
  const pic = document.createElement('img')
  pic.src = item.img; //src: source (link)
  pic.className = "pokemonPic";
  //Creando nodos nombre
  const name = document.createElement('p')
  name.textContent = item.name.toUpperCase();
  name.className = "pokemonName"; //clase, para dar estilos css
  //Creando section (parent) para num, pic, name (append)
  const section = document.createElement('section');
  section.className = "pokemonCard"
  //section agrega  num, pic, name
  //append: para agregar mas de una característica
  section.append(number, pic, name); //*appendChild solo acepta uno
  //Incluimos los items dentro de array
  allPokemons.push(section);
});
//Direccionando items para ubicar en section cards:
//operador spread (...), genera una lista de valores a partir de un array
card.append(...allPokemons); //verificar en Elementos <- Consola

//example(12, 15); PRUEBA con return en data.js, para mostrar html
document.getElementById("paraPrueba").innerHTML = example(12, 15);
//document.getElementById("searchByType").innerHTML = filterType(12, 15);
