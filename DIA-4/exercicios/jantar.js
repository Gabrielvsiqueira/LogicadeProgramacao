let estadoDeFome = Boolean(prompt('Você está com fome?'))
let dinheiro = Number(prompt('Quanto você tem de Dinheiro?'))
let estadoRestaurante = Boolean(prompt('O restaurente está aberto?'))

if (estadoDeFome === false || dinheiro <= 0){
    console.log('Hoje a janta será em casa.')
} 
else if (estadoDeFome === true && dinheiro > 0  && estadoRestaurante !== true ){
    console.log('Peça um delivery!')
} 
else {
    console.log('Hoje o jantar será no seu restaurante preferido!')
}