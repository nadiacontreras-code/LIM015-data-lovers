//DOM
//Importando BASE DE DATOS
<<<<<<< HEAD
import data from './data/pokemon/pokemon.js'; // Comentado para usar pokemon.json (FETCH)
//import data from './data/pokemon/pokemon.js'; //comentado para FETCH
=======
//import data from './data/pokemon/pokemon.js'; // Comentado para usar pokemon.json (FETCH)

>>>>>>> upstream/main
//Importando todas las funciones
import * as dataFunctions from './data.js'; // (*)Importa todo de data.js


<<<<<<< HEAD
// HERRAMIENTA O MECANISMO??? FETCH: Usando API pokemon.json
/*let allData = "";
=======
//HERRAMIENTA FETCH: Usando API pokemon.json
let allData = "";
>>>>>>> upstream/main
fetch('data/pokemon/pokemon.json', {})
  .then(pokemon => {
    return pokemon.json();
  })
  .then(data => {
    allData = data.pokemon;
    //console.log(allData);
    return showData(allData);
  });
*/

//BUSQUEDA GENERAL POKEMONES (ingresando nombre o número)

let searchingPokemon;
const buttonGeneralSearch = document.getElementById('buttonGeneralSearch');
buttonGeneralSearch.addEventListener('click', () => {
  const inputGeneralSearch = document.getElementById("inputGeneralSearch").value;
  searchingPokemon = inputGeneralSearch.toLowerCase();

  if (inputGeneralSearch == "") {
    alert("Please write a Pokemon number or name");
  } else if (inputGeneralSearch > 251 || inputGeneralSearch < 1) {
    alert("Please write a number between 001 to 251");
  } else {
    const pokemonResult = dataFunctions.search(allData, searchingPokemon);
    showData(pokemonResult);

    document.getElementById("WelcomeToPage").style.display = "none";
    document.getElementById("ExploringPage").style.display = "block";
  }
});

//MOSTRAR POKEMONES EN PANTALLA BIENVENIDA
const allData = data.pokemon; //comentado para FETCH
//console.log(allData);
//Para guardar los items dentro de array
let pokemonsCard = [];

//Para ubicar items dentro de una section
const card = document.querySelector('#card');

//FUNCION para extraer información de base de datos
function showData(itemSearch) {
  // Para limpiar la página de las cards
  card.innerHTML = "";
  pokemonsCard = [];

  // Extrayendo información de Num, Img, Name,Type... independiente
  let cardInformation = [];
  itemSearch.forEach(itemValue => {
    //Creando nodos numero
    const number = document.createElement('p');
    number.textContent = itemValue.num;
    number.className = "pokemonNumber"; //clase, para dar estilos css
    //Creando nodos imagen
    const pic = document.createElement('img');
    pic.src = itemValue.img; //src: source (link)
    pic.className = "pokemonPic";
    pic.id = "pokemonPic";
    //Creando nodos nombre
    const name = document.createElement('p');
    name.textContent = itemValue.name.toUpperCase();
    name.className = "pokemonName";
    //Creando nodos type
    const type = document.createElement('p');
    type.innerHTML = eachType(itemValue.type);
    type.className = "pokemonType";
    //Creando nodos about
    const about = document.createElement('p');
    about.textContent = `About: ${itemValue.about}`;
    about.className = "pokemonAbout";
    //Creando nodos size
    const size = document.createElement('p');
    size.textContent = `Height: ${itemValue.size['height']} 
    Weight: ${itemValue.size['weight']}`;
    size.className = "pokemonSize";
    //Creando nodos resistant
    const resistant = document.createElement('p');
    resistant.textContent = `Resistant: ${itemValue.resistant}`;
    resistant.className = "pokemonResistant";
    //Creando nodos weaknesses
    const weaknesses = document.createElement('p');
    weaknesses.textContent = `Weaknesses: ${itemValue.weaknesses}`;
    weaknesses.className = "pokemonWeaknesses";
    //Creando nodos rarity
    const rarity = document.createElement('p');
    rarity.textContent = `Rarity: ${itemValue.rarity}`;
    rarity.className = "pokemonRarity";
<<<<<<< HEAD
   
    //Creando nodo section (parent) para num, pic, name, type (append)
=======

    //Creando nodo sections (parent) para num, pic, name, type... (append)
    //Front cards
>>>>>>> upstream/main
    const section = document.createElement('section');
    section.className = "pokemonCard";
    section.id = `${itemValue.num}`; //id
    //Back cards
    const section2 = document.createElement('section');
    section2.className = "pokemonCardBack";
<<<<<<< HEAD

=======
>>>>>>> upstream/main

    //section agrega  num, pic, name, type... etc
    //append: para agregar mas de una característica
    section.append(number, pic, name, type); //*appendChild solo acepta uno a la vez
    section2.append(about, size, resistant, weaknesses, rarity);

    //Incluimos los items dentro de array
    pokemonsCard.push(section, section2);

  });
  //Direccionando items para ubicar en section cards:
  //operador spread (...), genera una LISTA de valores a partir de un array
  card.append(...pokemonsCard);

  return cardInformation;
<<<<<<< HEAD
  
}
=======
}
// Para mostrar los cards en la pantalla
//Evento load
//window.addEventListener('load', showData(allData)); //comentado para FETCH
>>>>>>> upstream/main

