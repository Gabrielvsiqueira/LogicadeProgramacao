let modeloCarro = []
let indexModelo = 0
let anoCarro = []
let indexAno = 0
let valorCarro = []
let indexvalor = 0
let condicao = true

while (condicao) {
    
    let modelo = String(prompt('Informe o modelo do carro: '))
    let ano = Number(prompt("Informe o ano do carro: "))
    let valor = Number(prompt("Informe o valor do carro: "))

    modeloCarro[indexModelo] = modelo
    anoCarro[indexAno] = ano
    valorCarro[indexvalor] = valor

    let opcao = prompt('1 - para deseja continuar cadastrado carros?')
    if (opcao != '1'){
        condicao = false
        break
    }

    indexModelo++
    indexAno++
    indexvalor++
}

console.log("Modelo: " +modeloCarro)
console.log("Ano: " +anoCarro)
console.log("Valor: " +valorCarro)