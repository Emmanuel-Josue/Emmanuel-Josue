'use strict'
import { Sound } from './audio.js'
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
const btnSalir = document.querySelectorAll('.exitBtn');//resolver esto 
const vtnFinal = document.querySelector('#endWindow');
const btnReiniciar = document.querySelector('#restartBtn');
let currentSound;
// address of our api

const URLAPI = 'http://programadorenproceso/api/v1/'

const contenedorImagen = [imagenUno, imagenDos, imagenTres, imagenCuatro];

function play(){
    currentSound.play();
}
function setImages(array){
    imagenUno.src = array[0];
    imagenDos.src = array[1];
    imagenTres.src = array[2];
    imagenCuatro.src = array[3];
}
function createFunctionOfReply(number){
    return async function(){
        // btnPress.classList.add('inactive')// No estoy seguro de que esta linea tenga que ir aquí 
        const answerObjet = await fetchData(URLAPI+'question/validateResponse/'+number);
        console.log('El objeto obtenido es: ' + answerObjet.answer.isItCorret);
        showWindow(answerObjet);
    }
}
function showWindow(values){
    if(values.answer.isItCorret === true && values.answer.showFinalWindow === true){
        vtnFinal.classList.remove('inactive');
    }
    else if(values.answer.isItCorret === true){
        vtnAcierto.classList.remove('inactive');
    }
    else{
        vtnError.classList.remove('inactive');
    }
}
function repeat(){
    vtnError.classList.add('inactive');
    play();
}
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
async function restart(){
    await createQuestion();
    await setAudio();
    play();
    vtnFinal.classList.add('inactive')
}
// Estableceremos las imagenes del arreglo en nuestros botones 
async function createQuestion(){
    //Obtenemos el array de imagenes 
    try {        
        const imageArray = await fetchData(URLAPI+'question/createQuestion');// Esta promesa me tiene que dar 4 string que serán las src de las imagenes
        console.log(imageArray.message);
        setImages(imageArray.arrayOfImages);
    } catch (error) {
        
    }


}
async function setAudio(){
    try {
        const audio = await fetchData(URLAPI+'question/createQuestion/getCurrentAudio');// Esta promesa me tiene que dar 4 string que serán las src de las imagenes
        console.log(audio.message);
        console.log(typeof audio.audio);
        currentSound = new Sound(audio.audio);// ¿Deberia crear siempre una instancia ? o creo una que sea global ¿Comó lo hago ? 
    } catch (error) {
        
    }
}

async function nexQuestion(){
    // Realizamos la petición 
    // - Le damos el array obtenido a la función setTmages
    // - Establecesmos el nuvo audio 

    try {        
        const imageArray = await fetchData(URLAPI+'question/createQuestion/next');// Esta promesa me tiene que dar 4 string que serán las src de las imagenes
        await setAudio();
        setImages(imageArray.arrayOfImages);
        play();
        vtnAcierto.classList.add('inactive')
    } catch (error) {
        
    }

}
function salir(){
    history.back();
    console.log('ME ha precionado !!');
}

const btnOne = createFunctionOfReply(0);
const btnTwo = createFunctionOfReply(1);
const btnThree = createFunctionOfReply(2);
const btnFor = createFunctionOfReply(3);


createQuestion();
setAudio();

btnPress.addEventListener('click', play);
imagenUno.addEventListener('click', btnOne);
imagenDos.addEventListener('click', btnTwo);
imagenTres.addEventListener('click', btnThree);
imagenCuatro.addEventListener('click', btnFor);
btnSiguiente.addEventListener('click', nexQuestion);
btnReiniciar.addEventListener('click', restart);
btnRepetir.addEventListener('click', repeat);
btnSalir[0].addEventListener('click',salir);
btnSalir[1].addEventListener('click',salir);