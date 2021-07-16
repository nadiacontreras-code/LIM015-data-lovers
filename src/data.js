//FUNCIONALIDAD

//BUSCAR POR NAME  O NUM
export const search = (data, searchValue) => {
  const resultOfSearch = data.filter((pok) => {

    if (pok.name.startsWith(searchValue) || pok.num.startsWith(searchValue)) {
      return true;
    }
    return false;
  });
  return resultOfSearch;
  //console.log(prueba)
};


/*SACAR INFORMACION
export const information = (dataPok) => {

}
*/

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
  }
  //console.log(pokemonNumberOrder);
  return pokemonNumberOrder;
}


//FUNCION ORDEN ALFABETICO A-Z / Z-A
export const alphabeticalOrder = (selectOrder, dataName) => {

  let pokemonNameOrder;
  /*switch (selectOrder ) {
    case "za":
      dataName.sort((pok1, pok2) => {
      return (pok1.name > pok2.name) ? -1 : 1
    })
   break;
    case "az":
      dataName.sort((pok1, pok2) => {
      return (pok1.name < pok2.name) ? -1 : 1
    })
  break; }
  return true }*/
  if (selectOrder == "az") {
    pokemonNameOrder = dataName.sort((pok1, pok2) => {
      return (pok1.name < pok2.name) ? -1 : 1
    })
  } else if (selectOrder == "za") {
    pokemonNameOrder = dataName.sort((pok1, pok2) => {
      return (pok1.name > pok2.name) ? -1 : 1
    })
  }
  //console.log(pokemonNameOrder);
  return pokemonNameOrder;
}
//console.log(pokemonOrder);


//FUNCION FILTRAR POR TIPO
export const typeFilter = (selectorType, dataType) => {
  const pokemonTypeFilter = dataType.filter((pok) => {
    //indexOf()método devuelve posición de primera aparición valor especificado
    //indexOf() si no coindice devuelve -1
    if (pok.type.indexOf(selectorType) > -1) {
      return true;
    }
    return false;
  });
  return pokemonTypeFilter;
  //console.log(pokemonTypeFilter);
}

//FUNCION FILTRAR POR RAREZA
export const rarityFilter = (selectorRarity, dataRarity) => {
  const pokemonRarityFilter = dataRarity.filter((pok) => {
    //indexOf()método devuelve posición de primera aparición valor especificado
    //indexOf() si no coindice devuelve -1
    if (pok.rarity.indexOf(selectorRarity) > -1) {
      return true;
    }
    return false;
  });
  return pokemonRarityFilter;
  //console.log(pokemonTypeFilter);
}

//CONTAR POKEMONES POR RAREZA %
/*export const countRarity = (rarityToCount, dataRarity) => {

  //const countTotal = dataRarity.lenght;
  //console.log(countTotal)
  let raritySum = 0;
  let total;
  for (let i = 0; i <= 251; i++) {
    if (dataRarity[i].rarity == rarityToCount) {
      console.log(dataRarity[i].rarity)
      raritySum++;
      console.log(raritySum);
    }
  }
  /*dataRarity.map(el => {
      if (el === rarityToCount) {
        raritySum = raritySum + 1;
        console.log(raritySum)
      }
  */
/*total = (raritySum / 251) * 100;
  return total;
}
*/

//CONTAR POKEMONES POR RAREZA %
/*export const countRarity = (data, value) => {
  let porcentaje = "";
  let point = 0;
  data.forEach((item) => {
    item.rarity;
    item.rarity.forEach((individual) => {
      individual
      if (individual === value) {
        point += 1
        porcentaje = ((point / data.length) * 100).toFixed(2);
      }
    })
  })
  return porcentaje;
  //console.log(porcentaje);
}
*/
