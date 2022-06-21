let remove;
let array = new Array();

const removeFromArray = function(array, remove) {

    //for loop for each argument
    
        for (i = 1; i < arguments.length; i++){
    
    
    
            //take this into the for loop, run through array 1 by 1 ::: dont use i
            for (j = 0; j < array.length; j++){
    
    
                //if array[j] match argument[i]
                if (array[j] === arguments[i]){
    
                    console.log(array[j]);
    
                    //remove
                    array.splice(j,1);
    
                }
    
            }
    
    
        }

        
    if (array.length < 1){
        return array = new Array ();
    
    } else {
        return array;
    }
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
