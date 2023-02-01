const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cssProperties = [];

console.log('Digite as propriedades CSS (ou "SAIR" para encerrar):');

rl.on('line', (input) => {
  if (input === 'SAIR') {
    rl.close();
    return;
  }
  
  cssProperties.push(input);
});

rl.on('close', () => {
  cssProperties.sort();
  
  console.log('Propriedades CSS ordenadas de A-Z:');
  cssProperties.forEach(property => console.log(property));
});