// El Object.hasOwn()método estático regresa true si el objeto especificado tiene la propiedad indicada como propiedad propia . Si la propiedad se hereda o no existe, el método devuelve false.

const object1 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object1, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object1, 'toString'));
  // Expected output: false
  
  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
  // Expected output: false
  
  