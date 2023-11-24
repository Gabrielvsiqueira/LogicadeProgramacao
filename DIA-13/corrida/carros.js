class Carro {
  constructor(nomeEquipe, potencia, velocidadeMaxima, aceleracao) {
    this.nomeEquipe = nomeEquipe;
    this.potencia = potencia;
    this.velocidadeMaxima = velocidadeMaxima;
    this.aceleracao = aceleracao;
  }

  calcularDistancia(distancia) {
    return distancia * (this.velocidadeMaxima / this.aceleracao);
  }

  exibirResultados() {
    console.log("Nome Equipe: " + this.nomeEquipe);
    console.log("Potencia: " + this.potencia);
    console.log("Velocidade Máxima: " + this.velocidadeMaxima);
    console.log("Aceleração: " + this.aceleracao);
  }
}

class Corrida {
  constructor(nome, tipo, distancia) {
    this.nome = nome;
    this.tipo = tipo;
    this.distancia = distancia;
    this.participantes = [];
    this.vencedor = "";
  }

  adicionarParticipante(carro) {
    this.participantes.push(carro);
  }

  definirVencedor() {
    let menorTempo = this.participantes[0].calcularDistancia(this.distancia);
    let vencedor = this.participantes[0];

    for (let index = 1; index < this.participantes.length; index++) {
      let tempo = this.participantes[index].calcularDistancia(this.distancia);
      if (tempo < menorTempo) {
        menorTempo = tempo;
        vencedor = this.participantes[index];
      }
    }

    this.vencedor = vencedor;
    return this.vencedor;
  }
}

let corrida = new Corrida("Corrida 1", "Tipo 1", 100);

corrida.adicionarParticipante(new Carro("Ferrari", 340, 250, 6));
corrida.adicionarParticipante(new Carro("Marea", 210, 200, 6));
corrida.adicionarParticipante(new Carro("Peugeot 306", 300, 220, 10));

corrida.definirVencedor();

corrida.vencedor.exibirResultados();
