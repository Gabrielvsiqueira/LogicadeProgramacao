let numero = Number(prompt('Insira um valor'))

for(let contador = 0; contador < numero; contador++){
    console.log('Valor:' +contador)
}

for(let contadorCinco = 0; contadorCinco < 50; contadorCinco += 5){
    console.log(+contadorCinco)
}
console.log('================')

for(let contadorCinco = 50; contadorCinco > 0; contadorCinco -= 5){
    console.log(+contadorCinco)
}