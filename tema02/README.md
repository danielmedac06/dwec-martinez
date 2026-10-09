# Tarea 2 - Navegadores y primera página interactiva

## 1. Qué he hecho

En esta tarea he creado un pequeño sitio web con dos páginas usando HTML, Bootstrap y JavaScript.

La primera página es `index.html`. En ella he incluido una tabla con Chrome, Firefox, Safari, Edge y Opera. También he explicado los motores que utiliza cada navegador y he añadido un ejemplo de compatibilidad consultado en Can I Use.

La segunda página es `interaccion.html`. Tiene tres botones que utilizan JavaScript. El código JavaScript está guardado en el archivo `js/app.js`, tal y como pide la tarea.

Las dos páginas tienen una barra de navegación común, la etiqueta viewport y utilizan Bootstrap para adaptar el contenido a diferentes tamaños de pantalla.

## 2. Los tres botones

El botón "Saludar" muestra un `alert()` con mi nombre y deja un mensaje en la consola.

El botón "Simular un error" no muestra ninguna ventana. Utiliza `console.error()` para que el mensaje aparezca en la consola.

El botón "¿Qué navegador soy?" utiliza `navigator.userAgent`. El resultado aparece en un `alert()` y también en la consola.

## 3. Quién hace qué

En el botón "Saludar", HTML crea el botón y utiliza `onclick` para llamar a la función.

Bootstrap aporta el diseño del botón mediante sus clases, por ejemplo `btn` y `btn-primary`.

JavaScript realiza la acción. La función `saludar()` muestra el mensaje mediante `alert()` y escribe una traza con `console.log()`.

## 4. UserAgent

El `userAgent` contiene información sobre el navegador, el sistema y otros datos.

Pueden aparecer palabras como Mozilla, AppleWebKit o Safari aunque estemos utilizando otro navegador. Esto ocurre porque las cadenas UserAgent mantienen identificadores históricos y de compatibilidad.

Después de probar la página en Chrome y Firefox, compararía las dos cadenas obtenidas y señalaría las partes que cambian entre ambos navegadores.

## 5. Capturas

En la carpeta `capturas/` deben colocarse las cinco capturas hechas en mi propio ordenador:

1. `index.html` con mi nombre visible.
2. `interaccion.html` en modo móvil.
3. La consola mostrando las trazas de los tres botones.
4. El alert de "¿Qué navegador soy?" en los dos navegadores.
5. VS Code con la carpeta `tema02` y Live Server funcionando.

Las capturas deben ser propias y llevar una pequeña explicación debajo o en el README.

## 6. Fuentes consultadas

- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent
- Can I Use: https://caniuse.com/wf-css-modules

## 7. Uso de IA

He utilizado ChatGPT como ayuda para entender la tarea, organizar los archivos y revisar el código. Después he revisado el código para revisar si tenía algun fallo y poder entender porque me fallaba y poder solucionarlo.
La IA me ha generado el README.md.
