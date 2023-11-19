let nome = String(prompt("Informe seu nome"));
let idade = parseInt(prompt("Informe sua idade"));
let peso = parseInt(prompt("Informe seu peso"));
let altura = String(prompt("Informe sua altura"));
let profissao = String(prompt("Informe sua profissão"));

console.log(
  "Olá " +
    nome +
    " , você tem " +
    idade +
    " anos, é " +
    profissao +
    " , Tem " +
    altura +
    "M de altura e pesa " +
    peso +
    "kg."
);

if (idade > 18) {
  console.log("Está liberado para tomar umas geladas.");
} else {
  console.log("Sem gelada para você.");
}

let meses = idade * 12;
let semanas = idade * (365 / 7);
let dias = idade * 365;

console.log(
  "Você tem " + meses + " meses " + semanas + " semanas e " + dias + " dias."
);

let IMC = peso / (altura * altura);

switch (IMC) {
  case IMC < 18.5:
    console.log("magreza.");
    break;

  case IMC > 18.5 && IMC < 24.9:
    console.log("Normal.");
    break;

  case IMC <= 24.9 && IMC < 30:
    console.log("Sobrepeso.");
    break;

  case IMC > 30:
    console.log("Obesidade.");
    break;
  default:
    break;
}
