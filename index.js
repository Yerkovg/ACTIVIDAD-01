// index.js

import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import {
  determinarPar,
  calcularFactorial,
  determinarPrimo,
  ordenarNumeros,
  determinarPalindromo
} from './helpers/logic.js';

const main = async () => {
  let opt;
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const numeroPar = await leerInput('Ingresa un número para determinar si es par: ');
        console.log(determinarPar(Number(numeroPar)));
        break;

      case 2:
        const numeroFactorial = await leerInput('Ingresa un número para calcular su factorial: ');
        console.log(calcularFactorial(Number(numeroFactorial)));
        break;

      case 3:
        const numeroPrimo = await leerInput('Ingresa un número para determinar si es primo: ');
        console.log(determinarPrimo(Number(numeroPrimo)));
        break;

      case 4:
        const listaNumeros = await leerInput('Ingresa una lista de números separados por espacios para ordenar: ');
        console.log(ordenarNumeros(listaNumeros));
        break;

      case 5:
        const textoPalindromo = await leerInput('Ingresa un texto para determinar si es palíndromo: ');
        console.log(determinarPalindromo(textoPalindromo));
        break;
    }
    if (opt !== 0) await pausa();

  } while (opt !== 0);
};

main();
