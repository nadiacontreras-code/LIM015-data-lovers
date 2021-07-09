//FUNCIONALIDAD
//export const example = function sumar(num1, num2) {//RESUMIENDO
export const example = (num1, num2) => {
  let resultado
  resultado = num1 + num2;
  return resultado;
  //console.log("La suma es: "+ resultado)
};
//FUNCION ORDEN NUMERICO ASCENDENTE/DESCENDENTE
export const numericalOrder = (parameter) => {
  //reverse() invierte el orden de array
  return parameter.reverse();
}

/*PROBANDO SORT()
const dataName = [5, 9, 8]
  export const alphabeticalOrder = () => {
  dataName.sort();
  console.log(dataName);

}*/
/*const dataName = "ma"
const algo = (dataName) => {
  console.log(dataName.charCodeAt())
}*/

//FUNCION ORDEN ALFABETICO A-Z / Z-A
export const orderAz = (choose,pokemonesName) =>{
 /* const pokeOrder = pokemonesName.sort((pok1,pok2)=>{
    return (pok1 < pok2) ? -1 : 1
  })*/
  
  let pokemonOrder ;
  if (choose == "az"){
  pokemonOrder = pokemonesName.sort((pok1,pok2) =>{
    return (pok1.name < pok2.name) ? -1 : 1
    })} else if (choose == "za") {
    pokemonOrder = pokemonesName.sort((pok1,pok2) =>{
        return (pok1.name > pok2.name) ? -1 : 1
    })} else{
      return " "
    }
    console.log(pokemonOrder);
  }



/*export const orderAZ = (parameter, dataNadia) => {
  /*let pokemonOrder;
  pokemonOrder = dataNadia.sort(function (pok1, pok2) {

    return (pok1.name - pok2.name);
  });
  console.log(pok1.name - pok2.name)
  /*if (parameter == "az") {
    pokemonOrder = dataNadia.sort((pok1, pok2) => pok1.name - pok2.name);
  } else {
    pokemonOrder = dataNadia.sort((pok1, pok2) => pok2.name - pok1.name);
  }}*/



 /* console.log(pokemonOrder);
  for (let key in pokemonOrder) {

  //console.log(pokemonOrder[key].name)
  }
  return pokemonOrder;*/

