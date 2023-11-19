function nomeUsuario(nome, idade, salario) {
  let nome = String(prompt("Informe seu nome"));
  let idade = Number(prompt("Informe sua idade"));
  let salario = String(prompt("Informe seu salário"));

  return [nome, idade, salario];
}

let usuario = String(prompt("Você digitou as informações corretas? (s/n)"));

while (usuario === "s") {
  let [nome, idade, salario] = nomeUsuario();
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Salário: " + salario);

  usuario = String(prompt("Você digitou as informações corretas? (s/n)"));
}

while (usuario === "n") {
  [nome, idade, salario] = nomeUsuario();
}

let aumento = 1.5;
let salarioNovo;

let salario;

for (let ano = 2023; ano < 2030; ano++) {
  salarioNovo = salario * aumento;
  console.log(ano + " = R$" + salarioNovo);
}
