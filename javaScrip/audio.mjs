'use strict';
export class AudioR{
    #_audios;
    audio;
    constructor(){
        // Colocamos los elementos en el array
        this.#listaAudios();     
        
    }

    #listaAudios(){
        this.#_audios = [
            '../recursos/audio/audioVerbosRegularesWAV/1 OPEN.wav',
            '../recursos/audio/audioVerbosRegularesWAV/2 ACCEPT.wav',          
            '../recursos/audio/audioVerbosRegularesWAV/3 LOVE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/4 LEARN.wav',
            '../recursos/audio/audioVerbosRegularesWAV/5 HURRY.wav',
            '../recursos/audio/audioVerbosRegularesWAV/6 DARE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/7 HELP.wav',
            '../recursos/audio/audioVerbosRegularesWAV/8 DANCE.wav',
        ]
    }
    get audios(){
        return this.#_audios;
    }
    crearOAudio(direccion){
        console.log('La dirección nobtenida es: '+ direccion);
        
        this.audio = new Audio(direccion); 
    }
    establecerRutaAReproducir(direccion){
        this.audio.src = direccion;
    }
    // para que this pueda tomar como contexto a su objeto. 
    reproducir = () => {      
        console.log('Se preciono el boton press');
        console.log('Ruta a reproducir: ' + this.audio.src);
        this.audio.play();            
    }
    //Una pagina se repite en tiempo de ejecución ?? 
    
}