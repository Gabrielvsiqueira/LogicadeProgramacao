let num1 = Number(prompt('Insira seu 1 valor'))
let num2 = Number(prompt('Insira seu 2 valor'))
let valor = null
let operacao = true

operacao =prompt('1-Adicao || 2-Subtracao || 3-Multiplicacao || 4-Divisao')

switch(operacao){
    case "1":
        valor = num1 + num2
        console.log('Valor da adição é: ' +valor)
    break;
    case "2":
        valor = num1 - num2
        console.log('Valor da subtração é: ' +valor)
    break;
    case "3":
        valor = num1 * num2
        console.log('Valor da multiplicação é: ' +valor)
    break;
    case "4":
        valor = num1 / num2
        console.log('Valor da divisão é: ' +valor)
    break;

    default:
        console.log('Operacao não existe.')
}