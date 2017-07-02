// Programcion OO (POO)
// ES6 collapse
var Objeto = function() {

 }

Objeto.prototype.Saludar = function(msg, callback){
   console.log("Saludos ", msg)
  if(typeof callback == 'function'){
    callback()
  }else{
    console.log("callback no es una funcion")
  }

 }

//instanciar
var o = new Objeto()
o.Saludar("Hola mundo", function() {
  console.log("callback ejecutado")
})

o.Saludar("hey...", 5)
/*
Objeto.prototype.Despedirse = function() {
  console.log("Adios")
}
o.Despedirse()
*/
