// Array vacío
let arrayVacio = [];
// Array de números
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array de números pares
let arrayNumerosPares = [0, 2, 4, 6, 8];
// Array mixto de strings y números
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
// Suma de números
function suma (num1, num2) {
    return (num1 + num2);
}
// Potencia de números
function potenciacion(a, b) {
    if (b < 0) {
      return 1 / potenciacion(a, -b); 
    }
    
    let resultado = 1;
    for (let i = 0; i < b; i++) {
      resultado *= a; 
    }
    
    return resultado;
  }

// Separar palabras 
function separarPalabras(string) {
    return string.split(' ');
}
// Repetir strings
function repetirString(string, number) {
    return string.repeat(number);
}


// Saber si un numero es primo.
function esPrimo(number) {
    if (number <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
    return true; 
  }

  //let array = [1, 5, 8, 2, 6, 4]; Ordenar un array de menor a mayor.
  function ordenarArray (array) {
    return array.sort((a,b) => a - b);
  }

  // Función array de números pares -> Usamos filter() y ponemos como condición que el resto de number entre 2 sea 0.
  // let array = [1, 2, 3, 4, 5, 6, 7, 8];

  function obtenerPares(array) {
    return array.filter(number => number % 2 === 0);
  }

  // Función array que devuelva una cadena de texto salida y entrada. -> Usamos join() en conjunto con los template literals para introducir los corchetes [] y las comas.

  function pintarArray(array) {
    return `[${array.join(', ')}]`;
  }

  // Función que tome un array y una función y devuelva un array con la función aplicada a cada elemento. Usamos map().

  function arrayMapi(array, funcionX) {
    return array.map(funcionX);
  }

  // Función que tome un array y devuelva otro donde se hayan eliminado los duplicados. Usamos filter() e indexOf como método auxiliar. Lo que hace la función es devolver la primera aparición de cada elemento del array.

  // let number = [1, 1, 2, 3, 4, 4];

  function eliminarDuplicados(array) {
   return array.filter((item, index) => array.indexOf(item) === index);
  }

  // Crear un array de numeros negativos desde 0 a -9.
  let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

  // Crear array de Hola Mundo.

  let holaMundo = ['Hola', 'Mundo'];

  // Crear array que guarde de todo.

  let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

  // Crear array de arrays.

  let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

  // Función multiplicacion

  const multiplicacion = (num1, num2) => {
    return num1 * num2;
  }

  // Función división

  const division = (num1, num2) => {
    return num1 / num2;
  }

// Funcion Par e Impar

const esPar = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Crear array de funciones aritméticas.

const resta = (num1, num2) => {
    return num1 - num2;
}

let arrayFunciones = [suma, resta, multiplicacion];

// Crear función para ordenar array de mayor a menor

function ordenarArray2 (array) {
    return array.sort((a,b) => b - a);
  }

// Función para obtener números impares. Usamos filter() y la condición opuesta a que number sea par.

function obtenerImpares(array) {
    return array.filter(number => number % 2 !== 0);
}

// Función que acepte un array numérico como argumento y que devuelva la sumatoria de todo el array numérico. Usamos reduce() con suma.

function sumarArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// Función multiplicación en arrays. Usamos reduce() con multiplicación.

function multiplicarArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue);
}




  



