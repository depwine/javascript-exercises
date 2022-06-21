let string;
let num;

const repeatString = function(string, num) {

    let newString = string;


    if (num === 1){
        return newString;

    } else if (num == 0) {

        newString = ""; 
        return newString;

    } else if (num < 1){

        newString = "ERROR";
        return newString;

    } else if (num > 1) {

        for (i = 1 ; i < num; i++){
            newString += string;   
   
        } 

        return newString;  


}
}

// Do not edit below this line
module.exports = repeatString;
