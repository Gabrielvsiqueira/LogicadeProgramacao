let arrayNumeros = [1,2,3,4];

/* vai olhar o array e retornar o index da posição do valor escolhido dentro da função.*/
arrayNumeros.indexOf(1);

/*  vai inserir um elemento dentro do array, nesse caso ele vai inserir o numero 5
ultima posição do array, não precisamos mais se preocupar em procurar o ultimo indice*/
arrayNumeros.push(5);

/*vai retornar valores booleanos (true ou false), se o número em questão existir dentro 
do array, retorna true. Se não, false. */
arrayNumeros.includes(3);

/*vai remover um elemento do array. Passando primeiro o index do local que ele vai começar
a olhar, e em segundo a quantiade de valores que deseja que seja splice(cortado).*/
arrayNumeros.splice(1,1);

/*é uma maneira de percorrer cada elemento da lista(array) e executar uma função para cada
item do array. (não vai precisar de um loop for)*/
arrayNumeros.forEach(numero  => {console.log(numero)});

/* vai retornar todos os elementos que satisfaçam as condições impostas dentro do filter*/
arrayNumeros.filter(x => x > 2);

/*é usada para ordenar os elementos de uma array em ordem alfabética ou numérica, dependendo
do contexto*/
arrayNumeros.sort();
