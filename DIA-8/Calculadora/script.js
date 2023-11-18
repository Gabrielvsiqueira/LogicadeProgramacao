///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Calculadora(num1, num2, operador) {
  let resultado;
  let numero1 = parseInt(num1);
  let numero2 = parseInt(num2);

  if (operador === "+") {
    let resultado = numero1 + numero2;
    if (resultado === undefined || resultado > 1000000) {
      let resultado = "ERRO.";
      return resultado;
    }
    return resultado;
  } else if (operador === "-") {
    let resultado = numero1 - numero2;
    if (resultado === undefined || resultado > 1000000) {
      let resultado = "ERRO.";
      return resultado;
    }
    return resultado;
  } else if (operador === "*") {
    let resultado = numero1 * numero2;
    if (resultado === undefined || resultado > 1000000) {
      let resultado = "ERRO.";
      return resultado;
    }
    return resultado;
  } else if (operador === "/") {
    let resultado = numero1 / numero2;
    if (resultado === undefined || resultado > 1000000) {
      let resultado = "ERRO.";
      return resultado;
    }
    return resultado;
  } else if (operador === "e") {
    resultado = 1;
    for (let i = 0; i < num2; i++) {
      resultado *= num1;

      if (resultado > 1000000) {
        resultado = "ERRO.";
        break;
      }
    }
    if (resultado === undefined) {
      resultado = "ERRO.";
    }
    return resultado;
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/);
  let operadores = visor.value.split(/[0-9]/);
  let operador;
  operadores.forEach((x) => {
    if (x != "") operador = x;
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador);
}
