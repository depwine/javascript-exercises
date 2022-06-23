const caesar = function(inString, inNumber) {

    //break string into array
    let inStringArray = new Array ();
    inStringArray = inString.split("");

    // test new array
    //console.log(inStringArray);

    //set alphabet as reference
    let alphabetUpper = new Array();
    let alphabetLower = new Array();

    alphabetUpper.push("A", "B", "C", "D", "E", "F", "G", "H", "I",
        "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z")

    alphabetLower.push("a", "b", "c", "d", "e", 
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")

    //declare cipher array
    let cipher = new Array ();

//go through each letter in array
for (j = 0; j < inStringArray.length; j++){

    //check if NOT special character

    if (inStringArray[j] !== "!" && inStringArray[j] !== "," && 
    inStringArray[j] !== " "){


         //get "i" of inString
         //loop through alphabet
            for (i = 0; i < alphabetUpper.length; i++){

                //check if upper

                if(inStringArray[j] === alphabetUpper[i]){

                        cipher.push(alphabetUpper[(i + 
                            alphabetUpper.length + inNumber)
                        % alphabetUpper.length]);

                } else if (inStringArray[j] === alphabetUpper[i]){
                    //if they match and it's not a Z
                    cipher.push(alphabetUpper [i + inNumber]);

                       //if lower
                } else if (inStringArray[j] === alphabetLower[i]){

                    cipher.push(alphabetLower[(i + 
                        alphabetLower.length + inNumber)
                        % alphabetLower.length]);

                } else if ((inStringArray[j] === alphabetLower[i])){
                    //if they match and it's not a Z
                    cipher.push(alphabetLower [i + inNumber]);
                    
                } 
                }
                    // if it's a special character, preserve it
        } else  if (inStringArray[j] === "!" || 
            inStringArray[j] === "," || 
            inStringArray[j] === " "){

            cipher.push(inStringArray[j]);
            
            }
}

    // make a string once more
    let outcomeString = cipher.join("");
    //console.log("result: "+outcomeString);
    return outcomeString;



}

// Do not edit below this line
module.exports = caesar;
