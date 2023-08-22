// El Object.getOwnPropertyDescriptors()método estático devuelve todos los descriptores de propiedad propios de un objeto dado.


const object1 = {
    property1: 42,
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);
  
  console.log(descriptors1.property1.writable);
  // Expected output: true
  
  console.log(descriptors1.property1.value);
  // Expected output: 42
  