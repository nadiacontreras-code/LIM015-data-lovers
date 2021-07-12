//FUNCIONALIDAD


//FUNCION ORDEN NUMERICO ASCENDENTE/DESCENDENTE
export const numericalOrder = (selectOrder, dataNumber) => {
  let pokemonNumberOrder;
  if (selectOrder == "lowerNumber") {
    pokemonNumberOrder = dataNumber.sort((pok1, pok2) => {
      return (pok1.num - pok2.num)
    })
  } else if (selectOrder == "topNumber") {
    pokemonNumberOrder = dataNumber.sort((pok1, pok2) => {
      return (pok2.num - pok1.num)
    })
  } else {
    return " ";
  }
  //console.log(pokemonNumberOrder);
  return pokemonNumberOrder;
}


//FUNCION ORDEN ALFABETICO A-Z / Z-A
export const alphabeticalOrder = (selectOrder, dataName) => {

  let pokemonNameOrder;
  if (selectOrder == "az") {
    pokemonNameOrder = dataName.sort((pok1, pok2) => {
      return (pok1.name < pok2.name) ? -1 : 1
    })
  } else if (selectOrder == "za") {
    pokemonNameOrder = dataName.sort((pok1, pok2) => {
      return (pok1.name > pok2.name) ? -1 : 1
    })
  } else {
    return " ";
  }
  //console.log(pokemonNameOrder);
  return pokemonNameOrder;
}
//console.log(pokemonOrder);


//FUNCION FILTRAR POR TIPO  
//TERCER INTENTO
export const typeFilter = (selectType, dataType) => {
  const pokemonTypeFilter = selectType.filter((pok) => {
    pok.type.indexOf(dataType) > -1
  });
  return pokemonTypeFilter;
};

//SEGUNDO INTENTO
/*export const typeFilter = (selectorType, dataType) => {
  let prueba3 = dataType.filter((item) => {
*/
/*for (let i = 0; i < item.type.length; i++) {
  let comparation = item.type[i];
  console.log(comparation);*/
/*if (item.type.indexOf(selectorType) == 0 || item.type.indexOf(selectorType) == 1) {
  return true;
}
return false;
})
console.log(prueba3);
}*/

/*PRIMER INTENTO
export const typeFilter = (selectType, dataType) => {
  let pokemonTypeFilter;
  if (selectType == "poison") {
    pokemonTypeFilter = dataType.filter(pok => {
      pok.type.indexOf(dataType) > -1
      return pok;
    })
  } else {
    return " "
  }
}
*/
//indexOf()método devuelve posición de primera aparición valor especificado
//indexOf() si no coindice devuelve -1
//const pokemonTypeFilter = selectType.filter(pokemon => pokemon.type.indexOf(dataType.toLowerCase()) > -1, );
///return pokemonTypeFilter;
//};
