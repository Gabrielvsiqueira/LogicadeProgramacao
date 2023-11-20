let recebeAluno = [];
let indexAlunos = 0;
let recebeNotas = [];
let indexNotas = 0;
let condicao = true;

do {
  let aluno = String(prompt("Informe o nome do aluno: "));
  let nota = Number(prompt("Informe a nota do aluno: "));

  recebeAluno[indexAlunos] = aluno;
  recebeNotas[indexNotas] = nota;

  let opcaoParar = prompt("1 - Se deseja continuar inserindo");
  if (opcaoParar != "1") {
    condicao = false;
    break;
  }
  indexAlunos++;
  indexNotas++;
} while (condicao);

console.log("Alunos: " + recebeAluno);
console.log("Notas: " + recebeNotas);

let somaDasNotas = recebeNotas.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);

console.log("Soma das notas: " + somaDasNotas);

if (recebeNotas.length > 0) {
  let mediaDasNotas = somaDasNotas / recebeNotas.length;
  console.log("Média geral da turma: " + mediaDasNotas);
} else {
  console.log("Não há notas para calcular a média.");
}
