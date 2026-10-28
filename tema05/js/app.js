console.log("app.js cargado");

function aplicarCambios() {
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";
  const segundo = document.querySelector("#contenido p");
  const parrafos = document.querySelectorAll("#contenido .segundo");

  if (primero!== null){
    primero.textContent = "Texto modificado por JavaScript";
  }

  if (segundo !== null) {
    segundo.classList.add("bg-warning-subtle");
  }

  if (parrafos.length >= 3){
    parrafos[2].classList.add("text-danger");
  }

  console.log("Se han aplicado los cambios");
}


function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");


}

function eliminarUltimo() {
  


}




function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
   


    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

  }

}




function cambiarTexto() {



}

function cambiarConHtml() {




}




function anadirTarea() {




}

function borrarCompletadas() {




}




function verDatosVentana() {


  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;






}
