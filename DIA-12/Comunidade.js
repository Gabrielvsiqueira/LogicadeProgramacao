let nomeUsuario = [];
let senhaUsuario = [];
let contador = 0;
let condicao = true;

while (condicao) {
  let opcoes = prompt(
    "1 - Cadastrar | 2 - Fazer Login | 3 - Excluir um cadastro | 4 - Fechar o programa."
  );
  switch (opcoes) {
    case opcoes === "1":
      let nome = String(prompt("Informe seu nome:"));
      let senha = String(prompt("Informe sua senha:"));

      nomeUsuario[contador] = nome;
      senhaUsuario[contador] = senha;
      contador++;

      console.log("Usuários cadastrados com sucesso!");
      break;

    case opcoes === "2":
      let procurarNome = String(prompt("Digite seu nome:"));
      let procurarSenha = String(prompt("Digite sua senha:"));

      for (let i = 0; i < nomeUsuario.length; i++) {
        for (let n = 0; n < senhaUsuario.length; n++) {
          if (
            procurarNome[i] === nomeUsuario.length &&
            procurarSenha[i] === senhaUsuario.length
          ) {
            console.log(
              "Nome e senha não encontrados, favor digitar um nome cadastrado."
            );
          } else {
            console.log("Usuário logado com sucesso!");
          }
        }
      }
      break;

    case opcoes === "3":
      let deletarNome = String(prompt("Informe qual nome deseja deletar:"));
      for (let t = 0; t < nomeUsuario.indexOf(); t++) {
        if (deletarNome == nomeUsuario.indexOf()) {
          console.log(deletarNome.slice(deletarNome));
        } else {
          console.log("Elemento não encontrado.");
        }
      }
      break;

    case opcoes === "4":
      condicao = false;
      console.log("Finalizando o programa.");
      break;

    default:
      console.log("Opcao invalida, escolha outra!");
      break;
  }
}
