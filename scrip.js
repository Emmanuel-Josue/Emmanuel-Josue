const pantallaContactos = document.querySelector('.opcion-contenedor-contactos');
const itemContacos = document.querySelector('.item-contacto');

itemContacos.addEventListener('click', mostrarContactos);

function mostrarContactos(){
    pantallaContactos.classList.remove('inactivo');
}
// MEJORAR LA LOGICA
document.addEventListener('click', function(event) {
    let clickedElement = event.target;
    let estaCerrado = pantallaContactos.classList.contains('inactivo');

    
    // Verificar si el clic fue en un elemento diferente al que deseas
    if ( clickedElement !== pantallaContactos && clickedElement !== itemContacos) {
      pantallaContactos.classList.add('inactivo');
    }
    /*
    else if(clickedElement.classList.contains('item-contacto') === itemContacos.classList.contains('item-contacto')){
        pantallaContactos.classList.toggle('inactivo')
    }
    */
  });