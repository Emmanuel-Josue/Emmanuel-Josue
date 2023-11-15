const main = document.querySelector('.main');
const header = document.querySelector(".header");
const pAutor = document.querySelector('.footer__p');

function positionMain(){
    // Calculamos la altura del header 
    let height = header.offsetHeight;
    // Calculamos la altura del parrafo que tiene el nombre del autor
    let heigtPAutor = pAutor.offsetHeight;
    // Obtenemos la altura total del dispositivo
    let deviceHeight = window.innerHeight;
    //obtenemos la altura que debe tener el main 
    let heightMain = deviceHeight - (height + heigtPAutor);
    
    main.style.height = heightMain + 'px';

}

positionMain();