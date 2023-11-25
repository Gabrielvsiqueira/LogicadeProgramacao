const arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
const arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];


function AcharValores(arrayUm, arrayDois) {
  let numerosComum = [];
  let contador = 0;

  for (let i = 0; i < arrayUm.length; i++) {
    for (j = 0; j < arrayDois.length; j++) {

        if (arrayUm[i] == arrayDois[j]){
            numerosComum[contador] = arrayUm[i];
            contador++;
           break;
    }
  }

  return numerosComum;
}
}
console.log(AcharValores(arrayA,arrayB))