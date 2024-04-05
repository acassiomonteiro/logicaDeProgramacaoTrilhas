// Exercício 1
function calcularMedia(nota1, nota2, nota3) {
  const somaNotas = nota1 + nota2 + nota3;
  const media = somaNotas / 3;
  return media;
}
const nota1Aline = 8;
const nota2Aline = 9;
const nota3Aline = 7;

const mediaAline = calcularMedia(nota1Aline, nota2Aline, nota3Aline);
console.log(`A média é ${mediaAline}`);

// Exercício 2
// Maior e menor numero de uma array

function maiorMenor(numbers) {
  let maior = numbers[0];
  let menor = numbers[0];

  for (let num of numbers) {
    if (num > maior) maior = num;
    if (num < menor) menor = num;
  }

  return [maior, menor];
}
const array = [15, 8, 90, 75, 102, 6, 2];
const resultado = maiorMenor(array);
console.log(`O maior e menor Números são:${resultado}`);

//Excercício 3
// Ordem crescente de array 12, 5, 23, 17, 8, 14, 3, 19.

function ordemCrescente(array) {
  return array.sort((a, b) => a - b);
}

const ordemCrescenteResultado = ordemCrescente([12, 5, 23, 17, 8, 14, 3, 19]);
console.log(`Os Números em ordem são é:${ordemCrescenteResultado}`);

//Excercicio 4
// Imprimindo apenas os numeros primos

function primos(array) {
  return array.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  });
}

const primosResultado = primos([23, 16, 11, 8, 19, 14, 5, 21]);
console.log(`Os Número primos são: ${primosResultado}`);

//Excercicio 5
// string.length da frase "What is Lorem Ipsum?"
function tamanhoFrase(frase) {
  return frase.length;
}

const tamanhoFraseResultado = tamanhoFrase("What is Lorem Ipsum?");
console.log(`A quantidade de letras da frase é:${tamanhoFraseResultado}`);

//Excercicio 6
// fatorial de 12

function fatorial(num) {
  let fat = 1;
  for (let i = 1; i <= num; i++) {
    fat *= i;
  }
  return fat;
}
const fatorialResultado = fatorial(12);
console.log(`O fatorial de 12 é:${fatorialResultado}`);

// Excercicio 7
// valor total da compra
function totalCompra(valor1, valor2, valor3) {
  return valor1 + valor2 + valor3;
}
const totalCompraResultado = totalCompra(12, 5, 23);
console.log(`O valor total da compra é:${totalCompraResultado}`);

// Excercicio 8
// Multa por atraso de R$ 0,50 por dia de atraso

function multaPorAtraso(multa, atraso) {
  return (multa *= atraso);
}
const multaPorAtrasoResultado = multaPorAtraso(0.5, 7);
console.log(`A multa por atraso é:${multaPorAtrasoResultado}`);

// Exercicio 9
// Pontos de vida(HP) de um personagem após 3 ataques, onde cada um vale 20 pontos de vida e o total é 100.

function pontosDeVida(ataque1, ataque2, ataque3) {
  return 100 - ataque1 - ataque2 - ataque3;
}
const pontosDeVidaResultado = pontosDeVida(20, 20, 20);
console.log(`Os pontos de vida do personagem são:${pontosDeVidaResultado}`);

// Exercicio 10
// Contar o número de letras maiúsculas da string abaixo: "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY"

function contarLetrasMaiusculas(texto) {
  return texto.toUpperCase().match(/[A-Z]/g).length;
}

const contarLetrasMaiusculasResultado = contarLetrasMaiusculas(
  "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY"
);
console.log(
  `A quantidade de letras maiúsculas é:${contarLetrasMaiusculasResultado}`
);

// Exercicio 11
// Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(anoNascimento, mesNascimento, diaNascimento) {
  const dataNascimento = new Date(
    anoNascimento,
    mesNascimento - 1,
    diaNascimento
  );
  const dataAtual = new Date();
  const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  if (
    dataAtual.getMonth() < dataNascimento.getMonth() ||
    (dataAtual.getMonth() === dataNascimento.getMonth() &&
      data_atual.getDate() < dataNascimento.getDate())
  ) {
    return idade - 1;
  }
  return idade;
}

const calcularIdadeResultado = calcularIdade(2005, 9, 21);
console.log(`A idade da pessoa é:${calcularIdadeResultado}`);
