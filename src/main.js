//DOM

//Importando BASE DE DATOS
import data from './data/pokemon/pokemon.js';
import * as dataJs from './data.js'; // (*)Importa todo de data.js


/*Importando funciones PARA PRUEBA
import {
  example
} from './data.js';
//example(12, 15); PRUEBA con return en data.js, para mostrar html
//document.getElementById("paraPrueba").innerHTML = example(12, 15);
*/

//BUSQUEDA GENERAL POKEMONES ingresando nombre o número

const buttonGeneralSearch = document.getElementById('buttonGeneralSearch');
buttonGeneralSearch.addEventListener('click', () => {
  const generalSearch = document.getElementById("generalSearch").value;

  if (generalSearch == "") {
    alert("Please write a Pokemon number or name")
  } else if (generalSearch > 251) {
    alert("Please write a number between 1 to 251")
  } else {
    /*  function getResult() {*/
    document.getElementById("displayAllPokemons").style.display = "none";
    document.getElementById("searchResult").style.display = "block";
  }
})

//MOSTRAR POKEMONES EN PANTALLA BIENVENIDA
const allData = data.pokemon;
const allPokemons = []; //Para guardar los items dentro de array
//Para ubicar items dentro de una section
const card = document.querySelector('#card')

function drawData(parametro) {
  parametro.forEach(item => {
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
  card.append(...allPokemons);
}
window.addEventListener('load', drawData(data.pokemon));
//Direccionando items para ubicar en section cards:
//operador spread (...), genera una LISTA de valores a partir de un array
//card.append(...allPokemons); //verificar en Elementos <- Consola


//MOSTRANDO POR ORDEN NUMERICO ASCENDENTE/DESCENDENTE

//Selector Number
const orderByNumber = document.getElementById('clasifyByNumber');
orderByNumber.addEventListener('change', () => {
  dataJs.numericalOrder(allPokemons) //numericalOrder(parameter) en data.js
  card.append(...allPokemons) //para mostrar en pantalla
})

//ORDENAR POR ORDEN ALFABETICO A-Z/Z-A
/*import {
  orderAZ
} from './data.js';
*/
const selectAz = document.getElementById("clasifyByName");
selectAz.addEventListener("change", () => {
  let valueSelect = selectAz.value;
  dataJs.orderAz(valueSelect, allData);
  
});

//console.log(allData);

/*
const nameOrder = document.getElementById('alphabeticalOrder');
nameOrder.addEventListener('change', () => {
})
*/

/* (let i = 0; i < allPokemons.length; i++) {
  const card = document.querySelector('#card')
  // console.log(allPokemons[i])
}
*/

/*nst alphabeticalOrder = document.getElementById('alphabeticalOrder');
alphabeticalOrder.addEventListener('change', () => {
      const order = alphabeticalOrder.value;
      let az;


      /*const card = document.querySelector('#card')
  data.pokemon.forEach(item => {
    const name = document.createElement('p')
    name.textContent = item.name

    if (order == 'az') {
      item.name.toUpperCase().sort();
    } else {
      item.name.toUpperCase().reverse();
    }
    name.className = "pokemonName";

    const section = document.createElement('section');
    section.className = "pokemonCard"

    section.append(name);

    allPokemons.push(section);
  });
  card.append(...allPokemons);
*/
//document.getElementById("card").innerHTML = "Elejí " + order;


//})
/*
let orderAtoZ;
const alphabeticalOrder = document.getElementById('alphabeticalOrder');
alphabeticalOrder.addEventListener('change', () => { //antes onchange en html
  const cardName = document.getElementById("card");
  cardName.innerHTML = "";
  orderAtoZ = alphabeticalOrder.value;
  //se llama a la funcion de data.js para ordenar alfabéticamente
  alphabetical(allPokemons, orderAtoZ)
});
*/

//console.log(alphabeticalOrder(a, b, c))
