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
  const numero = contenido.querySelectorAll("p").length+1;

  parrafo.textContent = `Parrafo nuevo ${numero}`;

  contenido.append(parrafo);

  document.querySelector("#aviso2").classList.add("d-none");

  console.log("Parrafo añadido:", parrafo.textContent);

}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;
  const aviso = document.querySelector("#aviso2");

  if (ultimo === null) {
    aviso.classList.remove("d-none");
    console.log("No quedan párrafos que eliminar");
  } else{
    ultimo.remove();
    console.log("Se ha eliminado el último párrafo");

    if (contenido.children.length === 0){
      aviso.classList.remove("d-none");
    } else {
      aviso.classList.add("d-none");
    }
  }
}


function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");
  let activados = 0;

  for (const parrafo of parrafos) {
   if (parrafo.CDATA_SECTION_NODE.resaltado === "true"){
    continue;
   }


    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

    parrafo.dataset.resaltado = "true";
    activados++;
  }
  
  console.log(
    `Resaltado activado en ${activados} párrafo(s) nuevo(s).`
  );

}

function cambiarTexto() {
const entrada = document.querySelector("#nuevoTexto");
const texto = entrada.ariaValueMax.trim();
const error = document.querySelector("#error4");
const primero = document.querySelector("#contenido p");



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
