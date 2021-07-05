//DOM
//Importando de data.js
import { example } from './data.js';
import { anotherExample } from './data.js';
//BASE DE DATOS, carpeta DATA
import data from './data/pokemon/pokemon.js';
let pokemonNumber = "";
let pokemonName = "";

data.pokemon.map(function(elem){
  pokemonNumber = elem.num;
  pokemonName = elem.name;
//Extrayendo num, name, img (en base a num)

const sectionName = document.querySelector('section.cards');
const nameSection = document.createElement('p');
sectionName.appendChild(nameSection);
const names = document.createTextNode(pokemonName)
nameSection.appendChild(names)
      
const sectionNumber = document.querySelector('section.cards');
const numberSection = document.createElement('p1');
sectionNumber.appendChild(numberSection);
const number = document.createTextNode(pokemonNumber)
numberSection.appendChild(number)

const sectionPic = document.querySelector('section.cards');
const picSection = document.createElement('section');
sectionPic.appendChild(picSection);
const pic = document.createElement('section');
pic.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
picSection.appendChild(pic)
});
  
let prueba = "auxilio";



/*let pokemonNumber = "";
let pokemonName ="";
//Extrayendo num, name, img (en base a num)
  data.pokemon.map(function(elem){
 

    pokemonNumber = elem.num ;
    pokemonName = elem.name;

    /*const sectionName = document.querySelector('section.allNames');
    const nameSection = document.createElement('section');
    sectionName.appendChild(nameSection);
    const names = document.createTextNode(pokemonName)
    nameSection.appendChild(names);*/
    

  /* let newEl = document.createElement('p');
    let newText = document.createTextNode(pokemonNumber);
    newEl.appendChild(newText);
    let position = document.getElementsByTagName('section')[4];
        position.appendChild(newEl);
    let name = document.createElement('p');
    let nameText = document.createTextNode(pokemonName);
    name.appendChild(nameText);
    let namePosition = document.getElementsByTagName('section')[4];
    namePosition.appendChild(name);
    let image = document.createElement('img');
    let imageText = document.createTextNode(imagePoke)
     let imagePoke = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
    image.appendChild(imageText);
    let imagePosition = document.getElementsByTagName('section')[4];
    imagePosition.appendChild(image);
    
  });*/
  //document.getElementsByClassName('cardNumber').appendChild(number);


  /*let name = document.createElement('section');
  name.innerHTML = pokemonName;
  document.getElementsByClassName('cards').appendChild(name);

  let image = document.createElement('section');
  image.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
  document.getElementsByClassName('cards').appendChild(image);
}); */
/*
  let cards = document.createElement('section');
  cards.innerHTML = `${'<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>'} ${pokemonNumber} ${pokemonName}`;
  document.getElementById('cards').appendChild(cards);
  */
  /*let allNumbers = document.createElement("p");
  allNumbers.innerHTML = pokemonNumber;
  document.getElementById("allNumbers").appendChild(allNumbers);
  let allNames = document.createElement("p");
  allNames.innerHTML = pokemonName;
  document.getElementById("allNames").appendChild(allNames);
  let allPics = document.createElement("p");
  allPics.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
  document.getElementById("allPics").appendChild(allPics);
  //document.getElementById("allPics").class()= "carouselPic";
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
  }//DOM
//Importando de data.js
import { example } from './data.js';
import { anotherExample } from './data.js';
//BASE DE DATOS, carpeta DATA
import data from './data/pokemon/pokemon.js';
let pokemonNumber = "";
let pokemonName = "";
data.pokemon.map(function(elem){
  pokemonNumber = elem.num;
  pokemonName = elem.name;
//Extrayendo num, name, img (en base a num)
      const sectionName = document.querySelector('section.cards');
      const nameSection = document.createElement('p');
      sectionName.appendChild(nameSection);
      const names = document.createTextNode(pokemonName)
      nameSection.appendChild(names)
      const sectionNumber = document.querySelector('section.cards');
      const numberSection = document.createElement('p1');
      sectionNumber.appendChild(numberSection);
      const number = document.createTextNode(pokemonNumber)
      numberSection.appendChild(number)
      const sectionPic = document.querySelector('section.cards');
      const picSection = document.createElement('section');
      sectionPic.appendChild(picSection);
      const pic = document.createElement('section');
      pic.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
      picSection.appendChild(pic)
    });
let prueba = "auxilio";
/*let pokemonNumber = "";
let pokemonName ="";
//Extrayendo num, name, img (en base a num)
  data.pokemon.map(function(elem){
    pokemonNumber = elem.num ;
    pokemonName = elem.name;
    /*const sectionName = document.querySelector('section.allNames');
    const nameSection = document.createElement('section');
    sectionName.appendChild(nameSection);
    const names = document.createTextNode(pokemonName)
    nameSection.appendChild(names);*/
  /* let newEl = document.createElement('p');
    let newText = document.createTextNode(pokemonNumber);
    newEl.appendChild(newText);
    let position = document.getElementsByTagName('section')[4];
        position.appendChild(newEl);
    let name = document.createElement('p');
    let nameText = document.createTextNode(pokemonName);
    name.appendChild(nameText);
    let namePosition = document.getElementsByTagName('section')[4];
    namePosition.appendChild(name);
    let image = document.createElement('img');
    let imageText = document.createTextNode(imagePoke)
     let imagePoke = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
    image.appendChild(imageText);
    let imagePosition = document.getElementsByTagName('section')[4];
    imagePosition.appendChild(image);
  });*/
  //document.getElementsByClassName('cardNumber').appendChild(number);
  /*let name = document.createElement('section');
  name.innerHTML = pokemonName;
  document.getElementsByClassName('cards').appendChild(name);
  let image = document.createElement('section');
  image.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
  document.getElementsByClassName('cards').appendChild(image);
}); */
/*
  let cards = document.createElement('section');
  cards.innerHTML = `${'<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>'} ${pokemonNumber} ${pokemonName}`;
  document.getElementById('cards').appendChild(cards);
  */
  /*let allNumbers = document.createElement("p");
  allNumbers.innerHTML = pokemonNumber;
  document.getElementById("allNumbers").appendChild(allNumbers);
  let allNames = document.createElement("p");
  allNames.innerHTML = pokemonName;
  document.getElementById("allNames").appendChild(allNames);
  let allPics = document.createElement("p");
  allPics.innerHTML = '<img src=\'http://www.serebii.net/pokemongo/pokemon/'+ pokemonNumber+'.png\'>';
  document.getElementById("allPics").appendChild(allPics);
  //document.getElementById("allPics").class()= "carouselPic";
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
