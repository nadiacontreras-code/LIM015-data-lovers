import {
  //example,
  search,
  numericalOrder,
  alphabeticalOrder,
  typeFilter,
  rarityFilter,
  getTypeStats,
  getRarityStats
} from '../src/data.js';
//Importando BASE DE DATOS
import data from '../src/data/pokemon/pokemon.js';
/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
*/
describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('search number or name writting', () => {
    //(data, searchValue)
    const searchTest = search(data.pokemon, "pikachu");
    //Método .toBe verifica identidad referencial expect
    expect(searchTest[0].num).toBe("025");
    expect(searchTest[0].name).toBe("pikachu");
  });
});
describe('numericalOrder', () => {
  it('is a function', () => {
    expect(typeof numericalOrder).toBe('function');
  });
  it('sort by lower number', () => {
    //(selectOrder, dataNumber)
    const numericalTest = numericalOrder("lowerNumber", data.pokemon);
    //al ordenar [0] es primero por default: 001
    expect(numericalTest[0].num).toBe('001');
  });
  it('sort by top number', () => {
    //(selectOrder, dataNumber)
    const numericalTest = numericalOrder("topNumber", data.pokemon);
    //al ordenar [0] cambia por el último: 251
    expect(numericalTest[0].num).toBe('251');
  });
});
describe('alphabeticalOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticalOrder).toBe('function');
  });
  it('sort by `az`', () => {
    //(selectOrder, dataName)
    const alphabeticalTest = alphabeticalOrder("az", data.pokemon);
    //al ordenar [0] cambia por primero de letra A
    expect(alphabeticalTest[0].name).toBe('abra');
  });
  it('sort by `za`', () => {
    //(selectOrder, dataName)
    const alphabeticalTest = alphabeticalOrder("za", data.pokemon);
    //al ordenar [0] cambia por primero de letra Z
    expect(alphabeticalTest[0].name).toBe('zubat');
  });
});
describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });

  it('filter by type chosen', () => {
    //(selectorType, dataType)
    const filterTest = typeFilter("rock", data.pokemon);
    //[] numero de cards-1 de un tipo
    //Mét. .not.toHaveLength(number), verifica que NO tenga tamaño de Array expect
    expect(filterTest[17].type).not.toHaveLength(3);
  })
});

describe('rarityFilter', () => {
  it('is a function', () => {
    expect(typeof rarityFilter).toBe('function');
  });

  it('filter by rarity chosen', () => {
    //(selectorRarity, dataRarity)
    const filterTest = rarityFilter("legendary", data.pokemon);
    //[] numero de cards-1 de una rareza
    //Método .toHaveLength(number), verifica longitud de String expect
    expect(filterTest[8].rarity).toHaveLength(9);

  })
});
describe('getTypeStats', () => {
  it('is a function', () => {
    expect(typeof getTypeStats).toBe('function');
  });
  it('get percents by type', () => {
    const getStats = getTypeStats(data.pokemon, "water");
    //toBe, espera un valor expect
    expect(getStats).toBe('19.92')

  })
});

describe('getRarityStats ', () => {
  it('is a function', () => {
    expect(typeof getRarityStats).toBe('function');
  });
  it('get percents by rarity', () => {
    const getStats = getRarityStats(data.pokemon, "legendary");
    //toBe, espera un valor expect
    expect(getStats).toBe('3.59')
  })
});
