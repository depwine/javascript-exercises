let f;
let c;

//c = (f - 32) / 1.8000;
//f = (c*1.8000) + 32;

const ftoc = function(f) {

    c = (f - 32) / 1.8000;
    c = Math.round(c * 10) / 10;
    return c;

};

const ctof = function(c) {

    f = (c * 1.8000) + 32;
    f = Math.round(f * 10) / 10;
    return f;
    

};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};