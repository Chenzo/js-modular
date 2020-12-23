
import {simpleModule} from './modules/simpleModule.js';


const aNumber = 1234;


const noThis = {

    //Totally requires THIS... blarf.

    internalNumber: 6789,


    internalFunc: function() {
        return 3333;
    },

    init: function() {

        const internalNumber = 6633;

        console.log("noThis obj");
        console.log(aNumber + " - " + this.internalNumber);
        console.log(internalNumber);
        console.log(this.internalFunc());



        simpleModule.functionOne();
        let tester = simpleModule.functionTwo(667788);
    }
};


class primaryClass {
    constructor() {
      this._Initialize();
    }
  
    _Initialize() {
        console.log("INTITALIZING");
        console.log(aNumber);
    }
}


let _APP = null;


window.addEventListener('DOMContentLoaded', () => {
    console.log("working as intended");
    _APP = new primaryClass(); //classes and this kind of suck?
    noThis.init();

});