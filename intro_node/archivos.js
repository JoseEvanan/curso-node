const fs = require('fs');

// Leer un archivo (texto.txt)

//archivo = fs.readFileSync('./texto.txt');
//console.log(archivo)

// Leer unarchivo de manera asincrona
/*
var archivo;
fs.readFile('./err.txt',(err, data) => {
  //console.log(data);
  archivo = data;
  console.log(err);
  console.log(archivo)
});

console.log(archivo);
*/

const archivo = fs.createWriteStream('escritura.txt', {
  flags: 'r+',
  start: 4,
});
archivo.write("abcdefg");
archivo.end('--')
