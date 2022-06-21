let first;
let second;
let smaller;
let larger;
let sum = 0;

const sumAll = function(first, second) {
    
sum = 0;

//check which number is smaller

if (first < second){
    smaller = first;
    larger = second;
} else if (second < first){
    smaller = second;
    larger = first;
}


// if numbers are equal or separate by 1

if (smaller < 1 || larger < 1){
    return "ERROR";
} else if (typeof smaller != "number" || typeof larger != "number"){
    return "ERROR";
} else if (smaller == larger || (larger - smaller) == 1){

    sum = smaller + larger;

} else {

for (i = smaller; i <= larger; i++){

    sum +=i;

}
}

return sum;

}
// Do not edit below this line
module.exports = sumAll;