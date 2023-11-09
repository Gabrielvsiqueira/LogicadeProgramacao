let escolha = true
let valorAbastecido = Number

escolha = prompt("Abastecer com Gasolina, Alcool, Calibrar Pneu? (G/A/C)")

switch (escolha){
    case "G":
        valorAbastecido = prompt('Quantos Litros deseja colocar?')
        valorLitro = 5
        valorLitro = (valorAbastecido * 5)
        console.log('Voce abasteceu ' +valorLitro+ ' R$ de Gasolina')
        break;

    case "A":
        valorAbastecido = prompt('Quantos Litros deseja colocar?')
        valorLitro = 3
        valorLitro = (valorAbastecido * 3)
        console.log('Voce abasteceu ' +valorLitro+ ' R$ de Alcool')
        break;

    case "C":
        console.log('Pneus calibrados com sucesso.')
        break;

    default:
        console.log('Opcao invaláida, não aceita no posto de gasolina.')
}