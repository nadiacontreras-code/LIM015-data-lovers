//DOM
//Importando BASE DE DATOS
import data from './data/pokemon/pokemon.js';
//Importando todas las funciones 
import * as dataFunctions from './data.js'; // (*)Importa todo de data.js
//Si hay peoblemas en el test llamar a cada funcion como abajo
/*Importando funciones
import {
  example
} from './data.js';*/


//BUSQUEDA GENERAL POKEMONES ingresando nombre o número

const buttonGeneralSearch = document.getElementById('buttonGeneralSearch');
buttonGeneralSearch.addEventListener('click', () => {
  const inputGeneralSearch = document.getElementById("inputGeneralSearch").value;

  if (inputGeneralSearch == "") {
    alert("Please write a Pokemon number or name")
  } else if (inputGeneralSearch > 251) {
    alert("Please write a number between 1 to 251")
  } else {
    /*  function getResult() {*/
    document.getElementById("WelcomeToPage").style.display = "none";
    document.getElementById("ExploringPage").style.display = "block";
    document.getElementById("displayAllPokemons").style.display = "none";
    document.getElementById("searchResult").style.display = "block";
  }
})

//MOSTRAR POKEMONES EN PANTALLA BIENVENIDA
const allData = data.pokemon;
let pokemonsCard = []; //Para guardar los items dentro de array
//------Para ubicar items dentro de una section
let card = document.querySelector('#card');

function showData(itemSearch) {
  // Para limpiar la pagina de las cards
  card.innerHTML = "";
  pokemonsCard = [];
  // Extrayendo información de Num, Img y Name  independiente
  let cardInformation = itemSearch.forEach(item => {
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
    pokemonsCard.push(section);
  });
  //Direccionando items para ubicar en section cards:
  //operador spread (...), genera una LISTA de valores a partir de un array
  card.append(...pokemonsCard);

  return cardInformation
}
// Para mostrar los card en la pantalla //
window.addEventListener('load', showData(data.pokemon)); //itemSearch=data.pokemon//

//MOSTRANDO POR ORDEN NUMERICO ASCENDENTE/DESCENDENTE
/*import {
  numericalOrder
} from './data.js';
*/
//Selector Number
const orderByNumber = document.getElementById('orderByNumber');
orderByNumber.addEventListener('change', () => {
  let numberOrderSelect = orderByNumber.value;
  let dataOrderNumber = dataFunctions.numericalOrder(numberOrderSelect, allData); //numericalOrder(parameter) en data.js
  showData(dataOrderNumber);

});

//ORDENAR POR ORDEN ALFABETICO A-Z/Z-A
/*import {
  alphabeticalOrder
} from './data.js';
*/
const orderByName = document.getElementById("orderByName");
orderByName.addEventListener("change", () => {

  let nameOrderSelect = orderByName.value;
  let dataOrderName = dataFunctions.alphabeticalOrder(nameOrderSelect, allData);
  showData(dataOrderName);


});


//ORDENAR POR TIPO
/*import {
  tipeOrder
} from './data.js';
*/
const orderByName = document.getElementById("orderByName");
orderByName.addEventListener("change", () => {

  let nameOrderSelect = orderByName.value;
  let dataOrderName = dataFunctions.alphabeticalOrder(nameOrderSelect, allData);
  showData(dataOrderName);


});
