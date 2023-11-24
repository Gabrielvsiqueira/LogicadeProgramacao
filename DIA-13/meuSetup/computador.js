class computador {
  tipo;
  processador;
  video;
  armazenamento;
  memoriaRam;
  ssd;

  constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
    this.tipo = tipo;
    this.processador = processador;
    this.video = video;
    this.armazenamento = armazenamento;
    this.memoriaRam = memoriaRam;
    this.ssd = ssd;
  }

  exibirInformacoes() {
    console.log(
      "Tipo : " +
        this.tipo +
        " processador: " +
        this.processador +
        " video: " +
        this.video +
        " armazenamento: " +
        this.armazenamento +
        " memória ram: " +
        this.memoriaRam +
        " SSD: " +
        this.ssd
    );
  }
}

let componenetes = new computador('notebook','AMD-RYZEN 5', 'integrado', 1000, 16, false);
componenetes.exibirInformacoes()

