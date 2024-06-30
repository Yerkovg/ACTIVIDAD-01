// helpers/inquirer.js

import inquirer from 'inquirer';
import colors from 'colors';

export const inquirerMenu = async () => {
  console.log('======================='.green);
  console.log('  Seleccione una opción '.white);
  console.log('=======================\n'.green);

  const preguntas = [
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desea hacer?',
      choices: [
        {
          value: 1,
          name: `${'1.'.green} Determinar si un número es par`
        },
        {
          value: 2,
          name: `${'2.'.green} Calcular el factorial de un número`
        },
        {
          value: 3,
          name: `${'3.'.green} Determinar si un número es primo`
        },
        {
          value: 4,
          name: `${'4.'.green} Ordenar una lista de números`
        },
        {
          value: 5,
          name: `${'5.'.green} Determinar si un texto es palíndromo`
        },
        {
          value: 0,
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ];

  console.log('\n');
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

export const pausa = async () => {
  console.log('\n');
  await inquirer.prompt([
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ]);
};

export const leerInput = async (mensaje) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};
