//DOM
//Importando BASE DE DATOS
//import data from './data/pokemon/pokemon.js'; // Comentado para usar pokemon.json (FETCH)
//import data from './data/pokemon/pokemon.js'; //comentado para FETCH
//Importando todas las funciones
import * as dataFunctions from './data.js'; // (*)Importa todo de data.js
//Si hay peoblemas en el test llamar a cada funcion como abajo


// HERRAMIENTA O MECANISMO??? FETCH: Usando API pokemon.json
let allData = "";
fetch('data/pokemon/pokemon.json', {})
  .then(pokemon => {
    return pokemon.json();
  })
  .then(data => {
    allData = data.pokemon;
    //console.log(allData);
    return showData(allData);
  });


//BUSQUEDA GENERAL POKEMONES (ingresando nombre o número)

let searchingPokemon;
const buttonGeneralSearch = document.getElementById('buttonGeneralSearch');
buttonGeneralSearch.addEventListener('click', () => {
  const inputGeneralSearch = document.getElementById("inputGeneralSearch").value;
  searchingPokemon = inputGeneralSearch.toLowerCase();

  if (inputGeneralSearch == "") {
    alert("Please write a Pokemon number or name")
  } else if (inputGeneralSearch > 251 || inputGeneralSearch < 1) {
    alert("Please write a number between 001 to 251")
  } else {
    let pokemonResult = dataFunctions.search(allData, searchingPokemon)
    showData(pokemonResult);

    document.getElementById("WelcomeToPage").style.display = "none";
    document.getElementById("ExploringPage").style.display = "block";
    document.querySelector(".sectionButtonInteractionMain").style.display = "none";

  }
});




//MOSTRAR POKEMONES EN PANTALLA BIENVENIDA
//const allData = data.pokemon; //comentado para FETCH

//Para guardar los items dentro de array
let pokemonsCard = [];

//Para ubicar items dentro de una section
let card = document.querySelector('#card');



//FUNCION para extraer información de base de datos
function showData(itemSearch) {
  // Para limpiar la pagina de las cards
  card.innerHTML = "";
  pokemonsCard = [];

  // Extrayendo información de Num, Img, Name y Type independiente
  let cardInformation = [];
  itemSearch.forEach(itemValue => {
    //Creando nodos numero
    const number = document.createElement('p')
    number.textContent = itemValue.num;
    number.className = "pokemonNumber"; //clase, para dar estilos css
    //Creando nodos imagen
    const pic = document.createElement('img')
    pic.src = itemValue.img; //src: source (link)
    pic.className = "pokemonPic";
    pic.id = "pokemonPic";
    //Creando nodos nombre
    const name = document.createElement('p')
    name.textContent = itemValue.name.toUpperCase();
    name.className = "pokemonName";
    //Creando nodos type
    const type = document.createElement('p')
    type.innerHTML = eachType(itemValue.type);
    type.className = "pokemonType";

    //Creando nodos about
    const about = document.createElement('p')
    about.textContent = `About: ${itemValue.about}`;
    about.className = "pokemonAbout";
    //Creando nodos size
    const size = document.createElement('p')
    size.textContent = `Height: ${itemValue.size['height']} Weight: ${itemValue.size['weight']}`;
    size.className = "pokemonSize";
    //Creando nodos resistant
    const resistant = document.createElement('p')
    resistant.textContent = `Resistant: ${itemValue.resistant}`;
    resistant.className = "pokemonResistant";
    //Creando nodos weaknesses
    const weaknesses = document.createElement('p')
    weaknesses.textContent = `Weaknesses: ${itemValue.weaknesses}`;
    weaknesses.className = "pokemonWeaknesses";
    //Creando nodos rarity
    const rarity = document.createElement('p')
    rarity.textContent = `Rarity: ${itemValue.rarity}`;
    rarity.className = "pokemonRarity";
   
    //Creando nodo section (parent) para num, pic, name, type (append)
    const section = document.createElement('section');
    section.className = "pokemonCard";
    section.id = `${itemValue.num}`; //id

    const section2 = document.createElement('section');
    section2.className = "pokemonCardBack";


    //section agrega  num, pic, name, type
    //append: para agregar mas de una característica
    section.append(number, pic, name, type); //*appendChild solo acepta uno a la vez
    section2.append(about, size, resistant, weaknesses, rarity);

    //Incluimos los items dentro de array
    pokemonsCard.push(section, section2);

  });
  //Direccionando items para ubicar en section cards:
  //operador spread (...), genera una LISTA de valores a partir de un array
  card.append(...pokemonsCard)

  return cardInformation
}
// Para mostrar los cards en la pantalla
//Evento load 
//window.addEventListener('load', showData(allData)); //comentado para FETCH



