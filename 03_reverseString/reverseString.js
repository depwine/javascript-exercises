const reverseString = function(string) {

    let reverseString;
    let stringArray = new Array ();
    
    stringArray = Array.from(string);
    let reverseArray = stringArray.reverse();
    let arrayJoin = reverseArray.join("");    

    return arrayJoin;  
    
    };

// Do not edit below this line
module.exports = reverseString;
