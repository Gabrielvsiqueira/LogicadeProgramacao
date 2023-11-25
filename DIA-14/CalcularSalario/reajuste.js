let nome;
let salario;

function Usuario(nome, salario) {
  nome = String(prompt("Informe seu nome:"));
  salario = Number(prompt("Informe seu salario: "));
  CalcularAumento(salario, nome);
}

function CalcularAumento(salario, nome) {
  let reajuste;
  let salarioNovo = 0;
  if (salario <= 1500) {
    reajuste = 0.2;
  } else if (salario > 1500 && salario <= 2000) {
    reajuste = 0.15;
  } else if (salario > 2000 && salario <= 3000) {
    reajuste = 0.1;
  } else if (salario > 3000) {
    reajuste = 0.5;
  }

  salarioNovo = salario + (reajuste * salario);

  console.log("Nome: " + nome);
  console.log("Salario:" + salario);
  console.log("% de salario: " + reajuste);
  console.log("Salário reajustado: " + salarioNovo);

  CalcularNovamente();
}

function CalcularNovamente() {
  let calcular = prompt("Desja calcular um novo salario? 1-Sim || 2- Não");
  if (calcular == "1") {
    Usuario();
  } else {
    console.log("Programa Finalizado.");
  }
}
