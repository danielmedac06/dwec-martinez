# Tarea 3: Variables, tipos y conversiones

## Contenido
- `index.html`: página con las cuatro actividades, tablas y botones.
- `js/app.js`: funciones de JavaScript para ejecutar cada ejercicio.
- `capturas/`: carpeta para guardar las cinco capturas propias.

## Cómo probarlo
1. Sustituye `[Tu nombre y apellidos]` en el título, la barra superior y el pie de página.
2. En `js/app.js`, cambia los datos de ejemplo del ejercicio 4 por los tuyos.
3. Abre `index.html` en el navegador.
4. Pulsa cada botón y abre las herramientas de desarrollador con F12 para ver la consola.
5. Comprueba que los resultados coinciden con las tablas. Si una predicción no coincide, corrige la tabla y explica el motivo.

## Capturas que debo añadir
1. `pagina-completa.png`: página entera y nombre visible.
2. `ejercicio1.png`: consola al ejecutar el ejercicio 1.
3. `ejercicio2.png`: consola al ejecutar el ejercicio 2.
4. `ejercicio3.png`: consola al ejecutar el ejercicio 3.
5. `ejercicio4.png`: consola al ejecutar el ejercicio 4 y prueba del error al reasignar una `const`.

Las capturas deben hacerse en mi propio ordenador; no se incluyen capturas inventadas.

## Reflexión (revisar después de ejecutar)
Me resultó intuitiva la conversión `String(123)`, porque el número pasa a ser texto. También entendí que `Number("123")` devuelve el número 123. Me sorprendió que `Number("")` devuelva 0 y que `Number("12abc")` produzca `NaN`. Vi que `Boolean("texto")` devuelve `true`, aunque el contenido no sea la palabra “true”. En las comparaciones, `5 == "5"` devuelve `true`, pero `5 === "5"` devuelve `false` porque los tipos son diferentes. Las plantillas de cadena permiten incluir variables dentro del texto usando `${}`. Después de ejecutar los ejercicios, debo adaptar esta reflexión a lo que realmente haya observado.

## Fuentes consultadas
- Temario de la asignatura, Tema 3: *El lenguaje de programación de clientes*.
- MDN, documentación de JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript

## Uso de IA
He utilizado ChatGPT como apoyo para organizar la práctica y revisar ejemplos básicos. El README.md me lo ha creado la IA, y alguna duda de comandos que no comprendía me ha ayudado a saber comprender las cosas mas fáciles.