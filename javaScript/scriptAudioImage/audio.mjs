'use strict';
export class AudioR{    
    #_audios;
    audio;
    bug = document.querySelector('.finding_error');
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
            '../recursos/audio/audioVerbosRegularesWAV/9 ERASE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/10 CHANGE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/11 WALK.wav',
            '../recursos/audio/audioVerbosRegularesWAV/12 CLOSE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/13 DATE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/14 COOK.wav',
            '../recursos/audio/audioVerbosRegularesWAV/15 CONSIDER.wav',
            '../recursos/audio/audioVerbosRegularesWAV/16 COUNT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/17 ANSWER.wav',
            '../recursos/audio/audioVerbosRegularesWAV/18 WISH.wav',
            '../recursos/audio/audioVerbosRegularesWAV/19 START.wav',
            '../recursos/audio/audioVerbosRegularesWAV/20 PUSH.wav',
            '../recursos/audio/audioVerbosRegularesWAV/21 DELIVER.wav',
            '../recursos/audio/audioVerbosRegularesWAV/22 LISTEN.wav',
            '../recursos/audio/audioVerbosRegularesWAV/23 EXPECT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/24 WAIT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/25 STUDY.wav',
            '../recursos/audio/audioVerbosRegularesWAV/26 MISS.wav',                                                
            '../recursos/audio/audioVerbosRegularesWAV/27 SMOKE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/28 ENJOY.wav',
            '../recursos/audio/audioVerbosRegularesWAV/29 LIKE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/30 TALK.wav',
            '../recursos/audio/audioVerbosRegularesWAV/31 INTEND.wav',
            '../recursos/audio/audioVerbosRegularesWAV/32 PLAY.wav',
            '../recursos/audio/audioVerbosRegularesWAV/33 WASH.wav',
            '../recursos/audio/audioVerbosRegularesWAV/34 CLEAN.wav',
            '../recursos/audio/audioVerbosRegularesWAV/35 ARRIVE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/36 FILL.wav',
            '../recursos/audio/audioVerbosRegularesWAV/37 RAIN.wav',
            '../recursos/audio/audioVerbosRegularesWAV/38 LOOK.wav',
            '../recursos/audio/audioVerbosRegularesWAV/39 SHOW.wav',
            '../recursos/audio/audioVerbosRegularesWAV/40 NEED.wav',
            '../recursos/audio/audioVerbosRegularesWAV/41 NAME.wav',
            '../recursos/audio/audioVerbosRegularesWAV/42 ORDER.wav',
            '../recursos/audio/audioVerbosRegularesWAV/43 STOP.wav',
            '../recursos/audio/audioVerbosRegularesWAV/44 STAY.wav',
            '../recursos/audio/audioVerbosRegularesWAV/45 BELONG.wav',
            '../recursos/audio/audioVerbosRegularesWAV/46 PLAN.wav',
            '../recursos/audio/audioVerbosRegularesWAV/47 PLANT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/48 PRACTICE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/49 ASK.wav',
            '../recursos/audio/audioVerbosRegularesWAV/50 WANT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/51 REMEMBER.wav',
            '../recursos/audio/audioVerbosRegularesWAV/52 RENT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/53 REPEAT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/54 RESIST.wav',
            '../recursos/audio/audioVerbosRegularesWAV/55 JUMP.wav',
            '../recursos/audio/audioVerbosRegularesWAV/56 FOLLOW.wav',
            '../recursos/audio/audioVerbosRegularesWAV/57 POINT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/58 END.wav',
            '../recursos/audio/audioVerbosRegularesWAV/59 FINISH.wav',
            '../recursos/audio/audioVerbosRegularesWAV/60 WORK.wav',
            '../recursos/audio/audioVerbosRegularesWAV/61 TRY.wav',
            '../recursos/audio/audioVerbosRegularesWAV/62 CLIMB.wav',
            '../recursos/audio/audioVerbosRegularesWAV/63 USE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/64 DRESS.wav',
            '../recursos/audio/audioVerbosRegularesWAV/65 TRAVEL.wav',
            '../recursos/audio/audioVerbosRegularesWAV/66 VISIT.wav',
            '../recursos/audio/audioVerbosRegularesWAV/67 LIVE.wav',
            '../recursos/audio/audioVerbosRegularesWAV/68 TURN.wav'


        ]
    }
    get audios(){
        return this.#_audios;
    }
    crearOAudio(direccion){        
        this.audio = new Audio(direccion); 
    }
    establecerRutaAReproducir(direccion){
        this.audio.src = direccion;
    }
    // para que this pueda tomar como contexto a su objeto. 
    reproducir = () => {      
        this.audio.play();   
        this.bug.classList.toggle('finding_error');
    }
    //Una pagina se repite en tiempo de ejecución ?? 
    
}