// Para mostrar los cards en la pantalla
//Evento load
window.addEventListener('load', showData(allData)); //comentado para FETCH
//console.log(pokemonsCard);


//ORDEN NUMERICO ASCENDENTE/DESCENDENTE
/*import {
  numericalOrder
} from './data.js';
*/
const orderByNumber = document.getElementById('orderByNumber');
orderByNumber.addEventListener('change', () => {
  const numberOrderSelect = orderByNumber.value;
  const dataOrderNumber = dataFunctions.numericalOrder(numberOrderSelect, allData);
  showData(dataOrderNumber);
});


//ORDEN ALFABETICO A-Z/Z-A
const orderByName = document.getElementById("orderByName");
orderByName.addEventListener("change", () => {
  const nameOrderSelect = orderByName.value;
  const dataOrderName = dataFunctions.alphabeticalOrder(nameOrderSelect, allData);
  showData(dataOrderName);
});

//FUNCION PARA EXTRAER CADA TIPO POR SEPARADO
function eachType(elem) {
  let createType = "";
  elem.forEach((newElem) => {
    //span: contenedor en línea, para marcar parte de texto o doc
    //notación $ {}, para inyectar expresiones dentro de cualquier string
    createType += `<span class="eachPokemonType ${newElem}"> ${newElem} </span>`;
  });
  return createType;
}

//FILTRAR POR TIPO
const filterByType = document.getElementById("orderByType");
filterByType.addEventListener("change", () => {
  const typeFilterSelect = filterByType.value;
  const dataFilterType = dataFunctions.typeFilter(typeFilterSelect, allData);
  showData(dataFilterType);
  //console.log(dataFilterType)
});

//FILTRAR POR RAREZA
const filterByRarity = document.getElementById("orderByRarity");
filterByRarity.addEventListener("change", () => {
  const rarityFilterSelect = filterByRarity.value;
  const dataFilterRarity = dataFunctions.rarityFilter(rarityFilterSelect, allData);
  showData(dataFilterRarity);
});


//------- SECTION STATISTICS, MOSTRANDO PORCENTAJE --------

const statistics = document.querySelector(".statisticsPage");
statistics.addEventListener('click', () => {
  document.getElementById("WelcomeToPage").style.display = "none";
  document.getElementById("ExploringPage").style.display = "block";
  document.querySelector(".sectionGeneralSearch").style.display = "none";
  document.querySelector(".generalAdvancedSearch").style.display = "none";
  document.querySelector(".buttonReturnPageMain").style.display = "block";
  document.getElementById("displayAllPokemons").style.display = "none";
  document.getElementById("sectionGeneralStats").style.display = "block";

  //PORCENTAJE DE POKEMONES POR TIPO
<<<<<<< HEAD

  let waterStatistics;
  waterStatistics = dataFunctions.getTypeStats(allData, 'water');
  //console.log(waterStatistics);
=======
  const waterStatistics = dataFunctions.getTypeStats(allData, 'water');
>>>>>>> upstream/main
  document.getElementById('typeTop').innerHTML =
    "Most of the Pokemons are of the water type, which represents " +
    waterStatistics + "% of all Pokemons.";

  const dragonStatistics = dataFunctions.getTypeStats(allData, 'dragon');
  document.getElementById('typeBottom').innerHTML =
    "The ghost, metal, and dragon types are the least numerous of all, representing " +
    dragonStatistics + "% of all Pokemons.";

  //Select de tipos para %
  const statsByType = document.getElementById("statsByType");
  statsByType.addEventListener("change", () => {
    const valueType = statsByType.value;
    const showTypeStats = dataFunctions.getTypeStats(allData, valueType);
<<<<<<< HEAD

    //console.log(showTypeStats);
    
=======
>>>>>>> upstream/main
    const statisticsTypeResults = document.querySelector(".statisticsTypeResults");
    statisticsTypeResults.innerHTML = " represents " + showTypeStats + "% of all pokemons.";
  });

  //PORCENTAJE DE POKEMONES POR RAREZA
  //let legendaryStatistics;
  //let mythicStatistics;
  const legendaryStatistics = dataFunctions.getRarityStats(allData, 'legendary');
  document.getElementById('rarity1').innerHTML = legendaryStatistics +
    "% of Pokemons are Legendary?";
  const mythicStatistics = dataFunctions.getRarityStats(allData, 'mythic');
  document.getElementById('rarity2').innerHTML = "and only " + mythicStatistics +
    "% of Pokemons are mythical?";
});
/*function showData2 (item, valor){
  let prueba5=[];
let pokemonDos=[];
item.map((item2)=>{
  pokemonDos.push(item2.num);
  return pokemonDos
  
})
console.log(pokemonDos);
 prueba5 = parseInt(pokemonDos[valor-1]);
return prueba5;
}
//console.log(prueba5);
console.log(showData2(allData,6));*/

