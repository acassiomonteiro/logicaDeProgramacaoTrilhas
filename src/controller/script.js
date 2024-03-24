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
