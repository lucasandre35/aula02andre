
const input = require("readline-sync");

console.log("== Calculadora simples. ==")
const  x  = Number(input.question("digite qualquer numero! "))
const y = Number(input.question("digite outro numero! "))
var z = (x + y);

let contador = 0;

while (contador < 0){
    console.log (' repetição n ' + contador);
    contador ++ 
} 

if ( z % 2 == 0){
    console.log("O resultado é par", z)
    

} else if ( z % 2 == 1){
    console.log("O resultado é ímpar", z)

}
else {
    console.log(" invalido")
}





