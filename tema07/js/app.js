/*
  Tarea 7 · DWEC · DANIEL MARTINEZ FERRERAS
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================
function calcularPrecio(base, iva, descuento) {
  console.log("calcularPrecio:", base, iva, descuento);

  const precioConDescuento = base - (base * descuento / 100);
  return precioConDescuento + (precioConDescuento * iva / 100);
}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  console.log("formatearEuros:", cantidad);
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  console.log("mostrarPrecio");

  const baseTexto = document.querySelector("#base").value;
  const iva = Number(document.querySelector("#iva").value);
  const descuentoTexto = document.querySelector("#descuento").value;
  const error = document.querySelector("#error1");

  if (baseTexto === "" || Number.isNaN(Number(baseTexto)) || Number(baseTexto) < 0) {
    error.textContent = "Introduce un precio base válido (igual o mayor que 0).";
    error.classList.remove("d-none");
    document.querySelector("#salida1").textContent = "";
    return;
    }

  const base = Number(baseTexto);
  let precioFinal;
  let descuento = 0;

  if (descuentoTexto === "") {
    precioFinal = calcularPrecio(base, iva);
  } else {
    descuento = Number(descuentoTexto);

    if (Number.isNaN(descuento) || descuento < 0 || descuento > 100) {
      error.textContent = "El descuento debe estar entre 0 y 100.";
      error.classList.remove("d-none");
      document.querySelector("#salida1").textContent = "";
      return;
    }

    precioFinal = calcularPrecio(base, iva, descuento);
  }

  error.classList.add("d-none");

  const textos = [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ];

  pintarLista("#salida1", textos);
  console.log("Ejercicio 1: precio final →", precioFinal);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  console.log("comoTexto:", pelicula);
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Las cuatro funciones siguientes ya funcionan, pero sus callbacks están escritos con function, como en el tema 6.
// TODO: pasa a flecha los cuatro callbacks (map, filter, sort y reduce). Si el cuerpo es solo una expresión,
//       sin llaves ni return. Comprueba después que cada botón sigue dando lo mismo.

function verTitulos() {
  console.log("verTitulos");

  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  console.log("verLargas");

  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  console.log("ordenarPorAnio");

  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  console.log("verDuracionTotal");
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
 console.log("buscarAntigua");

 const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
 const mensaje = document.querySelector("#mensaje2");

 if (antigua === undefined) {
  mensaje.textContent = "No hay ninguna película anterior a 1990";
  document.querySelector("#salida2").textContent = "";
 } else {
  pintarLista("#salida2", [comoTexto(antigua)]);
  mensaje.textContent = "Primera película anterior a 1990";
 }

 console.log("Ejercicio 2: find →", antigua);
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  console.log("transformar:", lista);

  const resultado = [];

  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }

  return resultado;
}

function mostrar3(nombre, resultado, conMap) {
  console.log("mostrar3:", nombre, resultado);

  const salida = document.querySelector("#salida3");
  salida.textContent = "";

  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];

  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}
function verDobles() {
  console.log("verDobles");

  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  console.log("verCuadrados");

  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles ", resultado);
}

function verAbsolutos() {
  console.log("verAbsolutos");

  const resultado = transformar(numeros, Math.abs);
  mostrar3("valores absolutos", resultado, numeros.map(Map.abs));
  console.log("Ejercicio 3: valores absolutos ", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso) {
  console.log("crearContador:", paso);

  let cuenta = 0;

  return function () {
    cuenta += paso;
    console.log("contador actualizado:", cuenta);
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

function sumarUno() {
  console.log("sumarUno");

  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  console.log("sumarCinco");

  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 ", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    console.log("anadirNota:", nota);

    if (
      typeof nota !== "number" ||
      Number.isNaN(nota) ||
      nota < 0 ||
      nota > 10
    ) {
      return false;
    }

    this.notas.push(nota);
    return true;
  }

  media() {
    console.log("media:", this.nombre);

    if (this.notas.length === 0) {
      return 0;
    }

    const suma = this.notas.reduce(
      (total, nota) => total + nota,
      0
    );

    return suma / this.notas.length;
  }

  presentarse() {
    console.log("presentarse:", this.nombre);
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
    console.log("AlumnoFCT creado:", nombre, empresa);
  }

  presentarse() {
    console.log("presentarse (FCT):", this.nombre);
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

const alumnoInicial = new Alumno("Justo Cenit", "2º DAW");
alumnoInicial.anadirNota(8);
alumnoInicial.anadirNota(9);
alumnos.push(alumnoInicial);

const alumnoFCTInicial = new AlumnoFCT(
  "Daniel Martinez",
  "2.º DAW",
  "TecnoSur"
);
alumnoFCTInicial.anadirNota(7);
alumnoFCTInicial.anadirNota(8.5);
alumnos.push(alumnoFCTInicial);

function pintarAlumnos() {
  console.log("pintarAlumnos");

  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");

    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(
        alumno.media() >= 5
          ? "text-bg-success"
          : "text-bg-danger"
      );

      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  console.log("crearAlumno");

  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value;
  const empresa = document.querySelector("#empresa5").value.trim();
  const notasTexto = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    return;
  }

  let notas = [];

  if (notasTexto !== "") {
    const partesNotas = notasTexto.split(",");

    notas = partesNotas.map((texto) => Number(texto.trim()));

    const hayNotaNoValida = partesNotas.some((texto, indice) =>
      texto.trim() === "" ||
      Number.isNaN(notas[indice]) ||
      notas[indice] < 0 ||
      notas[indice] > 10
    );

    if (hayNotaNoValida) {
      error.textContent =
        "Las notas deben ser números entre 0 y 10, separados por comas.";
      error.classList.remove("d-none");
      return;
    }
  }

  let alumno;

  if (empresa === "") {
    alumno = new Alumno(nombre, curso);
  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);
  }

  notas.forEach((nota) => alumno.anadirNota(nota));

  alumnos.push(alumno);

  error.classList.add("d-none");

  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";

  pintarAlumnos();
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================
function diasHasta(fecha) {
  console.log("diasHasta:", fecha);

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const milisegundosDia = 24 * 60 * 60 * 1000;
  return Math.round((fecha - hoy) / milisegundosDia);

}

function mostrarDias() {
  console.log("mostrarDias");

  const valor = document.querySelector("#fecha6").value;
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
  const dias = diasHasta(fecha);

  const fechaTexto = fecha.toLocaleDateString("es-ES",{
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

   if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${fechaTexto}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${fechaTexto}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días: ${fechaTexto}.`;
  }

  console.log("Ejercicio 6: días hasta la fecha →", dias);
 
}

function iniciales(nombreCompleto) {
  console.log("iniciales:", nombreCompleto);

  return nombreCompleto
  .trim()
  .split("")
  .filter((palabra) => palabra !== "")
  .map((palabra) => palabra[0].toUpperCase())
  .join("");

}

function crearUsuario(nombreCompleto) {
  console.log("crearUsuario:", nombreCompleto);

  const letras = iniciales(nombreCompleto).toLowerCase();
  const cifras = Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  return letras + cifras;
}

function mostrarIniciales() {
  console.log("crearUsuario:", nombreCompleto);

  const nombre = document.querySelector("#nombre6").value.trim();
  const salida = document.querySelector("#salida6b");

  if (nombre === "") {
    salida.textContent = "Escribe un nombre completo.";
    return;
  }
  
  const letras = iniciales(nombre);
  const usuario = crearUsuario(nombre);

  salida.textContent = `Iniciales: ${letras} · usuario: ${usuario}`;
  console.log("Ejercicio 6: Iniciales y Usuario", letras, usuario);
}
