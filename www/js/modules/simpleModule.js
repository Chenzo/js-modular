
export const simpleModule = (() => {


    
    const functionOne = function() {
        console.log("here i am");
    }

    const functionTwo = function(anArg) {
        console.log('functionTwo ' + anArg);
        return anArg;
    }

    return {
        functionOne: functionOne,
        functionTwo: functionTwo
    };
})();