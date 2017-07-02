// programacion funcional
 // 1. inmutabilidad - valores

 var a = [1, 2, 3, 4];
 a[0] = 10; // no es funcional

 var b = a.map((x) => x * 2);
 console.log(a, b);

// 2. Funciones como parametros, funciones que regresan Funciones
// - reutilizacion de codigo
var suma = function(a, b) {
  return a + b;
};

var suma2 = function(a){
  return function(b){
      return a + b;
  }
};

var sumar10 = suma2(10)
console.log(suma(2, 2), suma2(2)(3));
console.log(sumar10(7));

var f = function(callback) {
  //ejecucion de una secuencia
  if( typeof callback == 'function')
    return callback()
}

//3. en P.F siempre se debe de regresar un resultado unico
// raiz cuadrada de 4 = 2, = -2 // no  es funcional
