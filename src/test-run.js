const Calculator = require('./calculator');

const calc = new Calculator();

console.log("Suma 5 + 3 =", calc.sum(5, 3));
console.log("Resta 10 - 4 =", calc.sub(10, 4));
console.log("Multiplica 6 * 7 =", calc.mul(6, 7));
console.log("Divide 20 / 5 =", calc.div(20, 5));
console.log("Potencia 2 ^ 4 =", calc.pow(2, 4));
console.log("Raíz sqrt(16) =", calc.sqrt(16));
