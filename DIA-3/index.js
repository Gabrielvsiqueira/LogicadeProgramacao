/* declaração de variáveis
let, var e const
var =  cria a variável num conxtexto global
let = cria uma variável, mas pode sofrer alteração ao longo do código, podendo ter seu valor
editado ou alterado.
const = valor setado em uma const não pode ser alterado em nenhuma parte do código
*/

let meuNome = "Gabriel Vitor Siqueira";
console.log(meuNome);
meuNome = "So bandido"
console.log(meuNome);

console.log('======= Constante =========');
const a = 'GABRIEL SIQUEIRA';
a = 'GABRIEL VITOR';
console.log(a);

/*
Entrada e saída de dados
quando quero capturar o que um usuário digite, usamos a função prompt()
para tipo numero podemos usar o parseInt(), onde oque for digitado ali dentro vai converter de
texto para inteiro
*/ 

let entradaDoUsuario = prompt("Digite seu nome:");
let entradaUsuarioInt = parseInt(prompt("Digite sua idade: "));
console.log(entradaDoUsuario);
console.log(entradaUsuarioInt);