let numberOne;
let numberTwo;
let outcome;
let numArray = new Array();

const add = function(numberOne, numberTwo) {
    outcome = 0;
	outcome = (numberOne + numberTwo);
    return outcome;
};

const subtract = function(numberOne, numberTwo) {
    outcome = 0;
    outcome = (numberOne - numberTwo);
    return outcome;
};

const sum = function(numArray) {

    outcome = 0

    //if empty
    if (numArray.legth === 0){

      outcome = new Array ();

    } else if (numArray.length === 1){
       //if array of 1

        outcome = numArray[0];

    } else {
 
    for (i = 0; i < numArray.length; i++){

        outcome += numArray[i];

    }
    }

    return outcome;
};

const multiply = function(numArray) {

  console.log("Multiply:");

  //set outcome to be 1st number in array (in case there's only 
  // 1 # in array):
  outcome = numArray[0];

  //if there is more than 1 # in array:
  if (numArray.length >= 1){

      //loop through each number, starting with the second,
      //multiplying them all together

      for (i = 1; i < numArray.length; i++){

          outcome = outcome * numArray[i];
  
      }
  }

  

  return outcome;
};


const power = function(numberOne, numberTwo) {

    outcome = 0;

    outcome = Math.pow(numberOne, numberTwo);
    return outcome;
	
};

const factorial = function(numberOne) {
	outcome = 1;

    //if zero

    if (numberOne === 0){
      outcome = 1;
      return outcome;
    } else if (numberOne == 1){
      // if 1
        console.log("it's 1, so outcome is: "+outcome);
        outcome *= numberOne;

    } else {
      // if > 1

        console.log("it's >1, so outcome is: "+outcome);


        //loop through each number from 1 to #argument
        for (i = 1; i <= numberOne; i++){

            outcome = outcome * [i];

        }

    }

    return outcome;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
