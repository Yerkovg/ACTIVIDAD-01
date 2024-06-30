import colors from 'colors';
import inquirer from 'inquirer';

const esPar = (num) => num % 2 === 0;

const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));

const esPrimo = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const ordenarLista = (lista) => lista.split(' ').map(Number).sort((a, b) => a - b);

const esPalindromo = (texto) => {
  const textoLimpio = texto.replace(/[\W_]/g, '').toLowerCase();
  return textoLimpio === textoLimpio.split('').reverse().join('');
};

const determinarPar = (numero) => {
  if (esPar(numero)) {
    return colors.red(`${numero} es par.`);
  } else {
    return colors.green(`${numero} no es par.`);
  }
};

const calcularFactorial = (numero) => {
  return `El factorial de ${numero} es ${factorial(numero)}.`;
};

const determinarPrimo = (numero) => {
  if (esPrimo(numero)) {
    return colors.yellow(`${numero} es primo.`);
  } else {
    return colors.orange(`${numero} no es primo.`);
  }
};

const ordenarNumeros = (lista) => {
  return `Lista ordenada: ${ordenarLista(lista).join(', ')}.`;
};

const determinarPalindromo = (texto) => {
  if (esPalindromo(texto)) {
    return colors.cyan(`"${texto}" es un palíndromo.`);
  } else {
    return colors.magenta(`"${texto}" no es un palíndromo.`);
  }
};

export {
  determinarPar,
  calcularFactorial,
  determinarPrimo,
  ordenarNumeros,
  determinarPalindromo
};
