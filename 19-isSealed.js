// El Object.isSealed()método estático determina si un objeto está sellado.

const object1 = {
    property1: 42,
  };
  
  console.log(Object.isSealed(object1));
  // Expected output: false
  
  Object.seal(object1);
  
  console.log(Object.isSealed(object1));
  // Expected output: true
  