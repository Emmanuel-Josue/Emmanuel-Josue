'use strict';
export class Imagen{

    //Atributos globales 
    #_imagenes;

    constructor(){
        //Llenamos el arreglo con las imagenes 
        this.#listaImagenes();
    }

    #listaImagenes(){
        this.#_imagenes = [
            "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/1%20open.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/2%20accept.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/3%20love.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/4%20learn.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/5%20hurry.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/6%20dare.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/7%20help.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/8%20dance.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/9%20erase.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/10%20change.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/11%20walk.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/12%20close.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/13%20date.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/14%20cook.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/15%20consider.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/16%20count.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/17%20Answer.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/18%20wish.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/19%20start.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/20%20push.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/21%20deliver.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/22%20listen.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/23%20expect.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/24%20wait.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/25%20study.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/26%20miss.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/27%20smoke.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/28%20enjoy.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/29%20like.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/30%20talk.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/31%20intend.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/32%20play.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/33%20wash.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/34%20clean.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/35%20arrive.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/36%20fill.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/37%20rain.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/38%20look.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/39%20show.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/40%20need.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/41%20name.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/42%20order.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/43%20stop.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/44%20stay.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/45%20belong.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/46%20plan.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/47%20plant.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/48%20practice.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/49%20ask.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/50%20want.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/51%20remember.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/52%20rent.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/53%20repeat.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/54%20resist.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/55%20jump.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/56%20follow.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/57%20point.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/58%20end.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/59%20finish.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/60%20work.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/61%20try.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/62%20climb.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/63%20use.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/64%20dress.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/65%20travel.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/66%20visit.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/67%20live.png?raw=true",
  "https://github.com/Josue-Emmanuel/imagesForPersonalPage/blob/main/imagenesVerbosRegulares/68%20turn.png?raw=true"
        ];
    }

    get imagenes(){
        return this.#_imagenes;
    }

}