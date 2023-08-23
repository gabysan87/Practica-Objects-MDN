// El toLocaleString()método de Object instancias devuelve una cadena que representa este objeto. Este método está destinado a ser anulado por objetos derivados para fines específicos de la configuración regional.

const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString('de-DE'));
// Expected output: "123.456,789"
