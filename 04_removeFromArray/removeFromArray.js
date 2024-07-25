const removeFromArray = function(arr, ...targets) {
    //complicated solution: loop thru every target, and splice out the idx if it is equal to a target.
    // for(i = 0; i < targets.length; i++){
    //     if(arr.includes(targets[i])){
    //         for(j = 0; j < arr.length; j++){
    //             if(arr[j] === targets[i]){
    //                 arr.splice(j, 1);
    //                 j--;
    //             }
    //         }
    //     }

    // }
    // return arr;

    //Less complicated: use filter to only include elements which are not included in the targets array.
    return arr.filter(val => (!targets.includes(val)))
};

// Do not edit below this line
module.exports = removeFromArray;
