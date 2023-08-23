// El valueOf() método de Objectinstancias convierte el thisvalor en un objeto . Este método está destinado a ser anulado por objetos derivados para la lógica de conversión de tipo personalizado.

function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function () {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  console.log(object1 + 3);
  // Expected output: 7