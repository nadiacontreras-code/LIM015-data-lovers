# POKEDEX Lovers

## 1. Descripción proyecto

El producto está diseñado pensando en satisfacer las necesidades de nuestros usuarios (niños, jóvenes o adultos amantes del juego PokemonGo), quienes mediante una encuesta realizada por nosotras, se identifico que buscan información relevante sobre los Pokemones (nombre, número, descripción del pokemon, tipo y rareza) para identificarlos y tener datos importantes antes de jugar; clasificar a los Pokemones o Armar una mejor estrategia de batalla.

## 2. Definición del producto

Los resultafos de la encuesta nos ayudaron a identificar al usuario y a filtrar información a usar en nuestro proyecto. Interpretamos a un usuario con tres necesidades y tres objetivos distintos. En base a la información procesada decidimos diseñar esta pagina donde el usuario encontrará la información que necesita de manera ordena y de fácil acceso.

## 3. Historias de usuario

### 3.1. Historia de usuario UNO:

Este usuario busca información general sobre pokemones, basicamente para conocerlos.

-  Como: Jugador del juego PokemonGo.
-  Quiero: Nombre, número y breve descripción.
-  Para: Identificar a los pokemones y tener datos básicos antes de jugar.

#### 3.1.1. Criterios de aceptación:

-  Pantalla de bienvenida
-  Buscador por número y nombre de pokémon (muestra una tarjeta con imagen y descripción breve del pokemon buscado).
-  Se muestra imágenes de pokemones por numero de orden.
-  Botón "go home" que lleva a pantalla principal.

### 3.2. Historia de Usuario DOS:
-  Como: Jugador del juego PokemonGo.
-  Quiero: Clasificar los pokemones (por tipo, orden alfabético, numérico y por rareza).
-  Para: Armar una mejor estrategia de batalla y formar equipos.

#### 3.2.1. Criterios de aceptación:
-  Botón desplegable con lista clasificada (tipo, numérico, nombre, y rareza).
-  Botón "go home" que lleva a pantalla principal.

### 3.3. Definición de Terminado

-  [x] La página web muestra el "quiero" de las historias de usuario.
-  [x] Usar la data considerando lo que el usuario especificó en el "Quiero".
-  [x] Respetar el prototipo final, de ser el caso mejorarlo.
-  [x] Aplicar UX.
-  [x] El código pasa los test (>70%).
-  [x] El código se realizó en duplas (realizar code-review, git colaborativo).
-  [x] Código está en el repositorio.
-  [x] Realizar test (demo), mínimo a tres personas, y aplicar mejoras de ser el caso.

## 4. Diseño de la Interfaz de Usuario

### 4.1 Prototipo de baja fidelidad

Creación de nuestros prototipos:

1. Diseño en papel
   ![Prototipo papel](/src/pic/PrototipoPapel2.jpg)

2. Diseño final en figma
   ![Prototipo lineal Figma](/src/pic/prototipofinal.PNG)

## 5. Testeos de usabilidad: (describir la experiencia de el uso de la pagina en DEMO de tres compañeras)

- Cuando se busca un pokemon por número, se debe digitar tres cifras, de lo contrario muestra a pokemones que coincidan con el número digitado. Para resolverlo, creamos alertas y placeholder, informando como se debe ingresar el número.

- Los botones selectores, en la primera opción (que describía el llamado a la orden) no funcionaban correctamente, porque estaban habilitados y enviaban a una pantalla vacía al hacer clic. Para resolver el problema, en la etiqueta de la primera opción se adicionó el atributo "selected disabled".
  
- Los colores aplicados fueron del agrado de los usuarios, porque son colores representativos del juego.

## 6. Plan de Acción:

-  Organización y planificación de tareas en Trello.
-  Definición de objetivos por cada sprint.
-  Elaboración de historias de usuario.
-  Estudiar y aplicar conceptos de Desarrollo Front-end.
-  Aprender a manejar comandos de Git colaborativo.
-  Elaboración del Prototipo
-  ELaboración de la estructura en HTML.
-  Aplicar correctamente el uso del DOM.
-  Manejo de Objetos de data 
-  Realizar en npm test para verificación del correcto uso del codigo.
-  Implementar hacker edition.
-  Describir proyecto en README.

## 7. Objetivos de aprendizaje

### UX

-  [x] Diseñar la aplicación pensando y entendiendo al usuario.
-  [x] Crear prototipos para obtener feedback e iterar.
-  [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
-  [x] Planear y ejecutar tests de usabilidad.

### HTML Y CSS

-  [x] Uso de HTML semántico.
-  [x] Uso de selectores de CSS.
-  [x] Construir tu aplicación respetando el diseño realizado (maquetación).
-  [x] Uso de flexbox en CSS.

### DOM

-  [x] Uso de selectores del DOM.
-  [x] Manejo de eventos del DOM.
-  [x] Manipulación dinámica del DOM (appendChild |createElement | createTextNode| innerHTML | textContent | etc.).

### JAVASCRIPT

-  [x] Uso de condicionales (if-else | switch | operador ternario).
-  [x] Uso de bucles (for | for..in | for..of | while).
-  [x] Javascript [Uso de funciones (parámetros | argumentos | valor de retorno).]
-  [x] Javascript [Manipular arrays (filter | map | sort | reduce).
-  [x] Manipular objects (key | value).
-  [x] Uso de ES Modules (import | export).
-  [x] Diferenciar entre expression y statements.
-  [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### TESTING

-  [x] Testing [Testeo unitario.]

### Estructura del código, Guía de Estilo

-  [x] Estrutura de código [Organizar y dividir el código en módulos (Modularización).
-  [x] Guia de estilo [Uso de identificadores descriptivos (Nomenclatura | Semántica).
-  [x] Guia de estilo [Uso de linter (ESLINT).

### GITHUB

-  [x] Git, GitHub [Uso de comandos de git (add | commit | pull | status | push).
-  [x] Git, GitHub [Manejo de repositorios de GitHub (clone | fork | gh-pages).
-  [x] GitHub [Colaboración en Github (branches | pull requests | |tags).

## 7. Check List

-  [x] Usa VanillaJS.
-  [x] No hace uso de `this`.
-  [x] Pasa linter (`npm run pretest`)
-  [x] Pasa tests (`npm test`)
-  [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
       lines y branches.
-  [x] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
-  [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
-  [x] Incluye historias de usuario en `README.md`.
-  [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
       `README.md`.
-  [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
       en `README.md`.
-  [ ] Incluye link a Zeplin en `README.md`.
-  [x] Incluye el listado de problemas que detectaste a través de tests de
       usabilidad en el `README.md`.
-  [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
-  [x] UI: Permite ordenar data por uno o más campos (asc y desc).
-  [x] UI: Permite filtrar data en base a una condición.
-  [x] UI: Es _responsive_.