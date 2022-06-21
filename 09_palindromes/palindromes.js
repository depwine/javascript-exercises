let string;
let noSpace;
let stringArr = new Array();
let stringRevArr = new Array();
let compare = true;

const palindromes = function (string) {


//get rid of any white space
string = string.replace(/\s+/g, "");

//replace special characters
string = string.replace(/[^a-zA-Z ]/g, "");

// upper case it
string = string.toUpperCase();

//cycle through letters

for (i = 0; i < string.length; i++){

//if space

    if (string.charAt(i) === ""){
        console.log("has spaces");
    }

}

//if string 1 word:
stringArr = string.split("");
stringRevArr = string.split("");





//create reverse string
stringRevArr = stringRevArr.reverse();

//list both
console.log(stringArr);
console.log(stringRevArr);

//join letter for easy compare

stringArr = stringArr.join("");
stringRevArr = stringRevArr.join("");

//check both
console.log(stringArr);
console.log(stringRevArr);

//compare new joined strings.

if (stringArr === stringRevArr){

    compare = true;

} else {

    compare = false;

}


return compare;

};

// Do not edit below this line
module.exports = palindromes;
