const fs = require('fs');
const readable = fs.createReadStream("./texto.txt");

//Fragmento de documentacion oficial de API de Node.js (Stream)
readable.on('data', (chunk) => {
  console.log(` Received ${chunk.length} bytes of data`);
  console.log(chunk);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log("Now data will start flowing again.")
    readable.resume();
  }, 1000);
});

readable.on('end', () => {
  console.log("Finalizo la lectura del canal...");
});

readable.on('close',() => {
  console.log("Cerrando canal .....");
});
