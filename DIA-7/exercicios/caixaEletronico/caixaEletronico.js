let saldo = 1000
let opcaoTransacao
let contador = false

do {
    const nome = String(prompt('Insira seu nome:'))
    const cpf = Number(prompt('Insira seu CPF:'))
    let valor = Number(prompt("Qual valor deseja inserir?"))
    opcaoTransacao = String(prompt('Qual operação quer fazer (D/S)'))

    if (valor < 0){
        console.log("Valor indisponível para tais operações,")
    } else if (opcaoTransacao == "S" && valor > saldo){
        console.log("Valor acima do saldo da conta.")
    } else if (opcaoTransacao == "S"){
        console.log('Olá,' +nome+ ', seu saldo atual é de: ' +saldo)
        saldo -= valor
        console.log('Operação realizada com sucesso, seu saldo atual é de: ' +saldo)
    } else if (opcaoTransacao == 'D'){
        console.log('Olá,' +nome+ ', seu saldo atual é de: ' +saldo)
        saldo += valor
        console.log('Operação realizada com sucesso, seu saldo atual é de: ' +saldo)
    }

    const operacao = prompt("Deseja continuar? 1- Continuar || 2= Parar")
    if(opcao === "1"){
        contador = true
    } else if (opcao === "2"){
        contador = false
    } else {
        console.log("opcao invalida. Programa encerrado.")
        contador = false
    }

} while (contador);

console.log("Saldo final: " +saldo)