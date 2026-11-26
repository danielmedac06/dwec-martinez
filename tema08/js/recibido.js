/*
  Tarea 8 · DWEC · Daniel Martinez Ferreras
  recibido.html: lee lo que ha llegado por GET y lo pinta en la tabla.
  En una web real esto lo haría el servidor; aquí lo hacemos en el navegador para verlo.
*/

console.log("recibido.js cargado");

// location.search es la parte de la URL desde el ?, por ejemplo "?nombre=Luc%C3%ADa&taller=html"
console.log("Ha llegado:", location.search);

// URLSearchParams la separa en pares nombre → valor y decodifica las tildes y los espacios.
// El modelo: un dato suelto, por su name
const parametros = new URLSearchParams(location.search);
console.log("nombre =", parametros.get("nombre"));

if (location.search === "") {
  consulta.textContent ="(nada)";
} else {
  consulta.textContent = location.search;
}

const datos = document.querySelector("#datos");

for (const [campo, valor] of parametros) {

  const fila = document.createElement("tr");

  const nombreCampo = document.createElement("th");
  const valorCampo = document.createElement("td");

  nombreCampo.textContent = campo;
  valorCampo.textContent = valor;

  fila.append(nombreCampo, valorCampo);

  datos.append(fila);

  console.log("Campo:", campo, "Valor:", valor);

}
if (parametros.size === 0) {

  const fila = document.createElement("tr");

  const celda = document.createElement("td");

  celda.colSpan = 2;
  celda.textContent = "No se han recibido datos.";

  fila.append(celda);

  datos.append(fila);

  console.log("No se han recibido datos.");

}
