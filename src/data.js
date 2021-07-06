//FUNCIONALIDAD
//export const example = function sumar(num1, num2) {//RESUMIENDO
export const example = (num1, num2) => {
  let resultado
  resultado = num1 + num2;
  return resultado;
  //console.log("La suma es: "+ resultado)
};
export const filterType = (data, typeChoose) => {
  const typeOfPokemon = data.filter(
    pokemon => pokemon.type.indexOf(typeChoose.toLowerCase()) > -1,
  )
  return typeOfPokemon;
};
/*
const filterByGeneration = (data, valor) => {
  const filterPokemonByGeneration = data.filter(
    pokemon => pokemon.generation.name === valor,
  );
  return filterPokemonByGeneration;
};
*/
/*
export const example = () => {
 })
 return pokemonNumber;
}
export const anotherExample = () => {
  return 'OMG';
};
//const datas = data;
export const pokemon = () => {
  //const description = datas.filter(datas => datas == data.name);
  //return description;
  const datas = pokemon.filter(callback(1));
  return datas;
};
*/
