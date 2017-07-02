var Cliente = require("./cliente.js");

var clienteGitHub = new Cliente("api.github.com", "443", "https");

console.log(clienteGitHub);

clienteGitHub.autenticarBasic("JoseEvanan", "maucaylle2017");
// autenticar nuestro cliente ...
/*
clienteGitHub.get("/users/JoseEvanan", (respuesta) => {
  console.log(respuesta);
});
*/

clienteGitHub.post("/repos/JoseEvanan/sgmr/issues/1/comments", {
  "body": "esta es una prueba"
}, (respuesta) => console.log(respuesta));
