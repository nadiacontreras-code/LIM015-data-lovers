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

export const typeFilter = (selectorType, dataType) => {
 
  let pokemonTypeFilter  = dataType.filter((pok) => {
//indexOf()método devuelve posición de primera aparición valor especificado
//indexOf() si no coindice devuelve -1
      if( pok.type.indexOf(selectorType) > -1 ){
        return true; 
      }
    return false;
  });
  return pokemonTypeFilter;
 // console.log(pokemonTypeFilter);
}



