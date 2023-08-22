// El Object.getOwnPropertyDescriptor() método estático devuelve un objeto que describe la configuración de una propiedad específica en un objeto dado (es decir, uno presente directamente en un objeto y no en la cadena de prototipos del objeto). El objeto devuelto es mutable pero mutarlo no tiene efecto en la configuración de la propiedad original.

const object1 = {
    property1: 42,
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
  console.log(descriptor1.configurable);
  // Expected output: true
  
  console.log(descriptor1.value);
  // Expected output: 42