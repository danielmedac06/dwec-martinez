console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================
const estudiante = {
  nombre: "Daniel",
  apellidos: "Martínez Ferreras",
  edad: 21,
  curso: "2.º DAW",

  presentarse: function () {
    return "Soy " + this.nombre + "" + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const lista = document.createElement("ul");
  lista.classList.add("list-group");

  const claves = [ "nombre", "apellidos", "edad", "curso"];

  claves.forEach(function (clave){
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = clave + ": " + estudiante[clave];
    lista.append(elemento);
  })

  const presentacion = document.createElement("p");
  presentacion.classList.add("mt-3");
  presentacion.textContent = estudiante.presentarse();

  salida.append(lista, presentacion);

  console.log("Ejercicio 1: nueva edad", estudiante.edad);

}

function cumplirAnios() {
  estudiante.edad += 1;

  console.log("Ejercicio 1: nueva edad", estudiante.edad);

  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;

  console.log("Ejercicio 1: curso eliminado");

  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;

  console.log("Ejercicio 2: mostrar colores", comoTexto(colores));
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    return;
  }

  const eliminado = colores.pop();
  
  mostrarColores();

  console.log("Ejercicio2: color eliminado con pop()", eliminado);
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hgahy colores para quitar.");
    return;
  }

  const eliminado = colores.shift();

  mostrarColores();

  console.log("Ejercicio 2: color eliminado con shift()", eliminado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });

  console.log("Ejercicio 3: productos pintados", lista);
}

function mostrarProductos() {
  pintarProductos(productos);

  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos en el catalogo.";

  console.log("Ejercicio 3: todos los productos");
}

function ordenarPorPrecio() {
  const copia = [...productos];

  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(copia);

  document.querySelector("#mensaje3").textContent = "Productos ordenados de menor a mayor precio.";

  console.log("Ejercicio 3 productos ordenado", copia);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto){
    return producto.precio > 50;
  });

  pintarProductos(caros);

  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de mas de 50 €.";
   console.log("Ejercicio 3: productos de mas de 50 €, caros");
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if(texto === "") {
    mensaje.textContent = "Escribe el nombre del producto.";
    pintarProductos([]);
    return;
  }

  const encontrado = productos.find(function (producto){
    return producto.nombre.toLowerCase().incluses(texto);
  });

  if (encontrado === undefined) {
    mensaje.textContent = "No se ha encontrado ningun producto.";
    pintarProductos([]);
    console.log("Ejercicio 3: producto no encontrado");
  } else {
    pintarProductos([encontrado]);
    mensaje.textContent = "Producto encontrado.";
    console.log("Ejercico 3: producto encontrado, encontrado");
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "[Tu nombre]",
  notas: [],
  
  añadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }

    this.notas.push(nota);

    return true;
  },
  
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota){
      return total + nota;
    }, 0);

    return suma / this.nota.length;
  }
};

function mostrarNotas() {
  const salida = document.querySelector("#notas");
  salida.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");

    badge.classList.add("badge", "me-2", "mb-2");
    
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }

    badge.textContent = nota;

    salida.append(badge);
  });

  const media = document.querySelector("#media");

  if (alumno.notas.length === 0) {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }
  console.log("Ejercicio 4: notas", comoTexto(alumno.notas));
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  if (casilla.value.trim() === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
  }

  const nota = Number(casilla.value);

  if (alumno.añadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";

  mostrarNotas();
  
  console.log("Ejercicio 4: nota añadida", nota);
}

function borrarNotas() {
  alumno.notas = [];

  mostrarNotas();

  console.log("Ejercicio 4: notas borradas");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero){
    return numero * 2;
  });

  const salida = document.querySelector("#salida5");
  salida.style.whiteSpace = "pre-line";

  salida.textContent = "Dobles: " + comoTexto(dobles) + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: dobles", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero){
    return numero % 2 === 0;
  });

  const salida = document.querySelector("#salida5");
  salida.style.whiteSpace = "pre-line";

  salida.textContent= "Números pares: " + comoTexto(pares) + "\nArray original: " + comoTexto(numeros);

  console.log("Ejercicio 5: pares", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (total, numero){
    return total + numero;
  }, 0);

const salida = document.querySelector("#saluda5");
salida.style.whiteSpace = "pre-line";

salida.textContent = "Suma de los números: " + suma + "\nArray original: " + comoTexto(numeros);

console.log("Ejercicio 5: suma", suma);
}

function verCadena() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const dobles = pares.map(function (numero) {
    return numero * 2;
  });

  const suma = dobles.reduce(function (total, numero) {
    return toal + numero;
  }, 0);

  const salida = document.querySelector("#Salida5");
  salida.whiteSpace = "pre-line";

  salida.textContent =  "1. Números pares: " + comoTexto(pares) + "\n2. Dobles de los pares: " + comoTexto(dobles) + "\n3. Suma de los dobles: " + suma;

  console.log("Ejercicio 5: los tres pasos", pares, dobles, suma);
}

// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const salida = document.querySelector("#ciudades");
  salida.textContent = "";

  ciudades.forEach(function (ciudad, posicion){
    const badge = document.createElement("span");

    badge.classList.add("badge", "text-bg-primary", "me-1", "mb-1");
    badge.textContent = posicion + " . " + ciudad;

    salida.append(badge);
  });
  
  console.log("Ejercicio 6: ciudades", ciudades);
}

function verSlice() {
  const parte = ciudades.slice(2, 5);

  const salida = document.querySelector("#salida6");
  salida.style.whiteSpace = "pre-line";

  salida.textContent =  "Resultado de slice(2, 5): " + comoTexto(parte) + "\nCiudades que siguen en el array: " + ciudades.length;

  console.log("Ejercicio 6: slice", parte);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");

  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de tres ciudades. Pulsa Restaurar.";
    return;
  }

  const eliminadas = ciudades.splice(2, 2);

  salida.style.whiteSpace = "pre-line";

  salida.textContent = "Ciudades eliminadas con splice(2, 2): " + comoTexto(eliminadas) + "\nCiudades que quedan: " + ciudades.length;
  
  mostrarCiudades();

  console.log("Ejercicio 6: ciudades eliminades", eliminadas);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];

  mostrarCiudades();

  document.querySelector("#salida6").textContent = "Las ciudades se han restaurado correctamnete.";

  console.log("Ejercicio 6: ciudades restaurades", ciudades);
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");

  if (nombre === "") {
    salida.textContent = "Escribe el nombre de una ciudad.";
    return;
  }

  const existe = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);

  salida.style.whiteSpace = "pre-line";

  salida.textContent =  "Ciudad buscada: " + nombre +"\nincludes(): " + existe + "\nindexOf(): " + posicion;

  console.log("Ejercicio 6: busqueda", nombre, existe, posicion);
}

mostrarCiudades();
