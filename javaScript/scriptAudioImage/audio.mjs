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
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/1%20OPEN.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/2%20ACCEPT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/3%20LOVE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/4%20LEARN.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/5%20HURRY.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/6%20DARE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/7%20HELP.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/8%20DANCE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/9%20ERASE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/10%20CHANGE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/11%20WALK.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/12%20CLOSE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/13%20DATE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/14%20COOK.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/15%20CONSIDER.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/16%20COUNT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/17%20ANSWER.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/18%20WISH.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/19%20START.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/20%20PUSH.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/21%20DELIVER.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/22%20LISTEN.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/23%20EXPECT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/24%20WAIT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/25%20STUDY.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/26%20MISS.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/27%20SMOKE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/28%20ENJOY.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/29%20LIKE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/30%20TALK.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/31%20INTEND.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/32%20PLAY.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/33%20WASH.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/34%20CLEAN.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/35%20ARRIVE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/36%20FILL.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/37%20RAIN.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/38%20LOOK.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/39%20SHOW.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/40%20NEED.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/41%20NAME.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/42%20ORDER.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/43%20STOP.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/44%20STAY.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/45%20BELONG.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/46%20PLAN.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/47%20PLANT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/48%20PRACTICE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/49%20ASK.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/50%20WANT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/51%20REMEMBER.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/52%20RENT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/53%20REPEAT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/54%20RESIST.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/55%20JUMP.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/56%20FOLLOW.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/57%20POINT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/58%20END.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/59%20FINISH.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/60%20WORK.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/61%20TRY.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/62%20CLIMB.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/63%20USE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/64%20DRESS.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/65%20TRAVEL.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/66%20VISIT.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/67%20LIVE.wav?raw=true",
            "https://github.com/Josue-Emmanuel/audiosForPersonalPage/blob/main/proyect_relation_audio_image/regularVerbsAudio/68%20TURN.wav?raw=true"
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