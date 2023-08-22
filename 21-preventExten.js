// El Object.preventExtensions()método estático evita que se agreguen nuevas propiedades a un objeto (es decir, evita futuras extensiones del objeto). También evita que se vuelva a asignar el prototipo del objeto.

const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
