'use strict'

/* --------------------------------- conexión con html ------------------------------- */
const imagenUno = document.querySelector('#img1');
const imagenDos = document.querySelector('#img2');
const imagenTres = document.querySelector('#img3');
const imagenCuatro = document.querySelector('#img4');
const vtnAcierto = document.querySelector('#hWindow');
const vtnError = document.querySelector('#eWindow');
const btnPress = document.querySelector('#btnAudio');
const btnSiguiente = document.querySelector('#nextBtn');
const btnRepetir = document.querySelector('#repeatBtn');
const btnSalir = document.querySelectorAll('#exitBtn');
const vtnFinal = document.querySelector('#endWindow');
const btnReiniciar = document.querySelector('#restartBtn');

// address of our api

const URLAPI = 'http://localhost:3000/api/v1/question/'

const contenedorImagen = [imagenUno, imagenDos, imagenTres, imagenCuatro];


async function fetchData(url){
    try{
        let objetoJSON = await fetch(url);
        // En esta linea consigo el objeto que se envia, ya que se parsea 
        let objeto = await objetoJSON.json();
        return objeto; // retornamos el objeto parseado
        
    }catch(error){
        console.error(error);
    }
}

// Estableceremos las imagenes del arreglo en nuestros botones 

async function setImages(){
    //Obtenemos el array de imagenes 
    try {
        const imageArray = await fetchData(URLAPI+'/createQuestion');// Esta promesa me tiene que dar 4 string que serán las src de las imagenes
    } catch (error) {
        
    }

}







async function fetchPost(url){
    const respuesta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            { contenedorImagen }//No pasa el objeto por referencia 
            ),
      });
      const parseada = await respuesta.json();
      console.log(parseada);
}


fetchPost(URLAPI + '/createQuestion');