// El Object.seal()método estático sella un objeto. Sellar un objeto evita las extensiones y hace que las propiedades existentes no sean configurables. Un objeto sellado tiene un conjunto fijo de propiedades: no se pueden agregar nuevas propiedades, no se pueden eliminar las propiedades existentes, no se puede cambiar su enumerabilidad y configuración, y su prototipo no se puede reasignar. Los valores de las propiedades existentes aún se pueden cambiar siempre que se puedan escribir. seal()devuelve el mismo objeto que se pasó.

const object1 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // Expected output: 33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);
  // Expected output: 33
  