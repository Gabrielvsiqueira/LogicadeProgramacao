let nomes = [];
let continuar = true;
let posicaoDoArray = 0;

while (continuar) {
    let nomeUsuario = prompt('Insira um nome:');
    nomes[posicaoDoArray] = nomeUsuario;

    let desejaContinuar = prompt('1- Caso deseje adicionar um novo nome')
    if(desejaContinuar != '1'){
        continuar = false;
        break;
    }
    posicaoDoArray++;
}