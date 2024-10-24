const header = document.querySelector(".header");
const btnMenu = document.querySelector(".header__figure");
const menu = document.querySelector('.header__ul');
const imageMenu = document.querySelector('.header__img');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const contactsOption = document.querySelector('.li');
const contacts = document.querySelector('.li__ul');

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
        imageMenu.src ="https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesParaProyectoGeneral/iconmonstr-x-mark-circle-lined-24.png?raw=true";  
        main.classList.add('inactive');
        footer.classList.add('inactive');
        menu.classList.remove('inactive');
    }
    else{   
        imageMenu.src ="https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesParaProyectoGeneral/iconmonstr-menu-circle-lined-24.png?raw=true";     
        main.classList.remove('inactive');
        footer.classList.remove('inactive');
        menu.classList.add('inactive');
        contacts.classList.add('inactive');
    }
}
btnMenu.addEventListener('click', openCloseMenu);
contactsOption.addEventListener('click', openMenuContact);
