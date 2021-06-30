# POKEDEX Lovers

## 1. Descripción proyecto

El producto está diseñado pensando en satisfacer las necesidades de nuestros usuarios (niños, jóvenes o adultos principiantes o amantes del juego PokemonGo), quienes mediante una encuesta realizada por nosotros, identificamos tres historias (perfiles) de usuarios los cuales buscan
información relevante sobre los Pokemones (nombre, número, descripción del pokemon, tipo y fases de evolución) para: identificar a los pokemones y tener datos importantes antes de jugar; clasificar a los Pokemones o Armar una mejor estrategia de batalla.


## 2. Definición del producto

 El primero paso para diseñar esta pagina fue identifar las necesidades de nuestros usuarios para definir y elaborar nuestras historias de usuario,utilizando una encuesta que nos permitio adquirir datos importantes para filtrar la información clave para nuestro proyecto e interpretamos tres diferentes tipos de usuario, con tres necesidades y tres objetivos distintos. En base a la información procesada decidimos diseñar esta pagina donde el usuario encontrará la información que necesita de manera ordena y de facil acceso.

## 3. Historias de usuario
### 3.1. Historia de usuario UNO:

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias de Usuario]que representen todo lo que el usuario necesita hacer/ver.
* Como: Jugador principiante del juego PokemonGo.
* Quiero: Nombre, número y descripción del pokémon.
* Para: Identificar a los pokemones y tener datos importantes antes de jugar.

**3.1.1. Criterios de aceptación:**

- Pantalla de bienvenida
- Buscador por número y nombre de pokémon (lleva a una ventana con imagen y descripción del pokemon buscado ).
- Botón para identificarse: Principiante
- Se muestra imágenes de pokemones por numero de orden 001, 002
- Botón de retorno que nos lleva la ventana anterior

**3.1.2. Definición de Terminado**
- Datos a usar coinciden con el "quiero" de la historia de usuario.
- Solo usar la DATA que el usuario especificó en el "Quiero"
- Respetar el prototipo final, de ser el caso mejorarlo.
- Aplicar UX
- El código pasa los test (>70%)
- El código se realizó en duplas (realizar code-review, git colaborativo)
- Código está en el repositorio
- Realizar test (demo), mínimo a tres personas, y aplicar mejoras de ser el caso.


## 4. Diseño de la Interfaz de Usuario

### 4.1 Prototipo de baja fidelidad

Creación de nuestros prototipos:
1. Diseño en papel
 ![Prototipo papel](/src/pic/prototipopapel.jpg)

2. Diseño lineal en figma
![Prototipo lineal Figma](/src/pic/PrototipoLinealFigma.JPG)

1. Diseño final en figma


## 5. Testeos de usabilidad: (describir la experiencia de el uso de la pagina en DEMO de tres compañeras)

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.
## 6. Plan de Acción:
 - Organización y planificación de tareas en Trello.
 - Definición de obajetivos por cada sprint.
 - Elaboración de historias de usuario.
 - Estudiar y aplicar conceptos de Desarrollo Front-end.
 - Aprender a manejar comandos de Gitcolaborativo.
 - Elaboración del Prototipo
 - ELaboración de la estructura en HTML.
 - Aplicar correctamente el uso del DOM.
 - Manejo de Objetos de data Pokemon.js
 - Realizar en npm test para verificación del correcto uso del codigo.
 - 
## 7. Objetivos de aprendizaje
### UX 
* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
* [ ]Planear y ejecutar tests de usabilidad.

### HTML Y CSS

* [ ] Uso de HTML semántico.
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] Uso de flexbox en CSS.

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] Manipulación dinámica del DOM (appendChild |createElement | createTextNode| innerHTML | textContent | etc.).
  
### JAVASCRIPT

* [ ] Uso de condicionales (if-else | switch | operador ternario).
* [ ] Uso de bucles (for | for..in | for..of | while).]
* [ ] Javascript [Uso de funciones (parámetros | argumentos | valor de retorno).]
* [ ] Javascript [Manipular arrays (filter | map | sort | reduce).
* [ ] Manipular objects (key | value).
* [ ] Uso de ES Modules (import | export).
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### TESTING

* [ ] Testing [Testeo unitario.]

### Estructura del código, Guía de Estilo

* [ ]  Estrutura do código [Organizar y dividir el código en módulos (Modularización).
* [ ] Guia de estilo [Uso de identificadores descriptivos (Nomenclatura | Semántica).
* [ ] Guia de estilo [Uso de linter (ESLINT).

### GITHUB

* [ ] Git, GitHub [Uso de comandos de git (add | commit | pull | status | push).
* [ ] Git, GitHub [Manejo de repositorios de GitHub (clone | fork | gh-pages).
* [ ] GitHub [Colaboración en Github (branches | pull requests | |tags).

## 7. Check List

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.