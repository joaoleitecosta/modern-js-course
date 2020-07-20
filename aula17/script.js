const num1 = prompt('Digite um numero');
const num2 = prompt('Digite outro numero');

const soma = Number(num1) + Number(num2);

alert(`O resultado da soma foi ${soma}`);

let varA = 'A';
let varB = 'B';
let varC = 'C';
let valorGardado;

valorGardado = varA;
varA = varB;
varB = varC;
varC = valorGardado;

console.log(varA, varB, varC);
