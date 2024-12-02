let unhaMao = 20.50;
let unhaPe = 25.50;
let qtdadeMao = 65;
let qtdadePe = 41;
let totMao = 0;
let totPe = 0;
let totMaoPe = 0;
let percent = 40;
let adiantamento = 0;
let toReceber = 0;
let salarioMinimo = 1412;
let salarioMeta = 5000;
let meta = 0;
let clienteGeovana = 0;
let clientePaty = 0;
let clienteMel = 0;

totMao = qtdadeMao * unhaMao;
totPe = qtdadePe * unhaPe;
totMaoPe = totMao + totPe;
toReceber = totMaoPe - ((totMaoPe / 100)*percent) - adiantamento;
clienteGeovana = 3 * unhaMao;
clientePaty = (4 * unhaMao) + (2 * unhaPe);
clienteMel =  (5 * unhaMao) + (4 * unhaPe);
meta = toReceber > salarioMeta ? "Alcançou a Meta Salarial.":"Necessário trabalhar mais um pouco.";

console.log("");
console.log("Total mão é R$ " + totMao.toFixed(2));
console.log("Total pé é R$ " + totPe.toFixed(2));
console.log("Total mão e pé é R$ " + totMaoPe.toFixed(2));
console.log("Total a receber é R$ " + toReceber.toFixed(2));
console.log("");

if (toReceber < salarioMinimo){
   console.log("Você recebera um salario menor que o salario minimo.");
} else if (toReceber === salarioMinimo){
   console.log("Você recebera um salario igual salario minimo.");
} else {
   console.log("Você recebera um salario superior salario minimo.");
}

console.log(meta);
console.log("");
console.log("A cliente Geovana pagou " + clienteGeovana.toFixed(2) + " este mês.");
console.log("A cliente Paty pagou " + clientePaty.toFixed(2) + " este mês.");
console.log("A cliente Mel pagou " + clienteMel.toFixed(2) + " este mês.");





