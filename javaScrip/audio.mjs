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
            'https://github.com/Josue-Emmanuel/PrimeraPractica/blob/main/audios/1%20OPEN.wav',
            'https://drive.google.com/file/d/1GcG5RKFOP7ZefwZUysqWXkWTjdBzygle/view?usp=drive_link',
            'https://drive.google.com/file/d/14IDuwM9uxX5jVpNNHgAy6bFhnbpYsUrE/view?usp=drive_link',
            'https://drive.google.com/file/d/14kxyrIZf1R2eTKgQ3bd24_bMxGJoOMkK/view?usp=drive_link',
            'https://drive.google.com/file/d/1jmcoA5MShfOpIMc8vU3v2y7LVVHsnC0Q/view?usp=drive_link',
            'https://drive.google.com/file/d/1U2RodCiTcNfDLx_-QIkqwy6nB-S3C842/view?usp=drive_link',
            'https://drive.google.com/file/d/1MafBbK42nPA3ljZp4cTqvxANgKwBffq9/view?usp=drive_link',
            'https://drive.google.com/file/d/1JX_W4R_tGt42be-lvZAcN3M7WSSJU9-U/view?usp=drive_link'          
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