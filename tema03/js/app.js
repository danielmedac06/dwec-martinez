function ejercicio1() {
  console.log("--- Ejercicio 1 · DANIEL MARTINEZ FERRERAS ---");

  const puntos = 20;
  const nombre = "DANIEL";
  const matriculado = true;
  const datoVacio = null;
  let nota;
  const numeroGrande = 10n;

  console.log("puntos =", puntos, "tipo:", typeof puntos);
  console.log("nombre =", nombre, "tipo:", typeof nombre);
  console.log("matriculado =", matriculado, "tipo:", typeof matriculado);
  console.log("datoVacio =", datoVacio, "tipo:", typeof datoVacio);
  console.log("nota =", nota, "tipo:", typeof nota);
  console.log("numeroGrande =", numeroGrande, "tipo:", typeof numeroGrande);

  nota = 9;
  console.log("nota después =", nota, "tipo:", typeof nota);
}

function ejercicio2() {
  console.log("--- Ejercicio 2 · DANIEL MARTINEZ FERRERAS ---");

  console.log('String(123) →', String(123), typeof String(123));
  console.log('Number("123") →', Number("123"), typeof Number("123"));
  console.log('Number("12abc") →', Number("12abc"), typeof Number("12abc"));
  console.log('Number("") →', Number(""), typeof Number(""));
  console.log('Number(true) →', Number(true), typeof Number(true));
  console.log('Boolean(0) →', Boolean(0), typeof Boolean(0));
  console.log('Boolean("texto") →', Boolean("texto"), typeof Boolean("texto"));
  console.log('Boolean("") →', Boolean(""), typeof Boolean(""));
}

function ejercicio3() {
  console.log("--- Ejercicio 3 · DANIEL MARTINEZ FERRERAS ---");

  console.log('"5" - 2 →', "5" - 2);
  console.log('"5" + 2 →', "5" + 2);
  console.log('"8" * 2 →', "8" * 2);
  console.log('true + 2 →', true + 2);
  console.log('"12" - 4 →', "12" - 4);
  console.log('"Nota: " + 7 →', "Nota: " + 7);

  console.log('5 == "5" →', 5 == "5");
  console.log('5 === "5" →', 5 === "5");
  console.log('0 == false →', 0 == false);
  console.log('0 === false →', 0 === false);
  console.log('null == undefined →', null == undefined);
  console.log('null === undefined →', null === undefined);
}

function ejercicio4() {
  console.log("--- Ejercicio 4 · DANIEL MARTINEZ FERRERAS ---");

  const nombre = "Daniel Martínez Ferreras";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2.º";
  const aficion = "escuchar música";

  let horasEstudio = 3;
  horasEstudio += 2;

  const ficha = `Soy ${nombre}. Estudio ${curso} de ${ciclo}. Me gusta ${aficion}. Esta semana llevo ${horasEstudio} horas de estudio.`;
  alert(ficha);
  console.log(ficha);

  const fichaConMas = "Soy " + nombre + ". Estudio " + curso + " de " + ciclo + ". Me gusta " + aficion + ". Esta semana llevo " + horasEstudio + " horas de estudio.";
  console.log(fichaConMas);
  console.log("¿Los mensajes son iguales?", ficha === fichaConMas);
}