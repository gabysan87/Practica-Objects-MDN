// Object.entries()método estático devuelve una matriz de pares clave-valor de propiedad enumerables con clave de cadena enumerables de un objeto determinado.

const object1 = {
    a: 'somestring',
    b: 42,
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // Expected output:
  // "a: somestring"
  // "b: 42"