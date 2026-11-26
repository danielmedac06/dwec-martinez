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
