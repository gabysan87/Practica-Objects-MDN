// El Object.assign () método estático copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
