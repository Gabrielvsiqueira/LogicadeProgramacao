//exemplo de função sem retorno
function somar(num1, num2) {
    console.log(num1 + num2)
    console.log('estou na funcao somar')
}
somar(1, 3)

//exemplo de uma funcao com return
function retornoSomar(num3, num4) {
    return num3 + num4
}
let resultado = retornoSomar(1, 6)

// fazendo exemplo pegando o dado que o usuário digitou e escrevendo na tela
let num6 = Number(prompt('Informe valor para o numero:'))
let num7 = Number(prompt('Informe valor para o numero:'))

function pegarPrompt(num8, num9) {
    let pegar = (num8 + num9)
    return pegar
}
let result = pegarPrompt(num6, num7)
console.log('Resultado da soma é: ' +result)