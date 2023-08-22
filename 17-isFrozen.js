// El Object.isFrozen()método estático determina si un objeto está congelado .

const object1 = {
    property1: 42,
  };
  
  console.log(Object.isFrozen(object1));
  // Expected output: false
  
  Object.freeze(object1);
  
  console.log(Object.isFrozen(object1));
  // Expected output: true
  