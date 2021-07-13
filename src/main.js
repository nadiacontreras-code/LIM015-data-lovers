//DOM
//Importando BASE DE DATOS
import data from './data/pokemon/pokemon.js';
//Importando todas las funciones
import * as dataFunctions from './data.js'; // (*)Importa todo de data.js
//Si hay peoblemas en el test llamar a cada funcion como abajo

/*import {
  search
} from './data.js';
*/

//BUSQUEDA GENERAL POKEMONES ingresando nombre o número
let searchingPokemon;
const buttonGeneralSearch = document.getElementById('buttonGeneralSearch');
buttonGeneralSearch.addEventListener('click', () => {
  const inputGeneralSearch = document.getElementById("inputGeneralSearch").value;
  searchingPokemon = inputGeneralSearch.toLowerCase();
  if (inputGeneralSearch == "") {
    alert("Please write a Pokemon number or name")
  } else if (inputGeneralSearch > 251) {
    alert("Please write a number between 001 to 251")
  } else {
    let pokemonResult = dataFunctions.search(allData, searchingPokemon)

    showData(pokemonResult);

    document.getElementById("WelcomeToPage").style.display = "none";
    document.getElementById("ExploringPage").style.display = "block";
  }
});
/*
//MOSTRAR INFORMACION DE POKEMON SELECCIONADO
//let pokemonInformation;
const cardClick = document.getElementById(`${allData.num}`);
cardClick.addEventListener('click', () => {

  let pokemonInformation = dataFunctions.information(allData.num)

  document.getElementById("WelcomeToPage").style.display = "none";
  document.getElementById("ExploringPage").style.display = "block";

});
*/



//MOSTRAR POKEMONES EN PANTALLA BIENVENIDA
const allData = data.pokemon;
let pokemonsCard = []; //Para guardar los items dentro de array
//let pokemonsCardBack = [];
//Para ubicar items dentro de una section
let card = document.querySelector('#card');


function showData(itemSearch) {
  // Para limpiar la pagina de las cards
  card.innerHTML = "";
  pokemonsCard = [];
  //pokemonsCardBack = [];
  // Extrayendo información de Num, Img, Name y Type independiente
  let cardInformation = itemSearch.forEach(itemValue => { // forEach === map
    //Creando nodos numero
    const number = document.createElement('p')
    number.textContent = itemValue.num;
    number.className = "pokemonNumber"; //clase, para dar estilos css
    //Creando nodos imagen
    const pic = document.createElement('img')
    pic.src = itemValue.img; //src: source (link)
    pic.className = "pokemonPic";
    //Creando nodos nombre
    const name = document.createElement('p')
    name.textContent = itemValue.name.toUpperCase();
    name.className = "pokemonName"; //clase, para dar estilos css

    //NUEVO
    //Creando nodos about
    const about = document.createElement('p')
    about.textContent = itemValue.about.hidden; //oculto
    about.className = "pokemonAbout"; //clase, para dar estilos css

    //Creando nodos type
    const type = document.createElement('p')
    type.innerHTML = eachType(itemValue.type)
    //innerHTML, recupera y establece el mismo contenido pero en formato HTML
    //textContent, recupera y establece el contenido de la etiqueta como texto plano
    type.className = "pokemonType"; //clase, para dar estilos css

    //Creando section (parent) para num, pic, name, type (append)
    const section = document.createElement('section');
    section.className = "pokemonCard"
    section.id = `${itemValue.num}`
    //section agrega  num, pic, name, type
    //append: para agregar mas de una característica
    section.append(number, pic, name, about, type); //*appendChild solo acepta uno

    //Incluimos los items dentro de array
    pokemonsCard.push(section);

    /*NUEVO
    const sectionBack = document.createElement('section');
    sectionBack.className = "pokemonCardBack"
    sectionBack.append(about);
    pokemonsCardBack.push(sectionBack);
*/

  });
  //Direccionando items para ubicar en section cards:
  //operador spread (...), genera una LISTA de valores a partir de un array
  card.append(...pokemonsCard)

  //NUEVO card.append(...pokemonsCard, ...pokemonsCardBack);
  return cardInformation
}
// Para mostrar los card en la pantalla //
window.addEventListener('load', showData(allData)); //itemSearch=data.pokemon//

//FUNTION PARA EXTRAER CADA TIPO POR SEPARADO
function eachType(elem) {
  let createType = "";
  elem.forEach((newElem) => { // forEach ===map
    //span: contenedor en línea, para marcar parte de texto o doc
    //notación $ {}, para inyectar expresiones dentro de cualquier string
    createType += `<span class="eachPokemonType ${newElem}"> ${newElem} </span>`;
  });
  return createType;
}



/*
//MOSTRAR ABOUT
const displayAllPokemons = document.getElementById('displayAllPokemons');
displayAllPokemons.addEventListener('click', () => {


  alert("Hola");
})

*/


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
  typeFilter
} from './data.js';
*/
const filterByType = document.getElementById("orderByType");
filterByType.addEventListener("change", () => {
  let typeFilterSelect = filterByType.value;
  let dataFilterType = dataFunctions.typeFilter(typeFilterSelect, allData);
  showData(dataFilterType)
});
