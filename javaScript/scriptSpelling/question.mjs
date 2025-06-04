'use strict'
import { Name } from "./name.mjs"
import { AudioR } from "../scriptAudioImage/audio.mjs"

export class Question{
    #_name;
    #_audio;
    constructor(){
        this.#_name = new Name();
        this.#_audio = new AudioR();        
    }

    get name(){
        return this.#_name;        
    }
    get audio(){
        return this.#_audio;
    }
}