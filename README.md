# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Hacker edition](#7-hacker-edition)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para pedir project feedback](#9-para-pedir-project-feedback)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en
muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, etc.) y
es muy común encontrar varios archivos en ese formato en cualquier tipo de
repositorio (empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://github.com/Laboratoria/bootcamp/assets/12631491/fc6bc380-7824-4fab-ab8f-7ab53cd9d0e4)

## 2. Resumen del proyecto

En este proyecto desarrollarás una librería en Node.js que funcionará como
herramienta para analizar links dentro de archivos Markdown. Esta librería
estará disponible de dos formas: como un módulo publicado en GitHub, que las
usuarias podrán instalar e importar en otros proyectos, y como una interfaz
de línea de comandos (CLI) que permitirá utilizar la librería directamente
desde el terminal.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, etc.

En esta oportunidad nos alejamos un poco del navegador para construir una
librería que interactua con el sistema archivos y un script que se ejecute
usando Node.js. Aprenderemos cómo buscar y leer archivos, cómo hacer consultas
de red, sobre procesos (`process.env`, `process.argv`, ...), etc.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrolladora porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otras developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.
Al finalizar, podrás instalar esta librería utilizando NPM (Node Package
Manager), que facilita la búsqueda e instalación de librerías de Node a
través de su registro y también de GitHub. Una vez que hayas subido la
librería a tu repositorio público, será accesible para otras developers.

## 3. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Recursión o recursividad**

  <details><summary>Links</summary><p>

  * [Píldora recursión - YouTube Laboratoria Developers](https://www.youtube.com/watch?v=lPPgY3HLlhQ)
  * [Recursión o Recursividad - Laboratoria Developers en Medium](https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727)
</p></details>

- [ ] **Módulos de CommonJS**

  <details><summary>Links</summary><p>

  * [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
</p></details>

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Pruebas de compatibilidad en múltiples entornos de ejecución**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Node.js

- [ ] **Instalar y usar módulos con npm**

  <details><summary>Links</summary><p>

  * [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
</p></details>

- [ ] **Configuración de package.json**

  <details><summary>Links</summary><p>

  * [package.json - Documentación oficial (en inglés)](https://docs.npmjs.com/files/package.json)
</p></details>

- [ ] **Configuración de npm-scripts**

  <details><summary>Links</summary><p>

  * [scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)
</p></details>

- [ ] **process (env, argv, stdin-stdout-stderr, exit-code)**

  <details><summary>Links</summary><p>

  * [Process - Documentación oficial (en inglés)](https://nodejs.org/api/process.html)
</p></details>

- [ ] **File system (fs, path)**

  <details><summary>Links</summary><p>

  * [File system - Documentación oficial (en inglés)](https://nodejs.org/api/fs.html)
  * [Path - Documentación oficial (en inglés)](https://nodejs.org/api/path.html)
</p></details>

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* El rango de tiempo estimado para completar el proyecto es de 3 a 5 sprints.

* 📝**Consideramos los hitos 1 y 2 como los criterios de aceptación mínimos del proyecto.** 👀

* Enfócate en aprender y no solamente en "completar" todos los hitos del proyecto.

* Te sugerimos que no intentes saber todo de Node.js antes de empezar a codear.
  No es necesario tomar un curso de Node.js completo. Aprenderás a medida que
  avances en el proceso.

## 5. Consideraciones técnicas

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

* En este proyecto hay que adoptar las convenciones que los proyectos open
  source de software usan para hacer seguimiento. Vas a usar Github projects
  con **[issues](https://docs.github.com/es/issues)** y
  **[milestones](https://docs.github.com/es/issues/using-labels-and-milestones-to-track-work/about-milestones)**
  para priorizar y organizar el trabajo y hacer seguimiento de tu proceso.
  Dentro de cada milestone crearás los issues que
  consideres necesarios.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) deben estar implementados en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los **tests unitarios** deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto **no está permitido** utilizar `async/await`.

* Para este proyecto, hay que decidir si vas a utilizar los módulos CommonJS
  o ES Modules. Los módulos CommonJS usan la síntaxis `require` y es el formato
  de módulos original de Node.js. Si prefieres utilizar ES Modules
  `(import/export)`, puedes hacerlo, pero ten en cuenta que
  deberás configurar adecuadamente tu proyecto para que Node.js pueda utilizar
  este formato. Puedes encontrar más información al respecto
  [aquí](https://nodejs.org/api/packages.html#determining-module-system). Además,
  tendrás que configurar Jest para ello también, siguiendo los
  [siguientes pasos](https://jestjs.io/docs/ecmascript-modules).
  Ten en consideración que Jest considera esto aún como un _feature
  experimental_.

* Para este proyecto, te recomendamos evitar el uso de la función síncrona
  `readFileSync` para leer archivos. En su lugar, te sugerimos abordar este
  desafío de manera asíncrona utilizando `readFile`. Además, si utilizas el
  módulo `fs/promises`, podrás utilizar la versión promisificada de las
  funciones como
  [`readFile`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fspromisesreadfilepath-options).

* Para disminuir la complejidad de tu algoritmo recursivo, te recomendamos
  utilizar la versión síncrona de la función para leer directorios, `readdirSync`.

### Descripción de los archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar **una** función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint, si deseas agregar reglas adicionales
  como Airbnb deberás modificar este archivo.
* `.gitignore` para ignorar `node_modules` u otras directorios que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos tests.

Este proyecto lo puedes ir construyendo por hitos. A continuación te sugerimos algunos:

## 6. Hitos

Recuerda que la mejor manera de abordar un problema es descomponiéndolo en
problemas más pequeños. Por esta razón, te recomendamos que completes este
proyecto trabajando por hitos. A continuación, encontrarás los hitos que puedes
seguir:

* [Hito 1](./docs/01-milestone.md)
* [Hito 2](./docs/02-milestone.md)
* [Hito 3](./docs/03-milestone.md)
* [Hito 4](./docs/04-milestone.md)
* [Hito 5](./docs/05-milestone.md)

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes agregar la propiedad `line` a cada objeto `link` indicando en qué línea
  del archivo se encontró el link.
* Puedes agregar más estadísticas.
* Integración continua con Travis o Circle CI.

***

## 8. Pistas, tips y lecturas complementarias

### **Inicia con un diagrama de flujo y/o pseudocódigo**

Este proyecto difiere de los anteriores en los que has trabajado, ya que no
implica una interfaz web. Todo el desarrollo se llevará a cabo en tu editor
y en la consola/terminal.

El proyecto se basa en un proceso lógico compuesto por diferentes pasos. Para
comprender mejor lo que debes hacer y planificar tus tareas y objetivos, se
recomienda desglosar el proceso en pasos y visualizarlo mediante un [diagrama
de flujo](https://app.diagrams.net/) o escribiendo pseudocódigo

### **Sugerencias de implementación**

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas
formas, tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el parseado (análisis) del Markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):

* Usando un módulo como
  [Markdown-it](https://www.npmjs.com/package/markdown-it), que nos devuelve
  un arreglo de tokens que podemos recorrer para identificar los links.

* También podríamos usar una combinación de varios módulos (podría ser válido
  transformar el Markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
  y de ahí extraer los links con una librería de DOM como [JSDOM](https://www.npmjs.com/package/jsdom)
  o [Cheerio](https://cheerio.js.org/) entre otras).

* Usando un [custom renderer de la librería marked](https://marked.js.org/using_pro#renderer)
  (new marked.Renderer()).

* Siguiendo otro camino completamente diferente, podríamos usar expresiones
  regulares (RegExp).

No dudes en consultar a tus compañeras, coaches y/o el foro de la comunidad
si tienes dudas existenciales con respecto a estas decisiones. No existe una
"única" manera correcta 😉 Lo importante es que entiendas el código que escribes
para lograr la tarea.

### **¿CommonJS Modules o ES Modules, cual debería usar?**

Desde el principio, es importante que tomes una decisión respecto a qué tipo de
módulos utilizarás: ES Modules (import/export) o CommonJS Modules
(require/module.exports). Ambos cumplen el mismo propósito de modularizar y
compartir código. Hasta ahora, Node.js ha empleado mayormente los CommonJS
Modules (require) y funcionan sin necesidad de configuraciones adicionales.
Sin embargo, en las versiones más recientes de Node.js, también puedes optar
por utilizar ES Modules, aunque esto requerirá algunos pasos de configuración
adicionales. Si decides utilizar ES Modules, asegúrate de investigar cómo
configurar tu proyecto según la versión de Node que estés utilizando. Ten en
cuenta esta decisión desde el inicio de tu proyecto, ya que afectará la forma
en que importas y exportas módulos en tu código.

### **¿Cuáles son partes de node son relevantes para este proyecto?**

Node ofrece una amplia gama de módulos y funciones, pero no es necesario
conocerlos todos antes de comenzar a programar. Los hitos se refieren a partes
específicas de Node que puedes explorar, como los módulos `fs` (`readFile`,
`readdirSync`) y `path`.
Estos módulos son útiles para realizar operaciones de lectura y escritura de
archivos, así como para manipular y trabajar con rutas de archivos en tu código.
A medida que avanzas en tu proyecto, puedes investigar más sobre estos módulos
y cómo utilizar sus funciones para lograr tareas específicas. ¡No dudes en
sumergirte en la programación y explorar los partes relevantes de Node mientras
avanzas en tu proyecto!

### **¿Cómo hago para que mi módulo sea instalable con npm?**

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente

Por ejemplo, el [`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/curriculum-parser`.

### Recursos

#### Hito 1

* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js path - Documentación oficial](https://nodejs.org/api/path.html)
* [Cómo crear promesas - javascript.info](https://es.javascript.info/promise-basics)

#### Hito 2

* [Validación de URLs con peticiones http - luisrrleal.com](https://luisrrleal.com/blog/como-hacer-peticiones-http-en-javascript)

#### Hito 3

* [Cómo iterar un arreglo de promesas - mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

#### Hito 4

* [Tú, yo y package.json](https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3)
* [Cómo crear y publicar packpage - npmjs.com](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Una guía para crear un paquete de línea de comandos NodeJS - medium.com](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

#### Hito 5

* [Qué es la recursividad y cómo crear funciones recursivas - javascript.info](https://es.javascript.info/recursion)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [Patrones para coincidencia de caracteres con expresiones regulares - mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions)

## 9. Para pedir project feedback

* [ ] Un board en github projects con el backlog para la implementación de la
  librería.

* [ ] un `README.md` con documentación técnica de la librería y una guía de
  uso e instalación de la librería.

* [ ] un API `mdLinks(path, validate)` con los siguientes requisitos
  (Hito 1 y 2 son los mínimos):

  - El módulo debe exportar una función que cumpla con la interfaz (API)
    requerida. (Hito 1)
  - Deberá implementar el soporte para archivos individuales. (Hito 1)
  - Deberá implementar la funcionalidad de validación. (Hitos 1 y 2)
  - Deberá ofrecer soporte para directorios. (Hitos 1 al 3)
  - Deberá ofrecer soporte para directorios que pueden contener otros
    directorios. (Hitos 1 al 5)

* [ ] un CLI (Command Line Interface) que se ejecuta sin errores
  y tiene el output esperado. Además acepta los parámetros
  `--validate` y `--stats`. Y expone un ejecutable
  md-links en el path (configurado en el `package.json`)
* [ ] Pasa tests y linters (`npm test`). Tests unitarios cubren un mínimo
  del 70% de coverage tests, es decir statements, functions, lines y branches.




*ESTE ES UN APARTADO DE LOS PASOS QUE REALICE EN MI PROYECTO!!

## Proceso de Desarrollo

### Estructura de Archivos

El proyecto se estructura de la siguiente manera:

- `DEV010-MD-LINKS/`: Carpeta que contiene el código fuente de la librería.
  - `index.js`: Archivo principal de la librería que exporta la función `mdLinks`.
  - `app.js`: Archivo donde tengo las microfunciones de la funcion principal.
- `example/`: Carpeta que contiene 2 archivos de prueba que son: readmeEjemplo.md y archivoSinEnlaces.md
- `tests/`:  Carpeta Contiene los tests unitarios para asegurar la calidad del código.
  - `md-links.spec.js`: Archivo donde estan los test del hito 1 y 2.
- `package.json`: Archivo de configuración del proyecto, incluye dependencias y scripts.
- `README.md`: Documentación detallada sobre el proyecto, su instalación y uso.

### Desarrollo del Proyecto

#### Hito 1: Función Principal mdLinks

El desarrollo de `mdLinks` se enfocó inicialmente en cumplir con la interfaz requerida y manejar los siguientes casos:

1. Verificar la ruta proporcionada y convertirla a una absoluta si es necesario.
2. Leer el archivo Markdown de la ruta proporcionada y extraer los enlaces.
3. Resolver la promesa con un array de objetos, cada uno representando un enlace con su texto y href correspondiente.

Para lograr esto, se crearon y utilizaron funciones auxiliares dentro de `app.js`, lo cual mantuvo el código de `index.js` limpio y enfocado en la lógica de flujo.

#### Hito 2: Validación de Enlaces

Con la extracción de enlaces funcionando, el siguiente paso fue implementar la validación:

1. Se amplió la función `mdLinks` para aceptar un segundo argumento booleano `validate`.
2. Cuando `validate` es `true`, `mdLinks` utiliza `Promise.all` para validar todos los enlaces extraídos en paralelo.
3. Cada enlace se pasa a `validateLink`, una función auxiliar de `app.js` que verifica el estado del enlace realizando una petición HTTP y devuelve una promesa con los resultados de la validación.

Esta funcionalidad permite a los usuarios de la librería no solo extraer enlaces sino también verificar si están rotos o siguen siendo válidos.

#### Testing y Calidad de Código

Para garantizar que la librería funciona como se espera, se implementaron pruebas unitarias para cada función auxiliar y para la función principal `mdLinks`. Estas pruebas verifican tanto el comportamiento esperado como el manejo de errores.

El uso de ESLint ayudó a mantener el código limpio y siguiendo un estilo consistente, lo cual es crucial para la mantenibilidad y legibilidad del código.

### Aprendizajes Clave

A través de la realización de este proyecto, he reforzado mis conocimientos en varios aspectos importantes del desarrollo con Node.js:

- La creación y uso de módulos CommonJS.
- La lectura de archivos y análisis de contenido en Node.js.
- El uso de promesas para manejar la asincronía de manera eficiente.
- La implementación de pruebas unitarias con Jest para asegurar la calidad del software.
- El desarrollo y publicación de una librería en Node.js que es útil, reutilizable y fácil de instalar y usar por otros desarrolladores.

Este proyecto ha sido una oportunidad excelente para aplicar las buenas prácticas de desarrollo de software y diseño de API que he aprendido, y estoy emocionado/a de ver cómo esta librería puede ser utilizada y mejorada en el futuro.

- Este documento y el proyecto en su estado actual reflejan el cumplimiento de los requerimientos hasta el Hito 2."

## Uso

Para ejecutar la herramienta `mdLinks` y analizar los enlaces dentro de tus archivos Markdown, sigue los siguientes pasos:

1. Abre tu terminal o línea de comandos.
2. Navega hasta el directorio donde se encuentra el archivo `index.js` de la librería `mdLinks`.
3. Ejecuta el script proporcionando la ruta al archivo o directorio que deseas analizar. Por ejemplo:

```bash
node index.js

Al ejecutar el comando, obtendrás una salida en la consola con los enlaces encontrados. Aquí hay un ejemplo de cómo se vería la salida para los enlaces encontrados y los enlaces validados:

Enlaces encontrados:

[
  {
    "text": "Node.js",
    "href": "https://nodejs.org/es/",
    "ruta": "C:\\ruta\\al\\archivo.md"
  },
  {
    "text": "motor de JavaScript V8 de Chrome",
    "href": "https://developers.google.com/v8/",
    "ruta": "C:\\ruta\\al\\archivo.md"
  }
]

Enlaces validados:

[
  {
    "text": "Node.js",
    "href": "https://nodejs.org/es/",
    "ruta": "C:\\ruta\\al\\archivo.md",
    "status": 200,
    "ok": "OK"
  },
  {
    "text": "Enlace roto",
    "href": "https://enlace-que-no-existe.com",
    "ruta": "C:\\ruta\\al\\archivo.md",
    "status": 404,
    "ok": "Fail"
  }
]

## Agradecimientos

Gracias por visitar y usar `mdLinks`. Espero que esta herramienta te sea de gran ayuda en la gestión y validación de tus enlaces Markdown.

Si tienes sugerencias de mejora, no dudes en abrir un issue o enviar un pull request. Cualquier contribución es bienvenida y juntos podemos hacer de `mdLinks` una herramienta aún mejor para todos.

¡Feliz codificación!


