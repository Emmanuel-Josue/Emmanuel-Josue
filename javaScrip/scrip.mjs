// ---------------------------- Importaciones ----------------------------------------------


const pantallaContactos = document.querySelector(".pantalla-contactos");
const itemContacos = document.querySelector(".item-contacto");
const pantallaProyectos = document.querySelector(".pantalla-proyectos");
const itemProyectos = document.querySelector(".item-proyectos");
const btnRelacionAudioImagen = document.querySelector(".nombre-proyecto");
const elementoBaner = document.querySelector(".baner");
const elementoMenu = document.querySelector(".menu");



function mostrarContactos() {
  calcularPosicionDeTop();
  pantallaContactos.classList.toggle("inactivo");
}
function mostrarProyectos() {
  calcularPosicionDeTop();
  pantallaProyectos.classList.toggle("inactivo");
}

// Creamos las funciones que determinan si se cierra el componente o no
const cerrarPantallaContactos = crearFuncionCerrarComponente(
  "pantalla-contactos",
  itemContacos,
  pantallaContactos
);
const cerrarPantallaProyectos = crearFuncionCerrarComponente(
  "pantalla-proyectos",
  itemProyectos,
  pantallaProyectos
);


// Funcion generica para determinar si un componente se cierra o no.
function crearFuncionCerrarComponente(
  selectorComponente,
  objetoComponenteExento,
  objetoACerrar
) {
  return function cerrarComponente(event) {
    //Nos dice en qué componenete estamos 
    let clickedElement = event.target;
    // Nos dice si en el componenete en el que estasmos tiene la clase que le indicamos 
    let estamosEnComponente =
      clickedElement.classList.contains(selectorComponente);
    if (!estamosEnComponente && clickedElement != objetoComponenteExento) {
      objetoACerrar.classList.add("inactivo");
    }
  };
}

/*
  Una diferencia muy puntual en este punto en el que me acabo de dar cuenta es que en el lenguaje Java para llamar 
  a una función adentro de otra función en el espacio de los parentesis podemos llamar a la segunda función y en ese 
  mismo espacio mandarle los argumentos que necesitamos lo cual en JavaScrip no es posible ya que para hacer 
  algo así debemos utiliar el concepto de retornar una función, crear primero una función en donde cambiaremos las
  variables en su interior y luego guardaremos esta nueva función en una variable para que de esta manera tengamos
  una fución con la misma estructura pero diferentes variables ya que en este lenguaje solo podemos pasar referencias. 
*/

// Colocaremos el top al elemento mostrar contactos y proyectos

function calcularPosicionDeTop(params) {
  let largoBaner = elementoBaner.offsetHeight;
  let largoMenu = elementoMenu.offsetHeight;
  let largoPantallaContactos = largoBaner + largoMenu;
  let largoString = largoPantallaContactos.toString();
  pantallaContactos.style.top = largoString + "px";
  pantallaProyectos.style.top = largoString + "px";
}

function abrirPagina() {
  window.location.href = '../html/relacionAudioImagen.html';
}


// ------------------------------------------ Eventos --------------------------------------

itemContacos.addEventListener("click", mostrarContactos);
itemProyectos.addEventListener("click", mostrarProyectos);

// El html recibe el evento click, cualquier parte de este
document.addEventListener("click", cerrarPantallaContactos);
document.addEventListener("click", cerrarPantallaProyectos);

btnRelacionAudioImagen.addEventListener("click", abrirPagina);

function saludar() {
  console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAA');
  
}