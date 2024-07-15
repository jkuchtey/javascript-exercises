const reverseString = function(st) {
    
    if(typeof(st) != "string"){
        return "ERROR: Wrong input type"
    }
    else if(st == ""){
        return "";
    }
    else {
        stArr = st.split("")
        finalSt = ""
        for(let i = stArr.length-1; i >= 0; i--){
            finalSt += stArr[i];
        }
        return finalSt;
    }
};

// Do not edit below this line
module.exports = reverseString;
