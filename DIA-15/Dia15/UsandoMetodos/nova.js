const arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
const arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function AcharElementos(array1, array2) {
  /*Método filter vai criar um novo array que vai conter todos os elementos presentes no
    array A e B. Com isso o método include vai incluir os elementos do array B dentro desse
    novo array.*/
  const elementosComum = array1.filter((elemento) => array2.includes(elemento));

  const removerDuplicados = [new Set(elementosComum)];
  /* metodo Set não permite valores duplicados, somente únicos. Por isso vai filtrar todos os
    valores em comum dos arrays A e B e deixar somente aqueles que não são repetidos.*/

  return removerDuplicados;
}
console.log(AcharElementos(arrayA, arrayB));
