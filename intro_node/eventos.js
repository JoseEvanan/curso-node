const Eventos = require('events');

class Carro extends Eventos{
  constructor(){
    super();
    this.contador = 0;
  }

  Arrancar() {
    console.log("El auto arraca");
    this.emit('arranco', this.contador, 1, 2, 3);
    this.contador += 1;
  }
}

var carro1 = new Carro();
//para escuchar eventos, suscribirnos con el metodo on()
carro1.on('arranco', function(c, a, b, d){
  console.log(c, a, b, d," El evento fue escuchado, y la secuencia ejecutada.")
})

carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
