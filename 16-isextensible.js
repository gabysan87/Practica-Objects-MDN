// El Object.isExtensible()método estático determina si un objeto es extensible (si se le pueden agregar nuevas propiedades).


const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false
