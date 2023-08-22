// El Object.defineProperty()método estático define una nueva propiedad directamente en un objeto o modifica una propiedad existente en un objeto y devuelve el objeto.


const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 40,
  writable: false,
});

object1.property1 = 80;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42
