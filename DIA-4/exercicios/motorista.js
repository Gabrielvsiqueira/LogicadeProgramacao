let nome = prompt('Insira seu nome');
let idade = Number(prompt('Insira sua idade'));
let possuiCNH = false;
let possuiCarro = false;

let temCNH = prompt('Possui CNH? (sim/nao)')
if (temCNH === "sim") {
    possuiCNH = true;
}

let temCarro = prompt('Possui Carro? (sim/nao)')
if (temCarro === "sim") {
    possuiCarro = true;
}

if (idade < 18 || !possuiCNH) {
    console.log(nome + ', você não pode dirigir.');
} else if (idade >= 18 && possuiCNH && !possuiCarro) {
    console.log(nome + ', Pode dirigir, mas não tem carro.');
} else if (idade >= 18 && possuiCNH && possuiCarro) {
    console.log(nome + ', você será motorista!');
}