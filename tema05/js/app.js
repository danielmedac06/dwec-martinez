console.log("app.js cargado");

function aplicarCambios() {
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  
}


function anadirParrafo() {
  


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
