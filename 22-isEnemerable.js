// El propertyIsEnumerable()método de Object instancias devuelve un valor booleano que indica si la propiedad especificada es la propiedad propia enumerable de este objeto.

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));
// Expected output: true

console.log(array1.propertyIsEnumerable(0));
// Expected output: true

console.log(array1.propertyIsEnumerable('length'));
// Expected output: false
