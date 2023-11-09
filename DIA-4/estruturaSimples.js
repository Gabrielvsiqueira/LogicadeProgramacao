let idade = Number(prompt("Insira sua idade"))
/*
estrutura de decisão if e else
== comparando se dois valores são iguais || < menor que ou <= menor ou igual 
> maior que ou >= maior ou igual // === é igual em valor e tipo || != diferente entre valor e tipo
 */

if(idade <= 10){
    console.log('Você tem menos ou tem 10 anos.')
} else {
    console.log('Você tem mais que 10 anos.')
}

/*
Escopo de variáveis e operador E, OU

Quando a variável é criado de forma global, ela pode ser usada dentro de qualquer tipo de laço
ou função, já quando a variável é criada local ela só existe dentro da função ou do laço, não
sendo possível chamar fora daquele contexto.

E (&&)=  as duas condições que estoui validando precisam ser verdadeiras.
1 === 1 && 3 === 3 TRUE      
1 === 1 && 3 === 4 FALSE

OU (||) = pelo menos uma das condições precisam sre verdadeiras.
1 === 1 || 3 === 4 TRUE    
1 === 1 || 34=== 4 TRUE    
*/

if(idade <= 10){
    console.log(idade)
    let meuNome = 'Gabriel'
    console.log(meuNome)
    console.log('Você tem menos ou tem 10 anos.')
    if(true){
        console.log('Entrou no segundo escopo')
        console.log(meuNome)
    }
} else {
    console.log('Você tem mais que 10 anos.')
}

console.log('Sai do escopo IF')
console.log(meuNome)