// El Object.getOwnPropertyNames()método estático devuelve una matriz de todas las propiedades (incluidas las propiedades no enumerables, excepto las que usan Símbolo) que se encuentran directamente en un objeto dado.

const object1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  console.log(Object.getOwnPropertyNames(object1));
  // Expected output: Array ["a", "b", "c"]