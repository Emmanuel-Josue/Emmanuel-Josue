'use strict'

import { Question } from "./question.mjs"

export class Operations {

    #_question;
    #_randomNumber;
    #_hWindow;
    #_eWindow
    #_spelling;
    #_lastWindow;

    constructor(hWindow, eWindow, spelling, lastWindow){
        this.#_question = new Question();
        this.#_hWindow = hWindow;
        this.#_eWindow = eWindow;
        this.#_spelling = spelling;
        this.#_lastWindow = lastWindow;
        this.#createIntent();
    }
    validation(date){

        let buffer = this.#convertToLowercase(date);
        // taken away space that been at first and at the end.  
        buffer = buffer.trim();
        //the names of de words should in lowercase
        const answer = this.#_question.name.names[this.#_randomNumber];
        console.log("La respuesta del sistema");
        console.log(answer);
        if(buffer === answer){
            console.log("Your response is rith");
            this.#deleteElement(this.#_randomNumber, this.#_question.audio.audios, this.#_question.name.names);
            this.#activateWindow(this.#_hWindow);
        }
        else{
            console.log("Your response is bad.");
            this.#activateWindow(this.#_eWindow);
        }
    }
    playTheAudio(){
        this.#_question.audio.reproducir();
    }
    repeatExercise(){
        this.#disableWindow(this.#_eWindow);
        this.#_spelling.value = "";
    }
    askTheFollowingQuestion(){
        if (this.#_question.name.names.length > 0) {
            this.#createIntent();
            this.#disableWindow(this.#_hWindow);
            this.#_spelling.value = "";
            this.playTheAudio();
        }
        else{
            this.#activateWindow(this.#_lastWindow);
        }

    }
    #createIntent(){
        console.log("Entra el if del metodo createIntent");            
        //Select the number that will be the answer
        this.#randomNumber(this.#_question.name.names.length)
        //To make random number
        this.#_question.audio.crearOAudio(this.#_question.audio.audios[this.#_randomNumber]);

    }
    #randomNumber(range){
        this.#_randomNumber = Math.floor(Math.random() * (range))
    }
    #convertToLowercase(text){
        return text.toLowerCase();
    }
    #activateWindow(element){
        element.classList.remove("inactive");
    }
    #disableWindow(element){
        element.classList.add("inactive");
    }
    #deleteElement(index, arrayOne, arrayTwo){
        arrayOne.splice(index, 1);
        arrayTwo.splice(index, 1);
    }
}