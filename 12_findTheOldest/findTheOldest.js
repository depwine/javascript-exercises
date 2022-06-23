const findTheOldest = function(people) {
    
    
    //define new array to hold ages for comparison
    
    let ageArray = new Array ();
    
    
        //populate new array with ages (death-life)
    
    for (i = 0; i < people.length; i++){

        //has year of death

        if (people[i].yearOfDeath){
            ageArray.push(
                (people[i].yearOfDeath) - (people[i].yearOfBirth)
            );
            //if does not have year of death
        } else {
            ageArray.push(
                (2022) - (people[i].yearOfBirth)
            );
        }

    }
    
    //console.log("First age array after init: "+ageArray);
    
    //make func to compare ages
    
    const ageCompare = function(array){
    
        //declare oldest to be first by default
        let oldest = 0;
    
        //cycle array starting at second element
    
        for (i = 1; i < array.length ; i ++){
    
        //compare
            if (array[i] > array[i-1]){
                console.log(array[i]+" "+ array[i-1]);
                oldest = i;
            }
    
            return oldest;
    
    
    }
    }
    
    //console.log(ageCompare(ageArray));
    
    //return largest age's name
    //console.log(people[ageCompare(ageArray)].name);
    
    return people[ageCompare(ageArray)];
    };
// Do not edit below this line
module.exports = findTheOldest;
