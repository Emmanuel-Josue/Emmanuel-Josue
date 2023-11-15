const titleTwo = document.querySelector('#titleTwo');
const imageButton = document.querySelector('#imageButton');
const header = document.querySelector(".header");
const btnMenu = document.querySelector(".header__figure");
const menu = document.querySelector('.header__ul');
const imageMenu = document.querySelector('.header__img');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const contactsOption = document.querySelector('.li');
const contacts = document.querySelector('.li__ul');


// Function

function displace(component){
    component.scrollIntoView({ behavior: 'smooth' });
}

function scrollDown(){
    displace(imageButton);
}
function scrollUp() {
    displace(titleTwo);
}
function calculate_height(element){
     return element.offsetHeight;
}
function styleSetHeight(element){
    // Calculamos la altura del header 
    let height = header.offsetHeight;
    // Obtenemos la altura total del dispositivo
    let deviceHeight = window.innerHeight;
    //Obtenemos el número que definira la altura del menu
    let menuHeight = deviceHeight - height;
    element.style.height = menuHeight + "px";
}
function styleSetTop(element) {
    // Calculamos la altura del header 
    let height = header.offsetHeight;
    //Colocamos las propiedades left y top 
    element.style.top = height + "px";
}
function openMenuContact() {
    styleSetHeight(contacts);
    contacts.classList.remove('inactive');
}

function openCloseMenu() {        
    if(menu.classList.contains('inactive')){   
        styleSetHeight(menu);     
        styleSetTop(menu);
        imageMenu.src ="../recursos/imagenes/imagenesParaProyectoGeneral/iconmonstr-x-mark-circle-lined-24.png";
        main.classList.add('inactive');
        footer.classList.add('inactive');
        menu.classList.remove('inactive');
    }
    else{   
        imageMenu.src ="../recursos/imagenes/imagenesParaProyectoGeneral/iconmonstr-menu-circle-lined-24.png";     
        main.classList.remove('inactive');
        footer.classList.remove('inactive');
        menu.classList.add('inactive');
        contacts.classList.add('inactive');
    }
}

// Event

titleTwo.addEventListener('click', scrollDown);
imageButton.addEventListener('click', scrollUp);
btnMenu.addEventListener('click', openCloseMenu);
contactsOption.addEventListener('click', openMenuContact);

