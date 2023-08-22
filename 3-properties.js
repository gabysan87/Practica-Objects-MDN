// El Object.defineProperties() método estático define propiedades nuevas o modifica las existentes directamente en un objeto, devolviendo el objeto.

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42