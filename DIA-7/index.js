let condicao = true

while (condicao === true) {
    let idade = Number(prompt('insira a sua idade'))
    if (idade <18){
        console.log('voce é menor de idade')
        condicao=false
    } 
}

console.log('acabou o while')