function calcular(tipo, valor){
    var valor_campo = (document.getElementById('resultado').value); //Declarando uma variável global

    if (tipo === 'valor') {
      document.getElementById('resultado').value += valor;
    } 
    else if (tipo === 'acao') {
      if (valor === 'c') {
        document.getElementById('resultado').value = '';
      }
      if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
        document.getElementById('resultado').value += valor;
      }
      if (valor === '=') {
        document.getElementById('resultado').value = (eval(valor_campo));
      }
    }
  }