//FOLLOW US
const followUs = document.getElementById('followUs');
followUs.addEventListener('click', () => {
  document.querySelector(".footerListSocialMedia").style.display = "block";
  // document.querySelector(".footerListSocialMedia");
});



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

const orderByName = document.getElementById("orderByName");
orderByName.addEventListener("change", () => {
  let nameOrderSelect = orderByName.value;
  let dataOrderName = dataFunctions.alphabeticalOrder(nameOrderSelect, allData);
  showData(dataOrderName);
});


//FUNCION PARA EXTRAER CADA TIPO POR SEPARADO
function eachType(elem) {
  let createType = "";
  elem.forEach((newElem) => { // forEach ===map
    //span: contenedor en línea, para marcar parte de texto o doc
    //notación $ {}, para inyectar expresiones dentro de cualquier string
    createType += `<span class="eachPokemonType ${newElem}"> ${newElem} </span>`;
  });
  return createType;

}

//FILTRAR POR TIPO

const filterByType = document.getElementById("orderByType");
filterByType.addEventListener("change", () => {
  let typeFilterSelect = filterByType.value;
  let dataFilterType = dataFunctions.typeFilter(typeFilterSelect, allData);
  showData(dataFilterType)
  //  console.log(dataFilterType)
});

//FILTRAR POR RAREZA

const filterByRarity = document.getElementById("orderByRarity");
filterByRarity.addEventListener("change", () => {
  let rarityFilterSelect = filterByRarity.value;
  let dataFilterRarity = dataFunctions.rarityFilter(rarityFilterSelect, allData);
  showData(dataFilterRarity)
});


//--------------- SECTION STATISTICS, MOSTRANDO PORCENTAJE ------------------//

const statistics = document.querySelector(".statisticsPage");
statistics.addEventListener('click', () => {
  document.getElementById("WelcomeToPage").style.display = "none";
  document.getElementById("ExploringPage").style.display = "block";
  document.querySelector(".sectionGeneralSearch").style.display = "none";
  document.querySelector(".generalAdvancedSearch").style.display = "none";
  document.querySelector(".sectionButtonInteractionMain").style.display = "none";
  document.querySelector(".buttonReturnPageMain").style.display = "block";
  document.getElementById("displayAllPokemons").style.display = "none";
  document.getElementById("sectionGeneralStats").style.display = "block";
  //document.getElementById("donut_single").style.display = "block";

  //PORCENTAJE DE POKEMONES POR TIPO

  let waterStatistics;
  waterStatistics = dataFunctions.getTypeStats(allData, 'water');
  //console.log(waterStatistics);
  document.getElementById('typeTop').innerHTML =
    "Most of the Pokemons are of the water type, which represents " + waterStatistics + " of the total Pokemons.";
  let dragonStatistics;
  dragonStatistics = dataFunctions.getTypeStats(allData, 'dragon');
  document.getElementById('typeBottom').innerHTML =
    "The ghost, metal, and dragon types are the least numerous of all, representing " + dragonStatistics + "% of all Pokemons.";

  const statsByType = document.getElementById("statsByType");
  statsByType.addEventListener("change", () => {
    const valueType = statsByType.value;
    //console.log(pruebaStatics);
    const showTypeStats = dataFunctions.getTypeStats(allData, valueType);

    //console.log(showTypeStats);
    
    const statisticsTypeResults = document.querySelector(".statisticsTypeResults");
    statisticsTypeResults.innerHTML = " represents " + showTypeStats + "% of all pokemons.";
  });

  //PORCENTAJE DE POKEMONES POR RAREZA
  let legendaryStatistics;
  let mythicStatistics;
  legendaryStatistics = dataFunctions.getRarityStats(allData, 'legendary');
  document.getElementById('rarity1').innerHTML = legendaryStatistics + "% of Pokemons are Legendary?";
  mythicStatistics = dataFunctions.getRarityStats(allData, 'mythic');
  document.getElementById('rarity2').innerHTML = "and only " + mythicStatistics + "% of Pokemons are mythical?";

});

