const pantallaContactos = document.querySelector('.pantalla-contactos');
const itemContacos = document.querySelector('.item-contacto');


itemContacos.addEventListener('click', mostrarContactos);

function mostrarContactos(){
    pantallaContactos.classList.toggle('inactivo');
}
// El html recibe el evento click, cualquier parte de este
document.addEventListener('click', eventoRecibido);

function eventoRecibido(event) {
  let clickedElement = event.target;
  console.log(clickedElement);
  let estamosEnPantallaContacots = clickedElement.classList.contains('pantalla-contactos');
  if(!estamosEnPantallaContacots && clickedElement != itemContacos){
    pantallaContactos.classList.add('inactivo');
  }
}