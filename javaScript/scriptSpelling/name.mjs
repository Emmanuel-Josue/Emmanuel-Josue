'use strict'
export class Name{
    //  global attributes
    #_names

    constructor(){
        this.#listOfNames();
    }
    #listOfNames(){
        // It's more important that the names will be in lowercase. 
        this.#_names = [
            "open", "accept", "love",
             "learn", "hurry", "dare", "help", "dance", "erase",
            "change", "walk", "close", "date", "cook", "consider", "count", "answer", "wish",
            "start", "push", "deliver", "listen", "expect", "wait", "study", "miss", "smoke",
            "enjoy", "like", "talk", "intend", "play", "wash", "clean", "arrive", "fill",
            "rain", "look", "show", "need", "name", "order", "stop", "stay", "belong", "plan",
            "plant", "practice", "ask", "want", "remember", "rent", "repeat", "resist", "jump",
            "follow", "point", "end", "finish", "work", "try", "climb", "use", "dress", "travel",
            "visit", "live", "turn"
          ]
          
    }

    get names(){
        return this.#_names;
    }
}
