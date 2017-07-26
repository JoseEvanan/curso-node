var x = function(a, b) {
  c = a + b;
  return c;
}
//var y = function(a, b) { c= a + b; return c;}

var y = (a, b) => a + b ;
console.log(x(3,4), y(5,6))