/*
async function obtInfo() {

  const info = await fetch('data/pokemon/pokemon.json');
  const allData = await info.json();

  const array = [];
  array.push(['Nombre', 'Peso']);
  for (let i in allData) {
    console.log(allData[i]);
    array.push(
      [allData[i].name,
        allData[i].rarity,
      ]
    );
  }
  console.log(array);
}
const json = obtInfo();
*/


//Deshabilitados slint, DESDE AQUI
/* eslint-disable */

google.charts.load('current', {
  packages: ['corechart']
});

//PRIMER GRAFICO
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {

  async function obtInfo() {
    const info = await fetch('data/pokemon/pokemon.json');
    const allDataX = await info.json();
    const allData2 = allDataX.pokemon

    const array = [];

    array.push(['Rarity', 'Valor']);
    //for (let i = 0; i < allData2.length; i++) {
    //for (let i in allData2){
    array.push(
      ['Legendary', Number(dataFunctions.getRarityStats(allData2, 'legendary'))],
      ['Mythic', Number(dataFunctions.getRarityStats(allData2, 'mythic'))],
      ['Normal', Number(dataFunctions.getRarityStats(allData2, 'normal'))],
    );
    //}
    return array;
  }

  const json = await obtInfo();
  //console.log(json)
  const data = google.visualization.arrayToDataTable(json);
  console.log(data);
  let options = {
    title: 'Pokemons Rarity',
    is3D: true,
    backgroundColor: '#E4E4E4',
  };

  let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

//SEGUNDO GRAFICO
google.charts.setOnLoadCallback(drawChart2);

async function drawChart2() {

  async function obtInfo() {
    const info = await fetch('data/pokemon/pokemon.json');
    const allDataX = await info.json();
    const allData2 = allDataX.pokemon

    const array = [];
    array.push(['Type', 'Valor']);
    array.push(
      ['water', Number(dataFunctions.getTypeStats(allData, 'water'))],
      ['others', 100 - Number(dataFunctions.getTypeStats(allData, 'water'))],
    );
    return array;
  }

  const json = await obtInfo();
  //console.log(json)
  const data = google.visualization.arrayToDataTable(json);
  console.log(data);
  let options = {
    title: 'Pokemons Type water',
    is3D: true,
    backgroundColor: '#E4E4E4',
  };

  let chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
  chart.draw(data, options);
}





//AQUI EMPIEZA
/*
google.charts.load('current', {
  packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Rarity', '%'],
    ['Legendary Pokemons ', 3.59],
    ['Mythic Pokemons', 0.80],
    ['Normal Pokemons', 95.61],
  ]);

  let options = {
    title: 'Pokemons Rarity',
    is3D: true,
    backgroundColor: '#E4E4E4',

  };

  let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);

  // }

}
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Type', '%'],
    ['water ', 19.92],
    ['others', 80.08],
  ]);

  var options = {
    title: 'Pokemons Type water',
    is3D: true,
    backgroundColor: '#E4E4E4',

  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
  chart.draw(data, options);
}

*/
/* eslint-enable */

/* google.charts.setOnLoadCallback(
     function() { // Anonymous function that calls drawChart1 and drawChart2
          drawChart();
          drawChart2();
       });*/
