// El Object.setPrototypeOf()método estático establece el prototipo (es decir, la [[Prototype]]propiedad interna) de un objeto específico a otro objeto o null.

const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"