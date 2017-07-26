var https = require('https')

//opciones
var opciones = {
  port:443,
  hostname:"google.com",
  method:"get",
  path:"https://www.google.com/search?q=peru"
};
var req = https.request(opciones,(respuesta) => {
  //al 'repuesta' es una CANAL de lectura
  respuesta.on('data', (chunk) => {
    console.log(chunk.toString());
  });
  respuesta.on('end', () => {
    console.log(respuesta.headers)
  });
});
req.end();//lanza la comunicacion en el request
console.log("peticion lanzada")
