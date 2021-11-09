const input = require("readline-sync");

console.log("== hey! bem vindo. ==")
const idade = input.question("qual sua idade")

if (idade >=18 && idade <21) {
    console.log("autorizado, porem não consumir bebida")
} else if (idade >=21) {console.log("autorizou geral pirraia!")

} else {
    console.log("não autorizado pirraia, menor de idade!")
};
