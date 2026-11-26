/*
  Tarea 8 · DWEC · [Tu nombre y apellidos]
  Formulario de inscripción.

  Cómo usar esta plantilla:
  · Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Los ejercicios 1 a 3 son HTML: el formulario se valida y se envía solo, sin JavaScript.
  · Desde el ejercicio 4, la validación la haces tú: añade novalidate al <form>.
  · Los errores se escriben debajo de cada campo con mostrarError(); nada de alert().
  · Como en el tema 7: flechas en los callbacks. Dentro de ellos, this NO es el formulario:
    usa e.target o la constante form.
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const form = document.querySelector("#inscripcion");


// ============================================================
// Mostrar y quitar los errores junto al campo
// Cada campo está en un <div class="mb-3"> con su <div class="invalid-feedback">
// ============================================================

// Ya está hecha: es el modelo
function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");     

  if (campo.type === "radio") {
    const radios = form.querySelectorAll(`[name="${campo.name}"]`);

    radios.forEach((radio) => {
      radio.classList.add("is-invalid");
    });
  
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  aviso.textContent = mensaje;
  aviso.classList.add("d-block");     

} else {
  const aviso= campo.parentElement.querySelector(".invalid-feedback");

  aviso.textContent = mensaje;
  aviso.classList.add("d-block");
  }
}
function quitarError(campo) {
  
  if (campo.type === "radio") {
    const radios = form.querySelectorAll(`[name="${campo.name}"]`);

    radios.forEach((radio) => {
      radio.classList.remove("is-invalid");
    });
    const aviso = document.querySelector("#errorTaller");
    aviso.textContent = "";
    aviso.classList.remove("d-block");

  } else {
    campo.classList.remove("is-invalid");

    const aviso = campo.parentElement.querySelector(".invalid-feedback");

    if (aviso !== null) {
      aviso.textContent = "";
      aviso.classList.remove("d-block");
    }
  }
}


// ============================================================
// Ejercicio 4 · El mensaje de cada error
// ============================================================

// El texto de cada campo obligatorio cuando está vacío. La clave es el name (o el id, si no tiene name)
const OBLIGATORIOS = {
  nombre: "Escribe tu nombre y apellidos.",
  email: "Escribe tu correo electrónico.",
  email2: "Repite tu correo electrónico.",
  nacimiento: "Selecciona tu fecha de nacimiento.",
  modalidad: "Selecciona una modalidad.",
  taller: "Selecciona un taller.",
  condiciones: "Debes aceptar las condiciones."
};


function mensajeDe(campo) {

  const estado = campo.validity;

  if (estado.valueMissing) {
    return OBLIGATORIOS[campo.name || campo.id];
  }

  if (estado.typeMismatch) {
    return "Introduce un correo electronico valido.";
  }

  if (estado.tooShort) {
    return `Escribe al menos ${campo.minLength} caracteres.`;
  }

  if (estado.patternMismatch || estado.rangeUnderflow || estado.rangeOverflow) {
    return campo.title;
  }

  if (estado.customError) {
    return campo.validationMessage;
  }

  return "Revisa el valor introducido.";

}


// ============================================================
// Ejercicio 4 · La validación al enviar
// Hasta que llegues a este ejercicio, deja la función vacía: el formulario se enviará solo
// ============================================================

form.addEventListener("submit", (e) => {
  
  e.preventDefault();

  comprobarCorreos();

  const campos = e.target.querySelectorAll("input, select, textarea");

  let primerError = null;

  const radiosComprobados = [];

  campos.forEach((campo) => {
    if (campo.type === "radio") {
      if (radiosComprobados.includes(campo.name)){
        return;
      }

      radiosComprobados.push(campo.name);
    }

    if (campo.checkValidity()) {
      quitarError(campo);
    } else {

      mostrarError(campo, mensajeDe(campo));

      if (primerError === null) {
        primerError = campo;

      }
    }
  });
  if (primerError !== null) {

    primerError.focus();
    return;

  }

  e.target.submit();

});




// ============================================================
// Ejercicio 5 · Eventos de los campos
// ============================================================

const comentarios = document.querySelector("#comentarios");
const contador = document.querySelector("#contador");

comentarios.addEventListener("input", () => {

  contador.textContent= comentarios.value.length;

});

const nivel = document.querySelector("#nivel");
const valorNivel = document.querySelector("#valorNivel");

nivel.addEventListener("input", () => {

  valorNivel.textContent = nivel.value;

});

const email = document.querySelector("#email");
const email2 = document.querySelector("#email2");


function comprobarCorreos() {

  if (email2.value !== "" && email.value !== email2.value) {

    email2.setCustomValidity("Los dos correos no coinciden.");

  } else {

    email2.setCustomValidity("");

  }

}

email.addEventListener("input", () => {
  comprobarCorreos();

  if (email2.classList.contains("is-ivalid") && email2.checkValidity()) {
    quitarError(email2);
  }
});

email2.addEventListener("input", () => {

  comprobarCorreos();

  if (email2.checkValidity()) {
    quitarError(email2);
  }

});


form.querySelectorAll("input, select, textarea").forEach((campo) => {

  campo.addEventListener("input", () => {

    if (campo.checkValidity()) {
      quitarError(campo);
    }

  });

  campo.addEventListener("change", () => {

    if (campo.checkValidity()) {
      quitarError(campo);
    }

  });

});

form.addEventListener("reset", () => {

  setTimeout(() => {

    const campos = form.querySelectorAll("input, select textarea");

    campos.forEach((campo) => {
      quitarError(campo);
    });

    email2.setCustomValidity("");
    contador.textContent = "0";

    valorNivel.textContent = "5";

    console.log("Formulario reiniciado");

  }, 0 );
});



// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

const verResumen = document.querySelector("#verResumen");
const tablaResumen = document.querySelector("#tablaResumen");
const avisoResumen = document.querySelector("#avisoResumen");


verResumen.addEventListener("click", () => {

  const datos = new FormData(form);

  tablaResumen.textContent = "";

  let cantidad = 0;

  for (const [campo, valor] of datos) {

    const fila = document.createElement("tr");

    const nombreCampo = document.createElement("th");
    const valorCampo = document.createElement("td");

    nombreCampo.textContent = campo;

    if (valor === "") {
      valorCampo.textContent = "(vacío)";
    } else {
      valorCampo.textContent = valor;
    }

    fila.append(nombreCampo, valorCampo);

    tablaResumen.append(fila);

    cantidad++;

  }

  avisoResumen.textContent =  `Hay ${cantidad} datos en el formulario. «Repite el correo» no aparece porque no tiene atributo name.`;

  console.log("Resume:" , datos);

});

console.log("Formulario preparado");
