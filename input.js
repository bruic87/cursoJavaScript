import entradaDeDados from 'readline-sync';

let nome = entradaDeDados.question('Digite seu nome: ');
console.log(`Olá ${nome}!`);