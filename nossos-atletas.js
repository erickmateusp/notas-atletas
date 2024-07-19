let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

function calculaMediaValida(notas) {
  notas.sort((a, b) => a - b);
  let notasComputadas = notas.slice(1, 4);
  let soma = 0;
  notasComputadas.forEach(nota => {
    soma += nota;
  });
  return soma / notasComputadas.length;
}

function exibeResultados(atletas) {
  atletas.forEach(atleta => {
    let mediaValida = calculaMediaValida(atleta.notas);
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
    console.log(`Média Valida: ${mediaValida.toFixed(9)}\n`);
  });
}

exibeResultados(atletas);
