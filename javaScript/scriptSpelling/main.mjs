'use strict';

import { Operations } from "./operations.mjs";

// -------------------------------- conect elements ---------------------------------
const vtnAcierto = document.querySelector('#hWindow');
const vtnError = document.querySelector('#eWindow');
const btnPress = document.querySelector('#btnAudio');
const btnSiguiente = document.querySelector('#nextBtn');
const btnRepeat = document.querySelector('#repeatBtn');
const btnSalir = document.querySelectorAll('#exitBtn');
const vtnFinal = document.querySelector('#endWindow');
const btnReiniciar = document.querySelector('#restartBtn');
const btnSendResponse = document.querySelector('#sendResponse');
const spelling = document.querySelector("#response");

const question = new Operations(vtnAcierto, vtnError, spelling, vtnFinal);

function validation(){
    const date = spelling.value;
    console.log(date);
    question.validation(date);
}
function playAudio(){    
    question.playTheAudio();
}
const repeatExercise = () =>{
    question.repeatExercise();
}
const makeNextQuestion = () =>{
    question.askTheFollowingQuestion();
}
const reload = () =>{
    location.reload(true);
}
const getOut = () =>{    
    history.back();
}
function enter  (event) {
    if (event.key === 'Enter') {
        invalidateAction(event);        
        validation();
    }
}

const invalidateAction = (event) => {    
    event.preventDefault(); 
}

btnSendResponse.addEventListener("click", validation)
btnPress.addEventListener("click", playAudio);
btnRepeat.addEventListener("click", repeatExercise);
btnSiguiente.addEventListener("click", makeNextQuestion);
btnReiniciar.addEventListener("click", reload);
btnSalir[0].addEventListener("click", getOut);
btnSalir[1].addEventListener("click", getOut);
spelling.addEventListener("keydown", enter);
