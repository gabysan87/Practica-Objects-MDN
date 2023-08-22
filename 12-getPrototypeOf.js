// El Object.getPrototypeOf()método estático devuelve el prototipo (es decir, el valor de la [[Prototype]]propiedad interna) del objeto especificado.

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true



// Object.getPrototypeOf() se usa para obtener la propiedad interna oculta [[Prototype]] de un objeto, también accesible a través de la propiedad __proto__.
const employees = ['Ron', 'April', 'Andy', 'Leslie'];

console.log(Object.getPrototypeOf(employees))
console.log(Object.getPrototypeOf(employees) === Array.prototype)

