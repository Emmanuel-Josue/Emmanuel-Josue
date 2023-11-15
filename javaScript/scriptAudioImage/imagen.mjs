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
            '../recursos/imagenes/imagenesVerbosRegulares/1 open.png',
            '../recursos/imagenes/imagenesVerbosRegulares/2 accept.png',
            '../recursos/imagenes/imagenesVerbosRegulares/3 love.png',
            '../recursos/imagenes/imagenesVerbosRegulares/4 learn.png',
            '../recursos/imagenes/imagenesVerbosRegulares/5 hurry.png',
            '../recursos/imagenes/imagenesVerbosRegulares/6 dare.png',
            '../recursos/imagenes/imagenesVerbosRegulares/7 help.png',
            '../recursos/imagenes/imagenesVerbosRegulares/8 dance.png',
            '../recursos/imagenes/imagenesVerbosRegulares/9 erase.png',        
            '../recursos/imagenes/imagenesVerbosRegulares/10 change.png',
            '../recursos/imagenes/imagenesVerbosRegulares/11 walk.png',
            '../recursos/imagenes/imagenesVerbosRegulares/12 close.png',
            '../recursos/imagenes/imagenesVerbosRegulares/13 date.png',
            '../recursos/imagenes/imagenesVerbosRegulares/14 cook.png',
            '../recursos/imagenes/imagenesVerbosRegulares/15 consider.png',
            '../recursos/imagenes/imagenesVerbosRegulares/16 count.png',
            '../recursos/imagenes/imagenesVerbosRegulares/17 Answer.png',
            '../recursos/imagenes/imagenesVerbosRegulares/18 wish.png',
            '../recursos/imagenes/imagenesVerbosRegulares/19 start.png',
            '../recursos/imagenes/imagenesVerbosRegulares/20 push.png',
            '../recursos/imagenes/imagenesVerbosRegulares/21 deliver.png',
            '../recursos/imagenes/imagenesVerbosRegulares/22 listen.png',
            '../recursos/imagenes/imagenesVerbosRegulares/23 expect.png',
            '../recursos/imagenes/imagenesVerbosRegulares/24 wait.png',
            '../recursos/imagenes/imagenesVerbosRegulares/25 study.png',
            '../recursos/imagenes/imagenesVerbosRegulares/26 miss.png',
            '../recursos/imagenes/imagenesVerbosRegulares/27 smoke.png',
            '../recursos/imagenes/imagenesVerbosRegulares/28 enjoy.png',
            '../recursos/imagenes/imagenesVerbosRegulares/29 like.png',
            '../recursos/imagenes/imagenesVerbosRegulares/30 talk.png',
            '../recursos/imagenes/imagenesVerbosRegulares/31 intend.png',
            '../recursos/imagenes/imagenesVerbosRegulares/32 play.png',
            '../recursos/imagenes/imagenesVerbosRegulares/33 wash.png',
            '../recursos/imagenes/imagenesVerbosRegulares/34 clean.png',
            '../recursos/imagenes/imagenesVerbosRegulares/35 arrive.png',
            '../recursos/imagenes/imagenesVerbosRegulares/36 fill.png',
            '../recursos/imagenes/imagenesVerbosRegulares/37 rain.png',
            '../recursos/imagenes/imagenesVerbosRegulares/38 look.png',
            '../recursos/imagenes/imagenesVerbosRegulares/39 show.png',
            '../recursos/imagenes/imagenesVerbosRegulares/40 need.png',
            '../recursos/imagenes/imagenesVerbosRegulares/41 name.png',
            '../recursos/imagenes/imagenesVerbosRegulares/42 order.png',
            '../recursos/imagenes/imagenesVerbosRegulares/43 stop.png',
            '../recursos/imagenes/imagenesVerbosRegulares/44 stay.png',
            '../recursos/imagenes/imagenesVerbosRegulares/45 belong.png',
            '../recursos/imagenes/imagenesVerbosRegulares/46 plan.png',
            '../recursos/imagenes/imagenesVerbosRegulares/47 plant.png',
            '../recursos/imagenes/imagenesVerbosRegulares/48 practice.png',
            '../recursos/imagenes/imagenesVerbosRegulares/49 ask.png',
            '../recursos/imagenes/imagenesVerbosRegulares/50 want.png',
            '../recursos/imagenes/imagenesVerbosRegulares/51 remember.png',
            '../recursos/imagenes/imagenesVerbosRegulares/52 rent.png',
            '../recursos/imagenes/imagenesVerbosRegulares/53 repeat.png',
            '../recursos/imagenes/imagenesVerbosRegulares/54 resist.png',
            '../recursos/imagenes/imagenesVerbosRegulares/55 jump.png',
            '../recursos/imagenes/imagenesVerbosRegulares/56 follow.png',
            '../recursos/imagenes/imagenesVerbosRegulares/57 point.png',
            '../recursos/imagenes/imagenesVerbosRegulares/58 end.png',
            '../recursos/imagenes/imagenesVerbosRegulares/59 finish.png',
            '../recursos/imagenes/imagenesVerbosRegulares/60 work.png',
            '../recursos/imagenes/imagenesVerbosRegulares/61 try.png',
            '../recursos/imagenes/imagenesVerbosRegulares/62 climb.png',
            '../recursos/imagenes/imagenesVerbosRegulares/63 use.png',
            '../recursos/imagenes/imagenesVerbosRegulares/64 dress.png',
            '../recursos/imagenes/imagenesVerbosRegulares/65 travel.png',
            '../recursos/imagenes/imagenesVerbosRegulares/66 visit.png',
            '../recursos/imagenes/imagenesVerbosRegulares/67 live.png',
            '../recursos/imagenes/imagenesVerbosRegulares/68 turn.png',

        ];
    }

    get imagenes(){
        return this.#_imagenes;
    }

}