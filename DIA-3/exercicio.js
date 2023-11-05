let nome = prompt("Insira seu nome:")
let idade = parseInt(prompt("Insira sua idade:"))
let altura = Number(prompt("Insira sua altura:"))
let peso = Number(prompt("Insira seu peso:"))
let anoDeNascimento = (2023 - idade);
let calcularIMC = (peso / (altura * altura))

console.log(nome)
console.log(idade)
console.log(altura)
console.log(peso)
console.log(anoDeNascimento)
console.log(calcularIMC)

console.log('Olá, '+nome+ ' você tem ' +idade+ ', nasceu em ' +anoDeNascimento+ ' tem ' +altura+ ' de altura, pesa ' +peso+ 'kg seu IMC é gvabriel' +calcularIMC+ 'Kg/m2')