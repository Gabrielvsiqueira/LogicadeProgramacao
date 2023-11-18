let mediaGeralAlunos = 0
let maiorNotaHomens = 0
let quantidadeTotalHomens = 0
let quantidadeTotalMulheresAcimaDe7 = 0
let sexo
let notas = 0
let contador = 1

while (contador <= 4) {
    notas = Number(prompt('Informe a nota do ' + contador + 'º aluno'))
    sexo = String(prompt('Qual é seu sexo? (m/f)'))

    if (sexo === 'm') {
        if (notas > maiorNotaHomens) {
            maiorNotaHomens = notas
        }
        quantidadeTotalHomens++
    }

    if (sexo === 'f' && notas > 7) {
        quantidadeTotalMulheresAcimaDe7++
    }

    mediaGeralAlunos += notas
    contador++
}

console.log('Média geral dos alunos: ' + mediaGeralAlunos / 4)
console.log('Quantos homens enviaram as notas: ' + quantidadeTotalHomens)
console.log('Quantas mulheres tiveram nota acima de 7: ' + quantidadeTotalMulheresAcimaDe7)
console.log('Qual a maior nota entre os homens: ' + maiorNotaHomens)

