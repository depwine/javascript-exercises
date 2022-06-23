const getTheTitles = function(inputArray) {


let titleOne = inputArray[0].title;
let titleTwo = inputArray[1].title;

let titleArray = new Array();

titleArray.push(titleOne, titleTwo);

return titleArray;

};


// Do not edit below this line
module.exports = getTheTitles;
