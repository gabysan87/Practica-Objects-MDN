// El hasOwnProperty()método de Objectinstancias devuelve un valor booleano que indica si este objeto tiene la propiedad especificada como propiedad propia (en lugar de heredarla).

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false
