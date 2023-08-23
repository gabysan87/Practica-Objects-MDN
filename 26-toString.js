// El toString() método de Object instancias devuelve una cadena que representa este objeto. Este método está destinado a ser anulado por objetos derivados para la lógica de conversión de tipo personalizado .

function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  
  console.log(dog1.toString());
  // Expected output: "Gabby"