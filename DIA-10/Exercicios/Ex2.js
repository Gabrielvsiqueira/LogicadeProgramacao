let contador = Number(prompt("Quantos elementos quer inserir no array?"))
let armazenarNumeros = []
let possicaoArray = 0

for (let i = 0; i < contador; i++){
    let numeros = Number(prompt("Insira um elemento na posicao "))
    armazenarNumeros[possicaoArray] = numeros;

    possicaoArray++
}

armazenarNumeros.reverse()

console.log(armazenarNumeros)