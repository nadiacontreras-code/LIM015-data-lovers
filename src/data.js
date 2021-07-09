//FUNCIONALIDAD
//export const example = function sumar(num1, num2) {//RESUMIENDO
export const example = (num1, num2) => {
  let resultado
  resultado = num1 + num2;
  return resultado;
  //console.log("La suma es: "+ resultado)
};


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
let str = "HELLO WORLD";
console.log(str.charCodeAt(0))

export const firstLetter = (parameter) => {
  //charCodeAt() indica valor ACCI (MAYUSCULAS de 65 a 90)
  return parameter.charCodeAt(0);
}



//FUNCION ORDEN ALFABETICO A-Z / Z-A
export const orderAZ = (parameter, dataNadia) => {
  let pokemonOrder;
  pokemonOrder = dataNadia.sort(function (pok1, pok2) {

    return (pok1.name - pok2.name);
  });
  /*if (parameter == "az") {
    pokemonOrder = dataNadia.sort((pok1, pok2) => pok1.name - pok2.name);
  } else {
    pokemonOrder = dataNadia.sort((pok1, pok2) => pok2.name - pok1.name);
  }*/

  //console.log(pokemonOrder);
  for (let key in pokemonOrder) {

    pokemonOrder[key].name
  }
  return pokemonOrder;
}
