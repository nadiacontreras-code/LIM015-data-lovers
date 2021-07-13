import {
  //example,
  search,
  numericalOrder,
  alphabeticalOrder,
  typeFilter
} from '../src/data.js';

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

  it('returns `pikachu`', () => {
    expect(search("pikachu", "pikachu")).toBe("pikachu");
  });
});


describe('numericalOrder', () => {
  it('is a function', () => {
    expect(typeof numericalOrder).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(numericalOrder()).toBe(' ');
  });
});

describe('alphabeticalOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticalOrder).toBe('function');
  });

  it('returns -1', () => {
    expect(alphabeticalOrder()).toBe();
  });
});

describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(typeFilter()).toBe(' ');
  });
});
