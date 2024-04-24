'use strict'

export class Sound{
    #audio;
    constructor(address){
        this.#audio = new Audio(address);
    }
    play = () =>{
        this.#audio.play();
    }
}