let pruebaStatsAttack =dataFunctions.getStatsAttack(allData, 5 );
//console.log(showData2(pruebaStats));
//console.log(pruebaStatsAttack);

let pruebaStatsDefense =dataFunctions.getStatsDefense(allData, 5 );
//console.log(pruebaStatsDefense);
let pruebaStatStamina =dataFunctions.getStatStamina(allData, 5 );
//console.log(pruebaStatStamina);


//*****Deshabilitando slint, DESDE AQUI
/* eslint-disable */

google.charts.load('current', {
  packages: ['corechart']
});

//PRIMER GRAFICO %rareza
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
  async function obtInfo() {
    const info = await fetch('data/pokemon/pokemon.json');
    const allDataX = await info.json();
    const allData2 = allDataX.pokemon;

    const array = [];
    array.push(['Rarity', 'Valor']);
    array.push(
      ['Legendary', Number(dataFunctions.getRarityStats(allData2, 'legendary'))],
      ['Mythic', Number(dataFunctions.getRarityStats(allData2, 'mythic'))],
      ['Normal', Number(dataFunctions.getRarityStats(allData2, 'normal'))],
    );
    return array;
  }

  const json = await obtInfo();
  //console.log(json)
  const data = google.visualization.arrayToDataTable(json);
  console.log(data);
  const options = {
    title: 'Pokemons Rarity',
    is3D: true,
    backgroundColor: '#E4E4E4',
  };

  const chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

//SEGUNDO GRAFICO %tipo agua
google.charts.setOnLoadCallback(drawChart2);

async function drawChart2() {
  async function obtInfo() {
    const info = await fetch('data/pokemon/pokemon.json');
    const allDataX = await info.json();
    const allData2 = allDataX.pokemon;
    const array = [];
    array.push(['Type', 'Valor']);
    array.push(
      ['water', Number(dataFunctions.getTypeStats(allData, 'water'))],
      ['others', 100 - Number(dataFunctions.getTypeStats(allData, 'water'))],
    );
    return array;
  };

  const json = await obtInfo();
  //console.log(json)
  const data = google.visualization.arrayToDataTable(json);
  console.log(data);
  const options = {
    title: 'Pokemons Type water',
    is3D: true,
    backgroundColor: '#E4E4E4',
  };

  const chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
  chart.draw(data, options);
};

<<<<<<< HEAD
//------------- INTENTO DE MOSTRAR GRAFICO -------------//

  //PROBANDO GRAFICOS //


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawRightY);

function drawRightY() {
      var data = google.visualization.arrayToDataTable([
                ['Pokemon', 'Stats'],
                ['base-attack', Number(pruebaStatsAttack) ],
                ['base-defense', Number(pruebaStatsDefense)],
                ['base-stamina', Number(pruebaStatStamina)],
   
      ]);

      var materialOptions = {
        chart: {
          title: 'Pokemon Stats',
          subtitle: 'Based on Pokemon Go',
          high: 900
        },
        hAxis: {
          title: 'Pokemon Stats',
          minValue: 200,
        },
        vAxis: {
          title: 'Stat'
        },
        bars: 'vertical',
        axes: {
          y: {
            0: {side: 'top'}
          }
        }
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);
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
=======
//Habilitando slint, DESDE AQUI
>>>>>>> upstream/main
/* eslint-enable */
