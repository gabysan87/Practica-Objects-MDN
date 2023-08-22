// El Object.freeze()método estático congela un objeto. Congelar un objeto evita las extensiones y hace que las propiedades existentes no se puedan escribir ni configurar. Un objeto congelado ya no se puede cambiar: no se pueden agregar nuevas propiedades, las propiedades existentes no se pueden eliminar, su enumerabilidad, configuración, escritura o valor no se pueden cambiar, y el prototipo del objeto no se puede reasignar. freeze()devuelve el mismo objeto que se pasó.

const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42

