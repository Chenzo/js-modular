
export const simpleModule = (() => {

    console.log("simpleModule fires when imported");
    
    const functionOne = function() {
        console.log("here i am");
    }

    const functionTwo = function(anArg) {
        console.log('functionTwo ' + anArg);
        let adjusted = privateFunction(anArg);
        return adjusted;
    }

    const privateFunction = function(theArg) {
        return theArg + " - adjusted";
    }

    return {
        functionOne: functionOne,
        functionTwo: functionTwo
    };
})();