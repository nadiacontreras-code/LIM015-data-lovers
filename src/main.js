//DOM
//Importando BASE DE DATOS
import data from './data/pokemon/pokemon.js';
//Importando todas las funciones
import * as dataFunctions from './data.js'; // (*)Importa todo de data.js
//Si hay peoblemas en el test llamar a cada funcion como abajo


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
  }
});


//MOSTRAR POKEMONES EN PANTALLA BIENVENIDA
const allData = data.pokemon;
//Para guardar los items dentro de array
let pokemonsCard = [];
//let pokemonsCard2 = [];
//Para ubicar items dentro de una section
let card = document.querySelector('#card');

//FUNCION para extraer información de base de datos
function showData(itemSearch) {
  // Para limpiar la pagina de las cards
  card.innerHTML = "";
  pokemonsCard = [];
  //pokemonsCard2 = [];

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

    //Creando nodo section (parent) para num, pic, name, type (append)
    const section = document.createElement('section');
    section.className = "pokemonCard";
    section.id = `${itemValue.num}`; //id

    const section2 = document.createElement('section');
    section2.className = "pokemonCardBack"

    //section agrega  num, pic, name, type
    //append: para agregar mas de una característica
    section.append(number, pic, name, type); //*appendChild solo acepta uno
    section2.append(about, size, resistant, weaknesses);

    //Incluimos los items dentro de array
    pokemonsCard.push(section, section2);
    //pokemonsCard2.push(section2);
  });
  //Direccionando items para ubicar en section cards:
  //operador spread (...), genera una LISTA de valores a partir de un array
  card.append(...pokemonsCard)

  /*MOSTRAR INFORMACION ESPICIFICA DE POKEMON SELECCIONADO
  const cardClick = document.querySelectorAll('.pokemonCard');
  cardClick.forEach(elem => {
    elem.addEventListener('click', () => {
      //console.log("Hola")

      document.getElementById("WelcomeToPage").style.display = "none";
      document.getElementById("ExploringPage").style.display = "block";
      document.querySelector(".generalAdvancedSearch").style.display = "none";
      document.querySelector(".sectionButtonInteractionMain").style.display = "none";
      document.querySelector(".buttonReturnPageMain").style.display = "none";
      document.getElementById("displayAllPokemons").style.display = "none";
      //document.querySelectorAll(".pokemonCard").style.display = "none";
      document.getElementById("sectionShowResult").style.display = "block";

      let pokemonsInformation = [];
      let sectionShowResult = document.querySelector('#pokemonChose');

      function showInformation(itemInfo) {
        sectionShowResult.innerHTML = "";
        pokemonsInformation = [];

        let pokemonChoose = itemInfo.forEach(itemValue => {
          //Creando nodos about
          const about = document.createElement('p')
          about.textContent = itemValue.about;
          about.className = "pokemonAbout"; //clase, para dar estilos css
          //Creando nodos size
          const size = document.createElement('p')
          size.textContent = itemValue.size;
          size.className = "pokemonSize"; //clase, para dar estilos css

          //Creando section (parent)
          const section2 = document.createElement('section');
          section2.className = "pokemonCard"


          pokemonsInformation.push(section2);
        });
        sectionShowResult.append(...pokemonsInformation)

        return pokemonChoose
      }
      window.addEventListener('load', showInformation(allData));
    });
  }) //Aqui acaba
*/
  return cardInformation
}
// Para mostrar los cards en la pantalla
window.addEventListener('load', showData(allData)); //allData=data.pokemon



/*PRUEBA 2

function openModal(idCard) {
  document.querySelector('#card').innerHTML =
    `${data.pokemon[Number(idCard)-1].num}
  ${data.pokemon[Number(idCard)-1].name}
  <img class="pokemonPic" src="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[Number(idCard)-1].num}.png"></img>`;
}

function openInfo() {
  document.getElementById("cardSection").addEventListener('click', (e) => {
    const replay = (index) => {
      data.pokemon.find(buscando => {
        buscando.img == index ? openModal(buscando.num) : null
      })
    };
    replay(e.target.getAttribute('src'));
  })
}
openInfo();

//console.log(`${data.pokemon[Number(idCard) - 1].num}`)

*/


/*PRUEBA 1

//console.log(data.pokemon)

const cardClick = document.getElementById('001');
//const cardClick = document.getElementById('001');
//cardClick.forEach(elem => {
//  elem.addEventListener('click', () => {
//console.log("Hola")
cardClick.addEventListener('click', () => {


  document.getElementById("WelcomeToPage").style.display = "none";
  document.getElementById("ExploringPage").style.display = "block";
  document.querySelector(".generalAdvancedSearch").style.display = "none";
  document.querySelector(".sectionButtonInteractionMain").style.display = "none";
  document.querySelector(".buttonReturnPageMain").style.display = "none";
  document.getElementById("displayAllPokemons").style.display = "none";
  //document.querySelectorAll(".pokemonCard").style.display = "none";
  document.getElementById("sectionShowResult").style.display = "block";

  document.getElementById("001").style.display = "block";

  //document.querySelector(".pokemonCard").style.display = "block";
  // console.log(`${allData.num}`)


  /*
              let pokemonsInformation = [];
              let sectionShowResult = document.querySelector('#pokemonChose');

              function showInformation(itemInfo) {
                sectionShowResult.innerHTML = "";
                pokemonsInformation = [];

                let pokemonChoose = itemInfo.forEach(itemValue => {
                  //Creando nodos about
                  const about = document.createElement('p')
                  about.textContent = itemValue.about;
                  about.className = "pokemonAbout"; //clase, para dar estilos css
                  //Creando nodos size
                  const size = document.createElement('p')
                  size.textContent = itemValue.size;
                  size.className = "pokemonSize"; //clase, para dar estilos css

                  //Creando section (parent)
                  const section2 = document.createElement('section');
                  section2.className = "pokemonCard"


                  pokemonsInformation.push(section2);
                });
                sectionShowResult.append(...pokemonsInformation)

                return pokemonChoose
              }
              window.addEventListener('load', showInformation(allData));

});

//})

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
