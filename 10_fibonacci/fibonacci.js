let fibNumber;
let numOne = 1;
let numTwo = 1;
let total;


const fibonacci = function(fibNumber) {

    fibNumber = parseInt(fibNumber);

    total = 0;
    numOne = 1;
    numTwo = 1;

    //get for 1
    if (fibNumber < 1){

        return "OOPS";
        
    } else if (fibNumber === 1){

        return numOne;

    } else if (fibNumber === 2){

        return numTwo;

    } else if (fibNumber > 1){

        //fib seq

        for (i = 2; i < fibNumber; i++){

            total = numOne + numTwo;

            numOne = numTwo;
            numTwo = total;


        }

        return total;

    }



};


// Do not edit below this line
module.exports = fibonacci;
