/*
  Tarea 4 · DWEC · Daniel Martinez Ferreras
  Calculadora y bucles.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;


// EJERCICIO 1 · CALCULADORA

function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: división entre 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede calcular el módulo con divisor 0.", "danger");
    console.warn("Módulo: divisor 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}
// EJERCICIO 2 · COMPARACIONES

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números.", "danger");
    console.warn("Comparación: faltan números");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
    console.log(`${n1} es mayor que ${n2}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`);
    console.log(`${n2} es mayor que ${n1}`);
  } else {
    mostrar("Los dos números son iguales.");
    console.log("Los dos números son iguales");
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el primer número.", "danger");
    console.warn("Par o impar: falta el número");
  } else if (n1 % 1 !== 0) {
    mostrar("El número tiene decimales: no es par ni impar.", "warning");
    console.log("El número tiene decimales");
  } else {
    const resultado = n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es ${resultado}.`);
    console.log(`${n1} es ${resultado}`);
  }
}


// FUNCIONES DE AYUDA PARA LOS BUCLES

function validarRepeticiones(veces) {
  if (Number.isNaN(veces) || !Number.isInteger(veces) ||
      veces > MAXIMO_REPETICIONES) {
    mostrar("Escribe un entero que no supere 20.", "danger");
    console.warn("Número de repeticiones no válido");
    return false;
  }
  return true;
}

function mostrarTotal(contador) {
  const palabra = contador === 1 ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${palabra}`);
  console.log(`Total: ${contador} ${palabra}`);
}
// EJERCICIO 3 · BUCLES CON TEXTO

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarRepeticiones(veces)) return;

  let contador = 0;

  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  mostrarTotal(contador);
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarRepeticiones(veces)) return;

  let contador = 0;

  while (contador < veces) {
    contador++;
    anadirLinea(`while · repetición ${contador} de ${veces}`);
  }

  mostrarTotal(contador);
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarRepeticiones(veces)) return;

  let contador = 0;

  do {
    contador++;
    anadirLinea(`do...while · repetición ${contador} de ${veces}`);
  } while (contador < veces);

  mostrarTotal(contador);
}
// EJERCICIO 4 · BUCLES CON BADGES

function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarRepeticiones(veces)) return;

  let contador = 0;

  for (let i = 1; i <= veces; i++) {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
  }

  mostrarTotal(contador);
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarRepeticiones(veces)) return;

  let contador = 0;

  while (contador < veces) {
    contador++;
    const color = contador % 2 === 0 ? "primary" : "secondary";
    anadirBadge(contador, color);
  }

  mostrarTotal(contador);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (!validarRepeticiones(veces)) return;

  let contador = 0;

  do {
    contador++;
    const color = contador % 2 === 0 ? "primary" : "secondary";
    anadirBadge(contador, color);
  } while (contador < veces);

  mostrarTotal(contador);
}